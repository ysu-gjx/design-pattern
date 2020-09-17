// 车 父类
class Car {
  constructor(number, name) {
    this.number = number
    this.name = name
  }
}
// 快车
class KuaiChe extends Car {
  constructor(number, name, price) {
    super(number, name)
    this.price = price
  }
}
// 专车
class ZhuanChe extends Car {
  constructor(number, name, price) {
    super(number, name)
    this.price = price
  }
}
// 行程
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始，车牌号: ${this.car.number}, 车辆名称： ${this.car.name}`)
  }
  end() {
    console.log(`行程结束，价格为： ${this.car.price * 5}`)
  }
}

let car = new KuaiChe('京888888', 'BYD', 1)
let trip = new Trip(car)

trip.start()
trip.end()
