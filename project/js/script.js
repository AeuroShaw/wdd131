const foods = [
{
name: "Suya",
ingredients: "Beef, pepper, spices",
image: "images/suya.jpg"
},
{
name: "Puff Puff",
ingredients: "Flour, sugar, yeast",
image: "images/puffpuff.jpg"
},
{
name: "Akara",
ingredients: "Beans, pepper, onions",
image: "images/akara.jpg"
},
{
name: "Boli",
ingredients: "Roasted plantain",
image: "images/boli.jpg"
},
{
name: "Roasted Corn",
ingredients: "Fresh corn roasted over fire",
image: "images/corn.jpg"
}
];

function displayFoods(){

const container = document.querySelector("#foodsContainer");

if(!container) return;

let html="";

foods.forEach(food => {

html += `
<div class="food-card">
<img src="${food.image}" loading="lazy" alt="${food.name}">
<h3>${food.name}</h3>
<p>${food.ingredients}</p>
</div>
`;

});

container.innerHTML = html;

}

displayFoods();


const locations = [
"Lagos Night Market",
"Abuja Street Vendors",
"Ibadan Roadside Grills",
"University Food Stalls"
];

function displayLocations(){

const container = document.querySelector("#locationsContainer");

if(!container) return;

let html="";

locations.forEach(location => {

html += `
<div class="food-card">
<h3>${location}</h3>
<p>Popular place to enjoy Nigerian street food.</p>
</div>
`;

});

container.innerHTML = html;

}

displayLocations();


const saveBtn = document.querySelector("#saveBtn");

if(saveBtn){

saveBtn.addEventListener("click", () => {

const food = document.querySelector("#favoriteFood").value;

if(food === ""){
document.querySelector("#favoriteMessage").textContent =
"Please choose a food.";
return;
}

localStorage.setItem("favoriteFood", food);

document.querySelector("#favoriteMessage").textContent =
`Your favorite street food is ${food}`;

});

}


function loadFavorite(){

const favorite = localStorage.getItem("favoriteFood");

if(favorite){

const msg = document.querySelector("#favoriteMessage");

if(msg){
msg.textContent = `Your favorite street food is ${favorite}`;
}

}

}

loadFavorite();
