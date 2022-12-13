class Api::SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        
        if user&.authenticate(password: params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: { errors: ['Wrong credentials.'] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end