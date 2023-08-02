function UI(){

}
UI.prototype.addCarToUI =function(newCar){

    const carList=document.getElementById("cars")
    carList.innerHTML+=`
     <tr>
    <td><img src="${newCar.Url}" class="img-fluid img-thumbnail"></td>
    <td>${newCar.Title}</td>
    <td>${newCar.Price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr>
    `
}
UI.prototype.clearInputs=function(element1,element2,element3){
    element1.value=""
    element2.value=""
    element3.value=""
}
UI.prototype.displayMessages=function(message,type){
    const cardBody=document.querySelector(".card-body")
    //Aler Divi Oluşturma
    const div=document.createElement("div")
    div.className=`alert alert-${type}`
    div.textContent=message
    cardBody.appendChild(div)

    setTimeout(function(){
        div.remove()
    },3000)
}
UI.prototype.loadAllCars=function(cars){
    const carList=document.getElementById("cars")
    cars.forEach(function(car){
        carList.innerHTML +=`
        <tr>
       <td><img src="${car.Url}" class="img-fluid img-thumbnail"></td>
       <td>${car.Title}</td>
       <td>${car.Price}</td>
       <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
     </tr>
       `
    })
}
UI.prototype.deleteCarFromUI=function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllCarsFromUI=function(){
    const carList=document.getElementById("cars")
    while(carList.firstElementChild!==null){
        carList.firstElementChild.remove();
    }
}