Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:show, :index] do
      resources :reviews, only: [:index, :destroy, :create, :update, :show]
    end
    resources :carts, only: [:index, :show, :destroy, :create]
    

    # get '/login', to: 'sessions#show'
  end


  root "static_pages#root"

end
