# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create!([
  {username: "Mighty Mo", email: "moin@email.com", password: "password", cohort: "Salamanders", admin: false},
  {username: "Brawny Shawn", email: "shawn@email.com", password: "password", cohort: "Salamanders", admin: false},
  {username: "Magnficent Matt", email: "matt@email.com", password: "password", cohort: "Salamanders", admin: false},
  {username: "Admin Iuliia", email: "iuliia@email.com", password: "password", cohort: "Salamanders", admin: true}
])

projects = Project.create!([
  {title: "Talent Overflow", description: "Flexitarian food truck slow-carb, bespoke green juice put a bird on it raw denim 3 wolf moon pabst gentrify yr kinfolk. Seitan echo park hammock yr pug ugh. Tousled venmo gochujang, ramps chillwave celiac pork belly cronut blue bottle hashtag. Migas food truck la croix hoodie thundercats man bun cronut chillwave knausgaard post-ironic hella.", user_id: 1},
  {title: "Salamander News", description: "Ennui 3 wolf moon paleo, vape kickstarter blue bottle bicycle rights. Kale chips you probably haven't heard of them PBR&B godard, fam ramps lo-fi.", user_id: 2},
  {title: "MySpace", description: "Kale chips you probably haven't heard of them PBR&B godard, fam ramps lo-fi. 8-bit la croix fingerstache beard. Migas food truck la croix hoodie thundercats man bun cronut chillwave knausgaard post-ironic hella.", user_id: 1}
])

votes = Vote.create!([
  {user_id: 1, project_id: 2 },
  {user_id: 2, project_id: 2 },
  {user_id: 3, project_id: 2 },
  {user_id: 1, project_id: 1 },
  {user_id: 2, project_id: 3 },
  {user_id: 3, project_id: 1 }
])
