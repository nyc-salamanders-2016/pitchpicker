class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  # has_secure_password
  has_many :projects
  has_many :votes
  has_many :rankings
  #belongs_to assigned_project

  validate :max_votes_error

  def admin?
    self.admin
  end

  def students
    students = User.all.map do  |student|
      if student.admin == false
         student
      end
    end
  end

  def max_pitches=(number)
    max_pitches = number
  end

  def max_pitches
    max_pitches
  end

  def max_votes
    (students.length / 2).floor
  end

  def max_votes_error
    if self.user.votes.length > max_votes
      errors.add(:vote_count, "can't have more than #{max_votes} votes")
    end
  end

end
