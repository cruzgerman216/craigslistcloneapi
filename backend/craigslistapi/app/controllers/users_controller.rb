class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    users = User.all

    render json: UserSerializer.new(users).to_serialized_json
  end

  # GET /users/1
  def show
    user = User.find(params[:id])
    render json: UserSerializer.new(user).to_serialized_json
  end

  # POST /users
  def create
    user = User.new(password: params["password"], email: params["email"], city: params["city"])
    
    if user.save
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if user.update(user_params)
      render json: UserSerializer.new(user).to_serialized_json
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    user.destroy
  end

  private
   # Use callbacks to share common setup or constraints between actions.
   def set_user
    user = User.find(params[:id])
  end
    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:password, :email)
    end
end
