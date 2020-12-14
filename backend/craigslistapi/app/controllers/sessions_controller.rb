class SessionsController < ApplicationController
    def create 
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            render json: user, status: :created, location: UserSerializer.new(user).to_serialized_json
        else
            error = {errors: "Wrong Email or Password"}
            render json: error, status: :unprocessable_entity
        end
    end
end
