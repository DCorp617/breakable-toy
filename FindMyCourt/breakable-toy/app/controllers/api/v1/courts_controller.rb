class Api::V1::CourtsController < ApplicationController

  def index
    render json: Court.all
  end

  def show
    render json: Court.find(params[:id])
  end

  def new

  end

  def create
    court = Court.new(name: params[:court])
    if court.save
      render json: { court: court }
    else
      render json: { error: fortune.error.full_message }, status: :unprocessable_entity
    end
  end
end
