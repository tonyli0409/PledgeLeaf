Rails.application.routes.draw do
  root 'static_pages#comingsoon'
  post '/signup', to: 'static_pages#signup'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
