class ProjectsController < ApplicationController

  def create
    #set limitation for projects
    @project = Project.new(title: params[:title], description: params[:description])
    if @project.save
    else
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :user_id)
  end
end
