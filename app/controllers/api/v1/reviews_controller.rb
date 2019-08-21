require "devise"

class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!

  def index
    Review.all
  end

  def new
  end

  def create
    court = Court.find(params[:court_id])
    review = Review.new(review_params)
    review.court = court
    review.user = current_user
    if review.save
      flash[:success] = "New review created."
      render json: review
    else
      flash[:notice] = "Review could not be saved"
      render json: review
    end
  end

  private

  def review_params
    params.require(:review).permit(:description)
  end
end
