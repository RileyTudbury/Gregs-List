import _carService from "../Services/CarService.js";
import _store from "../store.js"


function _draw() {
  let cars = _store.State.cars
  let carsElem = document.getElementById("cars")
  let template = ''

  cars.forEach(car => {
    template += car.Template
  })

  carsElem.innerHTML = template
}




//Public
export default class CarController {
  constructor() { }

  addCar(event) {
    event.preventDefault()

    let formData = event.target

    let newCar = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }
    console.log(newCar)
    _carService.addCar(newCar)
    formData.reset()
    // @ts-ignore
    $('#car-form').modal('toggle');
    _draw()
  }

}
