class CatsController < ApplicationController
    def index
        cats = Cat.all.to_json(:include => {
            :hobbies => {
                :only => [:name, :id]
            }
        })
        render json: cats 
    end

    def create
        cat = Cat.create(cat_params)
        render json: cat.to_json(:include => {
            :hobbies => {
                :only => [:name, :id]
            }
        })
    end
    
    private
    def cat_params
        params.require(:cat).permit(:name, :breed, :image, :fluffiness, :hobbies)
    end

end
