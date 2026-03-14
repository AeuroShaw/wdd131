const year=document.querySelector("#year");
const lastModified=document.querySelector("#lastModified");
const menuButton=document.querySelector("#menu");
const navigation=document.querySelector("nav");

year.textContent=new Date().getFullYear();

lastModified.textContent="Last Modified: "+document.lastModified;

menuButton.addEventListener("click",()=>{
navigation.classList.toggle("open");

if(menuButton.textContent==="☰"){
menuButton.textContent="✖";
}else{
menuButton.textContent="☰";
}
});
