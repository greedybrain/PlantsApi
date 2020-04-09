class PlantsController < ApplicationController

     def index 
          plants = Plant.all 
          render json: PlantSerializer.new(plants)
     end

     def show 
          plant = Plant.find(params[:id])
          render json: PlantSerializer.new(plant)
     end

end
