class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  # GET /categories
  def index
    categories = Category.all
    render json: CategorySerializer.new(categories).to_serialized_json
  end

  # GET /categories/1
  def show
    category = Category.find(params[:id])
    render json: CategorySerializer.new(category).to_serialized_json
  end

  def primary_categories
    categories = Category.primary_categories
    render json: CategorySerializer.new(categories).to_serialized_json
  end

  def search_category_posts
    category = Category.find(params[:id])
    if category && params[:search]
      render json: category.posts.where("title LIKE ?", "%#{params[:search]}%")
    else
      render json: category, status: unprocessable_entity 
    end
  end
  
  def sub_categories
    category = Category.find_by(name: params[:name]);
    if category
      categories = Category.sub_categories(category.id)
      render json: CategorySerializer.new(categories).to_serialized_json
    else
      render json: category, status: :unprocessable_entity
    end
  end
  # POST /categories
  def create
    category = Category.new(category_params)

    if category.save
      render json: category, status: :created, location: category
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if category.update(category_params)
      render json: CategorySerializer.new(category).to_serialized_json
    else
      render json: category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:name)
    end
end
