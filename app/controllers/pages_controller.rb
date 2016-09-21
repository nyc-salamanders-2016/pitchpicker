class PagesController < ApplicationController

  def index
    @user = current_user.to_json
    # if current_user && current_user.admin
    #   #render Admin view set up amount of pitches allowed
    # end
  end

end
