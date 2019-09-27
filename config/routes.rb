Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      post 'courts/search', to: 'courts#search'
      resources :courts, only: [:index, :show] do
        resources :reviews, only: [:create, :new, :index]
      end
    end
  end

  resources :courts, only:[:index, :show, :new, :create, :edit, :update, :destroy, :search] do
    resources :reviews, only: [:index, :new, :create, :edit, :destroy]
  end

  get '*page', to: 'courts#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
