Rails.application.routes.draw do
  get '/category/:id/:search' => 'categories#search_category_posts'

  resources :posts

  resources :categories do
    resources :posts, only: [:create, :index]
  end
  
  resources :users do
    resources :posts, only: [:create, :index, :show]
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'

  get '/primarycategories' => 'categories#primary_categories'
  get '/:name/subcategories' => 'categories#sub_categories'

  get '/posts/search/:search' => 'posts#search_posts'

end
