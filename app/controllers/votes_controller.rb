class VotesController < ApplicationController
  def index
    if current_user.admin
      #render Admin view: see results of first round
    else
      #render User view: where to vote
    end
  end

  def create
    if current_user.votes.size < contraint
    @vote = Vote.new(vote_params)
    if @vote.save

    else

    end
      else

    end

  private
  def vote_params
    params.require(:votes).permit(:user_id, :project_id)
  end
end
