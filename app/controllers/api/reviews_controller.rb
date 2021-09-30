class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review && @review.destroy
            render :show
        else
            render json: ["Could not destroy review"], status: 422 
        end
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show 
        else
            render json: ['Cannot update review'], status: 422
        end

    end
    
    def index
        @reviews = Review.all
        render :index
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    private

    def review_params
        params.require(:review).permit(:title, :description, :rating, :user_id, :product_id)
    end



end
