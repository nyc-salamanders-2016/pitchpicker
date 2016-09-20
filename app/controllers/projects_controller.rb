class ProjectsController < ApplicationController

  def create

    @project = Project.new(title: params[:title], description: params[:description], user_id: current_user.id)
    @project.save
    projects = Project.all

    projects.to_json
    render json: projects
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :user_id)
  end
end
