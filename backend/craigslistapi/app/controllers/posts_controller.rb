class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    posts = Post.all
    if params["category_id"]
      render json: Post.get_posts_from_category(params)
    elsif params["user_id"]
      user = User.find(params["user_id"])
      if user
        render json: user.posts  
      end
    end
  end

  # GET /posts/1
  def show
    post = Post.find(params[:id])
    render json: PostSerializer.new(post).to_serialized_json
  end

  def search_posts
    posts = Post.where("title LIKE ?", "%#{params[:search]}%")
    render json: PostSerializer.new(posts).to_serialized_json
  end
  

  # POST /posts
  def create
    category = Category.find_by(name: params["category"])
    post = Post.new(title: params["details"]["title"], city: params["details"]["location"], description: params["details"]["description"])
    user = User.find_by(email: params["email"])  
    if post
      user.posts << post
      category.posts << post 
      render json: post, status: :created, location: PostSerializer.new(post).to_serialized_json
    else 
      render json: post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if post.update(post_params)
      render json: PostSerializer.new(post).to_serialized_json
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    post = Post.find(params[:id])
    post.destroy
  end

  private
     # Use callbacks to share common setup or constraints between actions.
     def set_post
      post = Post.find(params[:id])
    end
    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:description, :image)
    end
end
