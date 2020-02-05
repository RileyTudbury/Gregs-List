export default class House {

  constructor(data) {

    this.name = data.name
    this.sqrft = data.sqrft
    this.year = data.year
    this.price = data.price
  }

  get Template() {
    return `
  <div class="col-3">
    <h1>${this.name}</h1>
    <h3>${this.sqrft}</h3>
    <p>${this.year}</p>
    <p>${this.price}</p>
  </div>
 `
  }

}