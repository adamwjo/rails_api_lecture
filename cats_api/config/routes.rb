Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/cats" => "cats#index"
  post "/cats" => "cats#create"

  get "/hobbies" => "hobbies#index"

  post "/new_hobby" => "cat_hobbies#new"
end
