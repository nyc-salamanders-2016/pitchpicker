class User < ApplicationRecord
  has_secure_password
  has_many :projects
  has_many :votes
  has_many :rankings
  #belongs_to assigned_project
end
