@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :quantity, :product_id, :id, :user_id
        json.extract! cart_item.product, 
            :title,
            :price
        json.photoUrl url_for(cart_item.product.photo)
    end
end
