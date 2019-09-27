class CourtsController < ApplicationController

  def home
  end

  def index
    @courts = Court.all
    if params[:search]
      @courts = Court.search(params[:search]).order("created_at DESC")
    else
      @courts = Court.all.order("created_at DESC")
    end
  end

  def show
    @court = Court.find(params[:id])
  end

  def new
    @court = Court.new
  end

  def create
    @court = Court.new(court_params)

    if @court.save
      flash[:notice] = "Court added successfully!"
      redirect_to @court
    else
      flash.now[:notice] = "Failed to add a new court"
      render :new
    end
  end

  def edit
    @court = Court.find(params[:id])
  end

  def update
    @court = Court.find(params[:id])

    if @court.update(court_params)
      flash[:success] = "Basketball court updated"
      redirect_to court_path(@court)
    else
      flash.now[:error] = @court.error.full_messages.join("<br/>").html_safe
      render :edit
    end
  end

  def destroy
    @court = Court.find(params[:id])
    @court.destroy
    flash[:success] = "Basketball Court deleted successfully"
    redirect_to courts_path
  end

  def show
    @court = Court.find(params[:id])
  end

  private

  def court_params
    params.require(:court).permit(:name, :street, :city, :state, :country, :court_photo)
  end

  def authorize_user
    if !user_signed_in?
      flash[:notice] = "You do not have access to this feature."
      redirect_to root_path
    end
  end
end
