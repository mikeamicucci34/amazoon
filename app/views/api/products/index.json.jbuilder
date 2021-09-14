json.array! @products do |product|
    json.extract! product, :title, :description, :price
    json.photoUrl url_for(product.photo)
end
