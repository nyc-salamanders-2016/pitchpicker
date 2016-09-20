class ProjectsController < ApplicationController

  def index
    @projects = Project.all.to_json
    render json: @projects
  end

  def create

    @project = Project.new(title: params[:title], description: params[:description], user_id: current_user.id)
    @project.save
    render json: @project
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :user_id)
  end
end
