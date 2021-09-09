class Product < ApplicationRecord

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

    has_many :reviews,
        foreign_key: :review_id,
        class_name: :Review

    belongs_to :shopping_cart,
        foreign_key: :product_id

    
end
