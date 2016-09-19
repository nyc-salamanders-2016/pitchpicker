class UsersController < ApplicationController

  def index
    if current_user.admin
      #render Admin view set up amount of pitches allowed
    else
      #render User view welcome, where to pitch
    end
  end

  def new
    @user = User.new
  end

   def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
    else
      flash[:alert] = "Invalid information!"
      render "new"
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :cohort, :admin)
  end

end
