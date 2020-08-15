class Api::V1::RepliesController < ApplicationController

    def index
        @replies = Reply.all

        render json: @replies 
    end

    def show
        @reply = Reply.find(params[:id])

        render json: @reply
    end

    def create
        @reply = Reply.create(reply_params)

        render json: @reply
    end

    def update
        @reply = Reply.find(params[:id])
        @reply.update(reply_params)

        render json: @reply
    end

    def destroy
        reply = Reply.find_by(id: params[:id])
        reply.destroy

        render json: reply
    end

    private

    def reply_params
        params.require(:reply).permit(:id, :title, :content, :comment_name, :user_id, :event_id, :comment_id)
    end

end