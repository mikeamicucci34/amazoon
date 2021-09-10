class Review < ApplicationRecord

    has_many :helpful,
        foreign_key: :review_id,
        class_name: :Helpful

    belongs_to :reviewer,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product


end
