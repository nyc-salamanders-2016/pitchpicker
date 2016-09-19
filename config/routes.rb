Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'user#index'

  resources :users, only: [:index, :new, :create]
  resources :projects, only: [:index, :new, :create, :edit, :destroy]
  resources :votes, only: [:index]
  resources :rankings, only: [:index]
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end

