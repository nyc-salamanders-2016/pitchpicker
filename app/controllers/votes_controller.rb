class VotesController < ApplicationController
  def index

  end

  def create
    @vote = Vote.create(user_id: current_user.id, project_id: params[:selected_project][:id])
    render json: @vote
  end

  private
  def vote_params
    params.require(:votes).permit(:user_id, :project_id)
  end
end
