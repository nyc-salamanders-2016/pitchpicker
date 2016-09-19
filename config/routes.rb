Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'user#index'

  resources :users, only: [:index, :new, :edit, :create, :destroy]
  resources :projects, only: [:index, :new, :create, :edit, :destroy]
  resources :votes, only: [:index, :new, :create]
  resources :rankings, only: [:index, :new, :create]
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end

