class Api::ProductsController < ApplicationController

    def show
        @product = Product.find(params[:id])
        render :show
    end

    def index
        @products = Product.all
        render :index
    end

    def product_params 
        params.require(:product).permit(:title, :description, :price)
    end

end
