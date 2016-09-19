class ProjectMembersController < ApplicationController
  def index
    if current_user.admin
      #render Admin view: to assign teams based on last round of voting
    else
      #render User view: to see final projects and group assignments
  end

  def create

  end
end
