class RanksController < ApplicationController
  def index
    if current_user.admin
      #render admin view: pick the top n of pitches to be ranked
    else
      #render user view: ranking to pick projects to be made
    end
  end

  def create
  end


end
