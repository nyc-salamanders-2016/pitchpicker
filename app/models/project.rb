class Project < ApplicationRecord
  belongs_to :user
  has_many :rankings
  has_many :votes
  has_many :team_members, through: :project_member, source: :user
end
