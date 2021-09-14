class CartsController < ApplicationController

    def index
    end

    def create
        @cart_item = ShoppingCart.new(cart_params)

        if @cart_item.save
            render :show
        else
            render :json @cart_item.errors.full_messages
        end
        
    end

    def destroy
    end

    private

    def cart_params
        params.require(:cart).permit(:product_id, :user_id)
    
    end


end
