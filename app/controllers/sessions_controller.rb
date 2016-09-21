class SessionsController < ApplicationController

  def new

  end

  # def create
  #   @user = User.find_by(username: params[:user][:username])
  #   if @user && @user.authenticate(params[:user][:password])
  #     session[:user_id] = @user.id
  #     redirect_to votes_path
  #   else
  #     @errors = ['Invalid username/password']
  #     redirect_to new_user_session_path
  #   end
  # end

  def destroy
    session.clear
    redirect_to new_user_session_path
  end

end
