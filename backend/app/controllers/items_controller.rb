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
        list = List.first #list = List.find_by(list_id: params[:list_id])
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

        if item #.valid?
            # DELETE SUCCESSFUL
            item.destroy
            render json: {success: true}
        else
            # DELETE NOT SUCCESSFUL
            render json: {success: false}
        end
    end

    private
    
    def item_params
        params.require(:item).permit(:content, :list_id)
    end

end
