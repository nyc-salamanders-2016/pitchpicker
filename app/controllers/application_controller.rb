class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def require_user
    not_found unless logged_in?
  end

  def require_matching_user(object)
    not_found unless logged_in? && object.user_id == current_user.id
  end

end
