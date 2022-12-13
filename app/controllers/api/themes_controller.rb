class Api::ThemesController < ApplicationController

    def show
        theme = Theme.find(params[:id])
        render json: theme
    end

    def create
        theme = Theme.create!(theme_params)
        render json: theme, status: :created
    end

    def updated
        theme = Theme.find(params[:id])
        theme.update!(theme_params)
        render json: theme
    end

    def destroy
        theme = Theme.find(params[:id])
        theme.destroy
        head :no_content
    end


    private

    def theme_params
        params.permit(:prim_color, :sec_color, :bullet_icon)
    end

end
