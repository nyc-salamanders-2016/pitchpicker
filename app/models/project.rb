class Project < ApplicationRecord
  belongs_to :user
  has_many :rankings
  has_many :votes
  has_many :team_members, through: :project_member, source: :user

  validates :title, presence: true,
  validates :description, presence: true


  def total_votes
    this.votes.sum.length
  end


end
