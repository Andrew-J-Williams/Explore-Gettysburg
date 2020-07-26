# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "Testing stuff")

Event.create(name: "1. Battle of Little Roundtop", description: "This is a test to see if the data can be fetched. No need to worry.", date: "July 2nd, 1863", union_leader: "Joshua Lawrence Chamberlain", confederate_leader: "Some Dude", union_army: 550, confederate_army: 800)