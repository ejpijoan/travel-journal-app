class Transportation {
    static allTransportations = []

    constructor(transportation) {
        this.start_location = transportation.start_location
        this.end_location = transportation.end_location
        this.mode = transportation.mode
        this.departure_date = transportation.departure_date
        this.arrival_date = transportation.arrival_date
        Transportation.allTransportations.push(this)
    }

    appendTransportation() {
        let transportDiv = document.querySelector('.transports')
        let transDiv = document.createElement('div')
        let places = document.createElement('p')
        let mode = document.createElement('p')
        let dates = document.createElement('p')
        places.innerText = `${this.start_location} - ${this.end_location}`
        places.className = "transPlaces"
        mode.innerText = this.mode
        mode.className = "mode"
        dates.innerText = `departing: ${this.departure_date} arriving: ${this.arrival_date}`
        dates.className = "dates"
        places.append(mode, dates)
        transDiv.append(places)
        transportDiv.append(transDiv)
    }
}