# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

List.delete_all
List.create(name: "Grocery List")

Item.delete_all
items = [ 'Kale', 'Sprouts', 'Monster', 'Life Elixer']
items.each do |item|
    Item.create(content: item, list_id: List.first.id)
end