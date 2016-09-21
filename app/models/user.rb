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

  validate :max_votes_error, :max_pitches_error

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


  def max_pitches
    (students.length / 2.5).floor
  end

  def max_pitches_error
    if self.projects.length > max_pitches
      errors.add(:pitches_count, "can't have more than #{max_pitches} pitches")
    end

  end

  def max_votes
    (students.length).floor
  end

  def max_votes_error
    if self.votes.length > max_votes
      errors.add(:vote_count, "can't have more than #{max_votes} votes")
    end
  end

end
