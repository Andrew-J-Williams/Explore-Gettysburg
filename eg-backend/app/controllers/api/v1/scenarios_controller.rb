class Api::V1::ScenariosController < ApplicationController
    
    def index
        @scenarios = Scenario.all

        render json: @scenarios, status: 200
    end

    def show
        @scenario = Scenario.find(params[:id])

        render json: @scenario, status: 200
    end

end
