class PagesController < ApplicationController
  before_action :authenticate_user!
  def home
    @containers = current_user.containers.includes(:tasks)
  end
end
