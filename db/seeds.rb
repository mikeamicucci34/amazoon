# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require '../../keys.rb'
# require 'rest-client'


Category.delete_all
Helpful.delete_all
Product.delete_all
ShoppingCart.delete_all
User.delete_all


demo_user = User.new(
    username: "demo_user",
    email: "demouser@gmail.com",
    password: "demouser"
)
    
demo_user.save!


#

# rm = RestClient.get "https://amazon-products1.p.rapidapi.com/search?country=US&query=Macbook%2BPro&page=1&rapidapi-key=#{$api_key}"
# rm_array = JSON.parse(rm)["results"]
# User.destroy_all
# Product.destroy_all

# rm_array.each do |product| 
#   Product.create!(
#     title: product["title"],
#     description: "this works",
#     price: product["prices"]["current_price"],
#   )
# end


product1 = Product.create!({
    title: "Think on These Things",
    description: "‘The material contained in this volume was originally presented in the form of talks to students, teachers and parents in India, but its keen penetration and lucid simplicity will be deeply meaningful to thoughtful people everywhere, of all ages, and in every walk of life. Krishnamurti examines with characteristic objectivity and insight the expressions of what we are pleased to call our culture, our education, religion, politics and tradition; and he throws much light on such basic emotions as ambition, greed and envy, the desire for security and the lust for power – all of which he shows to be deteriorating factors in human society.’From the Editor’s Note‘Krishnamurti’s observations and explorations of modern man’s estate are penetrating and profound, yet given with a disarming simplicity and directness. To listen to him or to read his thoughts is to face oneself and the world with an astonishing morning freshness.’Anne Marrow Lindbergh",
    author: "J. Krishnamurti",
    category_id: 1,
    price: 12.99,
})

product1.photo.attach(io: File.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Think_on_these_things.jpeg"), filename: "think_on_these_things.jpeg")

# product2 = Product.create!({
#     title: "Sapiens: A Brief History of Humankind",
#     description: "Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.",
#     author: "Yuval Noah Harari",
#     price: 14.99,
# })

# product3 = Product.create!({
#     title: "Awareness: Conversations with the Masters",
#     description: "",
#     author: "Anthony de Mello, SJ",
#     price: 12.99,
# })

# product4 = Product.create!({
#     title: "",
#     description: "",
#     author: "",
#     price: ,
# })