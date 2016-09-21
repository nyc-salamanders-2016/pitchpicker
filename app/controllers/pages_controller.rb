class PagesController < ApplicationController

  def index
    @user = current_user.to_json(include: :votes)
    @max_pitches = current_user.max_pitches.to_json
    @max_votes = current_user.max_votes.to_json
    # if current_user && current_user.admin
    #   #render Admin view set up amount of pitches allowed
    # end
  end

end
