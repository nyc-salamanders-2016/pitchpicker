class UsersController < ApplicationController

  def index
    # if current_user
    # user = current_user.to_json
    # render json: user
    # end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
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
