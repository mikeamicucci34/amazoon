Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :product, only: [:show, :index]

    # get '/login', to: 'sessions#show'
  end

  root "static_pages#root"

end
