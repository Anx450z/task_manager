# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ActiveRecord::Base.transaction do
  # Create Users
  1.times do
    User.create!(
      email: 'anx450z@gmail.com',
      password: 'password'
    )
  end

  # Create Containers
  User.all.each do |user|
    6.times do
      Container.create!(
        tag: Faker::Lorem.word + rand(11..99).to_s,
        user_id: user.id,
        color: rand(0..8)
      )
    end
  end
  # Create Tasks
  Container.all.each do |container|
    10.times do
      Task.create!(
        title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraph,
        container_id: container.id,
        status: rand(0..3)
      )
    end
  end
end
