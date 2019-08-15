Rails.application.routes.draw do
  devise_for :users


  namespace :api do
    namespace :v1 do
      resources :courts, only: [:index, :show] do
        resources :reviews, only: [:create, :new, :index]
      end
    end
  end

  resources :courts, only:[:index, :show, :new, :create, :edit, :update, :destroy] do
    resources :reviews, only: [:index, :new, :create, :edit, :destroy]
  end

  get '*page', to: 'courts#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'courts#index'
end
