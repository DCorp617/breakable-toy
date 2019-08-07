require "devise"

class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!

  def new
  end

  def create
    @review = Review.new(review_params)
    @court = Court.find(params[:court_id])
    @review.court = @court
    if @review.save
      flash[:success] = "New review created."
      render json: { court: @court }
    else
      flash[:notice] = "Review could not be saved"
      render json: { court: @court }
    end
  end

  private

  def review_params
    params.require(:review).permit(:description)
  end
end
