class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all
    if params["category_id"]
      @posts = []
      @category = Category.find(params["category_id"]) 
      if @category.parent_id
        render json: @category.posts
      else
        @categories = Category.sub_categories(@category.id)
        for i in @categories do
            @posts << i.posts
        end
        render json: @posts.flatten()
      end
    elsif params["user_id"]
      @user = User.find(params["user_id"])
      if @user
        render json: @user.posts  
      end
    end
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @category = Category.find_by(name: params["category"])
    @post = Post.new(title: params["details"]["title"], city: params["details"]["location"], description: params["details"]["description"])
    @user = User.find_by(email: params["email"])  
    puts params
    if @post
      @user.posts << @post
      @category.posts << @post 
      render json: @post, status: :created, location: @post
    else 
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:description, :image)
    end
end
