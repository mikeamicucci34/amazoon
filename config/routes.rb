Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:show, :index]
    resources :carts, only: [:index, :show, :destroy, :create]

    # get '/login', to: 'sessions#show'
  end


  root "static_pages#root"

end
