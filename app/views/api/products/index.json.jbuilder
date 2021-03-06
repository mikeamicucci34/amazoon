json.array! @products do |product|
    json.extract! product, :id, :title, :description, :price, :category, :author
    json.photoUrl url_for(product.photo)
end
