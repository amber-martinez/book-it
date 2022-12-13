class Api::UsersController < ApplicationController
    skip_before_action :authorize, :create

    def show
        render json: @user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user
    end

    def destroy
        @user.destroy
        session.delete :user_id
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end

end
