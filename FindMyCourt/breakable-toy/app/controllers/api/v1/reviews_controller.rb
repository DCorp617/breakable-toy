require "devise"

class Api::V1::ReviewsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Review.where(params[:court_id])
  end

  def new
    @court = Court.find(params[:court_id])
    @review = Review.new
  end

  def create
    @court = Court.find(params[:court_id])
    @review = Review.new(review_params)
    @review.court = @court

    if @review.save
      flash[:notice] = "Review saved successfully."
      redirect_to court_path(@court)
    else
      flash[:alert] = "Failed to save review."
      render :new
    end

    review = JSON.parse(request.body.read)

    Review.create!(user: current_user, description: review["description"])

    render json: Court.find(courtId)
  end
end
