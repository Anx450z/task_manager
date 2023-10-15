# lib/tasks/seed_data.rake

require 'faker'

namespace :db do
  desc 'Seed the database with relevant data'
  task seed_data: :environment do
    # Create Users
    10.times do
      User.create!(
        email: Faker::Internet.email,
        password: 'test123'
      )
    end

    # Create Containers
    User.all.each do |user|
      10.times do
        Container.create!(
          tag: Faker::Lorem.word,
          user_id: user.id
        )
      end
    end

    # Create Tasks
    Container.all.each do |container|
      5.times do
        Task.create!(
          title: Faker::Lorem.sentence,
          description: Faker::Lorem.paragraph,
          container_id: container.id,
          status: rand(0..3)
        )
      end
    end
  end
end
