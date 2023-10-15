class PagesController < ApplicationController
  before_action :authenticate_user!
  def home
    @containers = current_user.containers.includes(:tasks)
    @containers_list = current_user.containers
  end
end
