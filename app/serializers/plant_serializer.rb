class PlantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :species
end
