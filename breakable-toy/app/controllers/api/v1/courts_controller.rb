class Api::V1::CourtsController < ApplicationController

  def index
    render json: Court.all
  end

  def show
    court = Court.find(params[:id])
    reviews = court.reviews
    render json: { court: court, reviews: reviews }
  end

  def new

  end

  def create
    court = Court.new(name: params[:court])
      if court.save
      render json: court
    else
      render json: { error: fortune.error.full_message }, status: :unprocessable_entity
    end
  end
end
