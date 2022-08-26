function makeCar(model,color,description,img,availability){
  return{
   model:model,
   color:color,
   description:description,
   img:img,
   availability:availability,
  }


}


 var img=function(array){
  var arr=[]
  each(array,function(e,i){
    arr.push(e.img)

  })
   return arr
 }





var makeCars=[]
makeCars.push(makeCar("kia picanto","red","The name Picanto relates to the Spanish and Italian words picante piccante meaning  spicy. The Korean's version name Morning may trace its origin from the Morning Calm, as a reference to South Koreas tradition.","https://upload.wikimedia.org/wikipedia/commons/4/43/2018_Kia_Picanto_1_1.0.jpg",true))
makeCars.push(makeCar("kia sportage","blue","The Kia Sportage stands out with its comfortable ride quality, spacious seating and massive rear cargo area.","https://www.automobile-magazine.fr/asset/cms/840x394/183442/config/131970/nouveau-kia-sportage-de-cinquieme-generation.jpg?webp=1",true))
makeCars.push(makeCar("renault","blue","Renault is a French automobile manufacturer. It has been linked to the Japanese manufacturers Nissan since 1999 and Mitsubishi since 2017, through the Renault-Nissan-Mitsubishi alliance which is, in the first half of 2017, the world's leading car manufacturer.","https://media.istockphoto.com/photos/new-renault-clio-front-picture-id458228891?k=20&m=458228891&s=612x612&w=0&h=WSiYK2X4rmEfVUu_n28KI5Ku-AQjHdgNIMZDBV7rZ1w=",false))
makeCars.push(makeCar("sport car ","red","A sports car is a small, fast, quick turning automobile. Most of them only have two seats or very small seats in the back","https://wallpaperaccess.com/full/11205.jpg",false))
makeCars.push(makeCar("Opel Corsa  ","blue","electric Corsa   the future ready german city car with an impressive range, fast charging and minimum sound at maximum power.","https://www.challenges.fr/assets/img/2020/08/12/images_list-r4x3w1000-5f33fbf5474a8-2917325-feqkhg4vpb-resultat-jpg.jpg",false))






var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
} 



 function displayElement (array){
    each(array, function(e,i){
        var div=$(`<div class='grid-item'><img id = "car${i}" class="gridImg" src="${e.img}"></div>`)
        
          div.appendTo($('.grid-container') )
          })
 }

displayElement(makeCars)




$("#car0").click(function(){
    $("#des").html(`<p id ="description1">The name Picanto relates to the Spanish and Italian words picante piccante meaning  spicy. The Korean's version name Morning may trace its origin from the Morning Calm, as a reference to South Koreas tradition.</p>`)
})

$("#car1").click(function(){
    $("#des").html(`<p id ="description2">The Kia Sportage stands out with its comfortable ride quality, spacious seating and massive rear cargo area.</p>`)
})
$("#car2").click(function(){
    $("#des").html(`<p id ="description3">Renault is a French automobile manufacturer. It has been linked to the Japanese manufacturers Nissan since 1999 and Mitsubishi since 2017, through the Renault-Nissan-Mitsubishi alliance which is, in the first half of 2017, the world's leading car manufacturer.</p>`)
})
$("#car3").click(function(){
    $("#des").html(`<p id ="description4">A sports car is a small, fast, quick turning automobile. Most of them only have two seats or very small seats in the back.</p>`)
})
$("#car4").click(function(){
    $("#des").html(`<p id ="description5">electric Corsa   the future ready german city car with an impressive range, fast charging and minimum sound at maximum power.</p>`)
})
$("#kiapicanto").click(function(){
    $(".grid-item").eq(0).css("background-color","black")
    
}) 
$("#kiasportage").click(function(){
    $(".grid-item").eq(1).css("background-color","black")
    
}) 

$("#renault").click(function(){
    $(".grid-item").eq(2).css("background-color","black")
    
}) 

$("#sportcar").click(function(){
    $(".grid-item").eq(3).css("background-color","black")
    
})

$("#OpelCorsa").click(function(){
    $(".grid-item").eq(3).css("background-color","black")
    
})

























    