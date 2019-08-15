class ReviewsController < ApplicationController
  def index
    @review = Review.all
  end

  def new
    @court = Court.find(params[:court_id])
    @review = @court
  end
end
