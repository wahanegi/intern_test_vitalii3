Rails.application.routes.draw do
  devise_for :users,controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    confirmations: "users/confirmations",
    passwords: "users/passwords"
  }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "new_posted_message" => "posted_messages#new"
  get  "posted_message" => "posted_messages#show"
  post "posted_messages" => "posted_messages#create"
  get "home" => "static_pages#home"
  get "*path" => "static_pages#home"
  root "static_pages#home"

end
