import Car from "../Models/Car.js";
import _store from "../store.js";

//Public
class CarService {
  addCar(newCar) {
    newCar = new Car(newCar)
    _store.State.cars.push(newCar)
  }
  constructor() { }
}

const CARSERVICE = new CarService();
export default CARSERVICE;
