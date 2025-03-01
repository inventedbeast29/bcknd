
const right=document.getElementsByClassName("right")[0]
const cursor=document.querySelector(".cursor");
const aboutcontent=document.querySelector(".aboutcontent");
const myname=document.querySelector("#name");
const upper=document.querySelector(".upper");
const lower=document.querySelector(".lower")
const upper2=document.querySelector(".upper2")
const icon=document.querySelector("#icon");
const projects=document.querySelector(".projects")
//Register Motion Path


window.addEventListener("mousemove",function(event){
   // console.log(event.pageX,event.pageY);
    gsap.to(cursor,{
      x:event.pageX,
      y:event.pageY,
      ease:"sine.out",
      duration:0.1
    })
})




var tl=gsap.timeline();

tl.from(".projects",{
    y:-1000,
    duration:1,
    
  })
  tl.from(".skills",{
    y:-1000,
    duration:1,
    
  })
  
  tl.from(".about",{
    y:-1000,
    duration:1,
  })

  tl.from(".img img",{
    y:-1000,
    duration:1,
    
  })


var splittedname=myname.textContent.split("");
console.log(splittedname);
  var eachname=""
splittedname.forEach(function(a){
   eachname+=`<span>${a}</span>`;
    console.log(eachname)
    
})

myname.innerHTML=eachname;
tl.from("#name span",{          //we need to make #name span display inline block to make it work
  y:100,
  opacity:0,
  stagger:0.3,
  duration:1,
  delay:0.5,
})
  

  
  aboutcontent.addEventListener("mouseenter",function(){
gsap.from("#abtleftcont",{
  x:-80,
  opacity:0,
  duration:4,
})})


aboutcontent.addEventListener("mouseenter",function(){
  gsap.from("#abtrightcont",{
    y:-50,
    opacity:0,
    duration:4,
  })
  })
  


 gsap.from(upper,{
  x:1500,
  duration:3,
  ease:"none",
  scrollTrigger:{
    trigger:upper,
    //markers:true,
    start:"top 85%",
    end:"top 30%",
    scrub:5,
    
  
  }
 })

 gsap.from(lower,{
 x:1500,
  duration:3,
 ease:"none",
  scrollTrigger:{
    trigger:upper,
    start:"top 85%",
    end:"top 30%",
    scrub:5,
   
  }
 })

 gsap.from(upper2,{
 x:1500,
  duration:3,
  ease:"none",
  scrollTrigger:{
    trigger:upper,    
    start:"top 85%",
    end:"top 30%",
    scrub:5,
    
  }
 })


 gsap.to(icon,{
  rotate:360,
  repeat:-1,
  duration:4,
  ease: "none",
 })
 

upper.addEventListener("click",function(){
  upper.classList.add("adjustupper")
 upper.innerHTML=`  <h2>📌 2015 - 2016 <span class="close">❌</span></h2>
                    <h5>Higher Secondary Education</h5>
                    CARMEL CONVENT SENIOR SECONDARY SCHOOL
                    `
           const upperclose=upper.querySelector(".close");
          upperclose.style.fontSize="15px";
          upperclose.style.position="absolute";
          upperclose.style.right="10px"

          upperclose.addEventListener("click",function(event){    
              event.stopPropagation()
            upper.classList.remove("adjustupper")    
            upper.innerHTML=`<h5>2015-2016</h5>
                        Click to open    `
          })

})




lower.addEventListener("click",function(){
  lower.classList.add("adjustlower")
  lower.innerHTML=`
  <h2>📌2017 - 2018 <span class="close">❌</span></h2>
 <h5>Higher Secondary Education</h5>
 <h5>O.P. Jindal School </h5>
 Stream: Science (PCM - Physics, Chemistry, Mathematics)`

 const lowerclose=lower.querySelector(".close");
  lowerclose.style.fontSize="15px";
         lowerclose.style.position="absolute";
          lowerclose.style.right="10px"


          lowerclose.addEventListener("click",function(event){
            event.stopPropagation()
            lower.classList.remove("adjustlower")
            lower.innerHTML=` <h5>2017-2018</h5>
                       Click to open`
          })
})

upper2.addEventListener("click",function(){
upper2.classList.add("adjustupper2")
upper2.innerHTML=`
<h2>📌2019 - 2023 <span class="close">❌</span></h2>
<h5>Bachelor of Technology</h5>
 Galgotias College of engineering and technology<br>
 <h5> 👨‍💻Information Technology</h5>
`
const upper2close=upper2.querySelector(".close")
upper2close.style.fontSize="15px";
upper2close.style.position="absolute";
upper2close.style.right="10px"


upper2close.addEventListener("click",function(event){
  event.stopPropagation()
  upper2.classList.remove("adjustupper2")
  upper2.innerHTML=` <h5>2019-2023</h5>
                        Click to open`
})

})

 gsap.to("#skill2content img",{
  rotate:-360,
  duration:1.5,
  repeat:-1,
  ease:"none",
 })



gsap.from(".skillimg div img",{
  y:100,
  opacity:0,
  duration:1.8,
  stagger:0.3,
  scrollTrigger:{
    trigger:".skillimg div img",
    start:"top 80%",
    end:"top 20%",
    scrub:5
  }
})


document.addEventListener("DOMContentLoaded", function () {
gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);
 gsap.to("#plane",{
  duration:2,
  ease: "power1.out",
  motionPath:{
    path:"#path",
    align:"#path",
    autoRotate:true,
    alignOrigin:[0.5,0.5]
  },

  scrollTrigger:{
    scroller:"body",
    trigger:".mnmera",
    start:"top 60%",
    end:"bottom 20%",
    scrub:5,
   
 }})})

 gsap.from("#card",{
  x:1000,
  duration:5,
  opacity:0,
  rotate:"360",
  boxShadow:"0px 0px 0px",
  scrollTrigger:{
    trigger:"#card",
    start:"top 50%",
  }
 })
var formcontrol=document.querySelectorAll(".form-control")
formcontrol.forEach((i)=>{
  i.addEventListener("mouseenter",()=>{
    gsap.from(i,{
      y:-100,
      ease:"ease-in"
    })
  })
  i.addEventListener("mouseleave",()=>{
    gsap.to(i,{
      y:0,
      ease:"none"
    })
  })
})



var carouselprevicon=document.querySelector(".carousel-control-prev-icon");
var carouselnexticon=document.querySelector(".carousel-control-next-icon");

gsap.to(carouselprevicon,{
  x:-20,
  duration:0.8,
  ease:"none",
  yoyo:true,
  repeat:-1
})

gsap.to(carouselnexticon,{
  x:20,
  duration:.8,
  ease:"none",
  yoyo:true,
  repeat:-1
})



projects.addEventListener("click",()=>{
document.querySelector(".projectcards").scrollIntoView({behavior:"smooth"})
})

gsap.registerPlugin(Draggable);
 
Draggable.create("#card")


const submit=document.querySelector("#formsubmit");
submit.addEventListener("click",(event)=>{
  event.preventDefault();
  const name=document.querySelector("#formname").value;
  console.log(name);
  const email=document.querySelector("#email").value
  console.log(email);
  const phone=document.querySelector("#phone").value;
  console.log(phone);
  const message=document.querySelector("#message").value;
  console.log(message);


  const url = "https://tests-production-d124.up.railway.app/"
  const options={
    method:"POST",
    headers: {
      "Content-Type": "application/json" // Set header for JSON
    },
    body:JSON.stringify({name,email,phone,message})
  }
  async  function data(){
    const response=await fetch(url,options);
    const result=await response.json();
    console.log(result);
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  }
  data();  
})
