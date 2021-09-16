class ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = current_user.reviews.new(review_params)

        if @reviews.save
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def destroy
    end
    

    def index
        @reviews = Review.all
        render :index
    end

    def show
        
    end

    private

    def review_params
        params.require(:review).permit(:title, :description, :rating, :user_id, :product_id)
    end



end
