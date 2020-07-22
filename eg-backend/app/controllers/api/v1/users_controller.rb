class Api::V1::UsersController < ApplicationController

    def index 
        @users = User.all

        render json: @users, status: 200
    end

    def show
        @user = User.find(user_params[:id])

        render json: @user, status: 200
    end

    def create
        @user = User.find_or_create_by(username: user_params[:username])

        render json: @user, status 200
    end

    private

    def user_params
      params.require(:user).permit(:id, :username)
    end
end
