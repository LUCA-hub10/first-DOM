// html elements with this id 
//innerhtml=value 
//var salutation=document.getElementById("hello")
//salutation.innerHTML="BMM GROUP-USA"


//var btn=document.querySelector("button")
//btn.innerHTML="delete"

//btn.setAttribute("id","btn")
//console.log(btn)

//btn.style.fontSize="20px"
//btn.style.backgroundColor="red"

//change value element 

//var table=document.getElementById("list")


//table.lastElementChild.innerHTML="black"

 // adding element 
//var li=document.createElement('li')
//li.innerHTML="white"
//table.appendChild(li)


 //write directly in html 
//document.write("<button style='color:blue'>next</button><p>ala</p>")


//btn.addEventListener('mouseover', function(){
//salutation.remove()
//})


//var button=document.querySelectorAll("button")
//button[1].addEventListener("click", function(){
//button[1].nextElementSibling.innerHTML="oumayma"
//})


var minus=document.getElementById("minus")
var plus=document.getElementById("plus")

minus.addEventListener('click', function(){
minus.nextElementSibling.innerHTML--
})
plus.addEventListener('click', function () {
plus.previousElementSibling.innerHTML++
})
