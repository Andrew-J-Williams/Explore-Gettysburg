Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :events
      resources :users
      resources :comments
      resources :scenarios
      resources :user_choices
    end
  end
end
