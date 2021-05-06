class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: TripSerializer.new(trips)
    end
end
