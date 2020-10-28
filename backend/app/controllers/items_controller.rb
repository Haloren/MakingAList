class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

    def show
        item = Item.find_by(id: params[:id])
        render json: item 
    end

    def create
        list = List.first
        #byebug
        item = list.items.new(item_params)
        if item.save
            render json: item
        else
            render json: {message: item.errors.full_messages.to_sentence}        
        end
    end

    def destroy
        item = Item.all.find_by(id: params[:id])
        item.destroy
        render json: item
    end

    private
    
    def item_params
        params.require(:item).permit(:content, :list_id)
    end

end
