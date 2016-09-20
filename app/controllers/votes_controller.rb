class VotesController < ApplicationController
  def index
    if current_user.admin
      #render Admin view: see results of first round
    else
      #render User view: where to vote
    end
  end

  def create

  end

  private
  def vote_params
    params.require(:votes).permit(:user_id, :project_id)
  end
end
