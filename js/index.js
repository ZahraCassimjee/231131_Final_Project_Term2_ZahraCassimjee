let allVehicle = [];

addVehicle = () => {
    let vtype = document.getElementById("vtype").value
    let make = document.getElementById("make").value
    let model = document.getElementById("model").value
    let reg = document.getElementById("reg").value
    let condition = document.getElementById("condition").value

   


alert("Your " + condition + " " + vtype + " " + make + " " + model +" Registration Number: "+ reg +", has been added ");

allVehicle.push({
    type: vtype,
    make: make,
    model: model,
    registration: reg,
    conditionofV: condition
})


console.log(allVehicle)

document.getElementById("VehicleForm").reset();
}

checkOut = () => {


    window.location.href = "checkout.html";
    
    }