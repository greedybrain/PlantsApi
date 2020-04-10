class PlantsController < ApplicationController

     def index 
          plants = Plant.all 
          render json: plants
     end

     def show 
          plant = Plant.find(params[:id])
          render json: plant
     end

     def create 
          plant = Plant.create(name: Faker::Cannabis.brand, species: Faker::Cannabis.cannabinoid )
          render json: plant
     end

     def destroy 
          plant = Plant.find(params[:id])
          plant.destroy 
     end

end
