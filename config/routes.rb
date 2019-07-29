Rails.application.routes.draw do
  devise_for :users
  
  get '*page', to: 'static_pages#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static_pages#index'
end
