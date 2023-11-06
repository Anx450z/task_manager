class ContainersController < ApplicationController
  before_action :set_container, only: %i[show edit update destroy]

  def index
    @containers = current_user.containers.all
  end

  def show; end

  def new
    @container = current_user.containers.new
  end

  def edit; end

  def create
    @container = current_user.containers.new(container_params)

    respond_to do |format|
      if @container.save
        format.turbo_stream do
          render turbo_stream: turbo_stream.prepend("containers", partial: "containers/container", locals: { container: @container })
        end
        format.html { redirect_to container_url(@container), notice: 'Container was successfully created.' }
        format.json { render :show, status: :created, location: @container }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @container.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @container.update(container_params)
        format.turbo_stream do
          render turbo_stream: turbo_stream.prepend("containers", partial: "containers/container", locals: { container: @container })
        end
        format.html { redirect_to container_url(@container), notice: 'Container was successfully updated.' }
        format.json { render :show, status: :ok, location: @container }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @container.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @container.destroy

    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.remove(@container) }
      format.html { redirect_to containers_url, notice: 'Container was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_container
    @container = Container.find(params[:id])
  end

  def container_params
    params.require(:container).permit(:tag, :color)
  end
end
