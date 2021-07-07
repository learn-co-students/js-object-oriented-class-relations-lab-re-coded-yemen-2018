let driverid=0;
let store = {drivers: [], passengers: [], trips: []};
class Driver{
  
  constructor(name){
    this.id =++driverid;
    this.name = name;
    
    store.drivers.push(this)

  }
  trips(){
    return store.trips.filter(trips => {
      return trips.driverId === this.id;
    });
  }
  passengers(){
    return this.trips().map(pass => {
      return pass.passenger();
    });
    
  }
}

let passengerId = 0;
class Passenger {
  constructor(name){
    this.id =++passengerId;
    this.name = name;
    
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trips => {
      return trips.passengerId === this.id;
    });
  }
  drivers(){
    return this.trips().map(pass => {
      return pass.driver();
    });
  }
  
}

let tripsId = 0;
class Trip {
  constructor(driver, passenger){
    this.id =++tripsId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this)
  }
  passenger(){
    return store.passengers.find(pass => {
      return pass.id === this.passengerId;
    }) ;
    
  }
  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    }) ;
    
  }
  
  
}