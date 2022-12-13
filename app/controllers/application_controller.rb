class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  before_action :authorize

  def authorize 
    @user = User.find(session[:user_id])
    render json: { error: 'Wrong credentials.' }, status: :unauthorized unless @user
  end


  private

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: 'Not found!' }, status: :not_found
  end


end
