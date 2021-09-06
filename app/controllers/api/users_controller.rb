class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        # debugger

        if @user.save
          login(@user)
        else
          render json: @user.errors.full_messages, status: 422
        end
        # debugger
    end

    def user_params 
        params.require(:user).permit(:email, :password, :username)
    end

end
