class MessagesController < ApplicationController

  before_action :set_group

  def index

  end

  def create
    @message = Message.new(message_params)
    if @message.create
    else
    end
  end

  private
  def message_params
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
