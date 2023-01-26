# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


names = []

16.times do |n|
  names[n] = Faker::Name.name
  name = names[n]

  email = "email#{n+1}@test.org"
  password = "Pas$w0rd"
  User.create!(name: name,
               email: email,
               password:
                 password,
               password_confirmation: password,
               confirmed_at: Time.zone.now)
end
#Добавление микросообщений в тестовые данные
users = User.order(:created_at).take(6)
n=0
14.times do
  n=n+1
  time = ( Time.zone.now - 140.minutes + (n*10).minutes )
  content = Faker::Lorem.sentence(word_count: 5)
  users.each { |user| user.posted_message.create!(content: content, created_at: time) }
end
PostedMessage.create( [{user_id: "15",
                        created_at: Time.zone.now,
                        content: "Today I saw something strange 🤨. But when I come a near that place was nothing - this was an illusion 🤷"},
                       {user_id: "16",
                        created_at: Time.zone.now,
                        content: "Today I saw something strange 🤨. But when I come a near that place I saw @#{names[14]} 🤣"}])


  User.create!(name: "Steve Jobs",
               email: "Steve_Jobs@apple.com",
               password: "Pas$w0rd",
               password_confirmation: "Pas$w0rd",
               confirmed_at: Time.zone.now)

PostedMessage.create( [{user_id: "17",
                        created_at: Time.zone.now,
                        content: "«The only way to do great work is to love what you do. If you have not found it yet, keep looking. Do not settle»"}])