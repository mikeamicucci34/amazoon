class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
   
        if @user.save
          login(@user)
          render "api/users/show"
        else
          render json: @user.errors.full_messages, status: 422
        end
    end

    def index 
      @users = User.all
      render :index
    end

    def user_params 
        params.require(:user).permit(:email, :password, :username)
    end

end
