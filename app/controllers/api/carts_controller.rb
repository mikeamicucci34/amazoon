class Api::CartsController < ApplicationController

    def index
        @cart_items = current_user.shopping_carts
        render :index
    end

    def create
       @cart_item = ShoppingCart.new(cart_params)
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages
        end
        
    end

    def show
        @cart_item = ShoppingCart.find(params[:id])
        render :show   
    end


    def destroy
        @cart_item = ShoppingCart.find(params[:id])
        @cart_item.destroy
        render :show
    end

    private

    def cart_params
        params.require(:item).permit(:product_id, :user_id, :quantity)
    end


end
