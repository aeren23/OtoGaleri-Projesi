function Storage(){
    Storage.prototype.addCarToStorage=function(newCar){
        let cars=this.getCarsFromStorage()
        cars.push(newCar)
        localStorage.setItem("cars",JSON.stringify(cars))
    }
}
Storage.prototype.getCarsFromStorage=function(){
    let cars
    if(localStorage.getItem("cars")==null){
        cars=[]
    }
    else{
        cars=JSON.parse(localStorage.getItem("cars"))
    }
    return cars
}
Storage.prototype.deleteCarFromStorage=function(carTitle){
    let cars=this.getCarsFromStorage()
    cars.forEach(function(car,index){
        cars.splice(index,1)
        localStorage.setItem("cars",JSON.stringify(cars))
       
    })
}
Storage.prototype.clearAllCarsFromStorage=function(){
    localStorage.removeItem("cars")
}
