class Api::V1::UserChoicesController < ApplicationController

    def index
        @user_choices = UserChoice.all

        render json: @user_choices, status: 200
    end

    def create
        @user_choice = UserChoice.create(user_choice_params)
        render json: @user_choice
    end

    private 

    def user_choice_params
        params.require(:user_choice).permit(:id, :user_input, :user_id, :event_id, :scenario_id,)
    end

end
