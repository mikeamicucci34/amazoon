@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :title, :description, :rating, :user_id, :product_id
    end
end
