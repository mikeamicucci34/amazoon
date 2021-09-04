class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
          params[:user][:username],
          params[:user][:password]
        )
    
        if @user
          login(@user)
          render "api/users/show" # Render users show page if the user is logged in. May want to change to user homepage
        else
          render json: ["We cannot find an account with that email address / password"], status: 401
        end
      end

    def destroy
        @user = current_user
        if @user
          logout
          render "{}"
        else
          render status: 404
        end
      end

end
