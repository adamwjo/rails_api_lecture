class CatHobbiesController < ApplicationController
    def new
        cat_hobby = CatHobby.create(cat_hobby_params)
        render json: cat_hobby
    end
    private
    # Using a private method to encapsulate the permissible parameters
    # is just a good pattern since you'll be able to reuse the same
    # permit list between create and update. Also, you can specialize
    # this method with per-user checking of permissible attributes.
    def cat_hobby_params
      params.require(:cat_hobby).permit(:cat_id, :hobby_id)
    end
end
