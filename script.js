




if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position.coords.latitude)
      var lat=position.coords.latitude
      var longitude=position.coords.longitude
      fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat} &lon=${longitude}&key=17270180ead94b27a3e874f0cdd513ec`)
      .then(res=>res.json())
      .then(res=>{
        document.getElementById("location").innerHTML+=res.data[0].city_name
        document.getElementById("temp").innerHTML=`${res.data[0].temp}`
        document.getElementById("clouds").innerHTML+=res.data[0].clouds
        console.log(res)
        document.getElementById("image").src=`https://www.weatherbit.io/static/img/icons/${res.data[0].weather.icon}.png`
      }) 
    })
}





document.getElementById("temps").addEventListener("click",function(){
  /* console.log("AIR") */
  if(document.getElementById("Temp_var").innerText=="C"){
    console.log(parseInt(document.getElementById("temp").innerText))
    document.getElementById("temp").innerText=parseInt(document.getElementById("temp").innerText)*9/5+32
    document.getElementById("Temp_var").innerText="F"
  }
  else if(document.getElementById("Temp_var").innerText=="F"){
    console.log(parseInt(document.getElementById("temp").innerText))
    document.getElementById("temp").innerText=parseInt((document.getElementById("temp").innerText)-32)*5/9
    document.getElementById("Temp_var").innerText="C"
  }
})

function Cel_Fah(number){
  return (number*9/5)+32
}

function Fah_Cel(number){
  return number-32*5/9
}

