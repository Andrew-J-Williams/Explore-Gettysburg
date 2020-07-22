class Api::V1::UserChoicesController < ApplicationController

    def index
        @user_choices = UserChoice.all

        render json: @user_choices, status: 200
    end

    def create
        @user_choice = UserChoice.new(user_choice_params)
        if @user_choice.save
            render json: @user_choice, status: 200
        end
    end

    private 

    def user_choice_params
        params.require(:user_choice).permit(:id, :user_id, :event_id, :scenario_id, :user_input)
    end

end
