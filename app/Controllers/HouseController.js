import _houseService from "../Services/HouseService.js"
import _store from "../store.js"

function _draw() {
  let houses = _store.State.houses
  let housesElem = document.getElementById("houses")
  let template = ''

  houses.forEach(house => {
    template += house.Template
  })

  housesElem.innerHTML = template
}


export default class HouseController {

  constructor() { }

  addHouse(event) {

    event.preventDefault()
    let formData = event.target

    let newHouse = {
      name: formData.name.value,
      sqrft: formData.sqrft.value,
      year: formData.year.value,
      price: formData.price.value
    }
    console.log(newHouse)
    _houseService.addHouse(newHouse)
    formData.reset()

    // @ts-ignore
    $('#house-form').modal('toggle');
    _draw()
  }
}