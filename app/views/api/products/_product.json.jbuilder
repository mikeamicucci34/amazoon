
json.extract! product, :id, :title, :description, :price, :author, :pages
json.photoUrl url_for(product.photo)