class SessionsController < ApplicationController
    # def destroy
    #     session.clear 
    # end

    def create 
        @user = User.find_by(email: params[:email])
        if @user && @user.authenticate(params[:password])
            # session[:user_id] = user.id
            render json: @user, status: :created, location: @user
        else
            @error = {errors: "Wrong Password"}
            render json: @error, status: :unprocessable_entity
        end
    end
end
