const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

year.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modified: " + document.lastModified;

menuButton.addEventListener("click", () => {
navigation.classList.toggle("open");

if (menuButton.textContent === "☰") {
menuButton.textContent = "✖";
} else {
menuButton.textContent = "☰";
}
});


// TEMPLE DATA ARRAY
const temples = [

{
name: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005-08-07",
area: 11500,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple.jpg"
},

{
name: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888-05-21",
area: 74792,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple.jpg"
},

{
name: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015-06-07",
area: 96630,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple.jpg"
},

{
name: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020-05-02",
area: 6861,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple.jpg"
},

{
name: "Rome Italy",
location: "Rome, Italy",
dedicated: "2019-03-10",
area: 41010,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
},

{
name: "Salt Lake",
location: "Salt Lake City, Utah",
dedicated: "1893-04-06",
area: 253015,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
},

{
name: "Paris France",
location: "Paris, France",
dedicated: "2017-05-21",
area: 44000,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg"
},

{
name: "Tokyo Japan",
location: "Tokyo, Japan",
dedicated: "1980-10-27",
area: 52900,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple.jpg"
},

{
name: "Accra Ghana",
location: "Accra, Ghana",
dedicated: "2004-01-11",
area: 17500,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg"
}

];

const container = document.querySelector("#temple-cards");


// DISPLAY FUNCTION
function displayTemples(templeList) {

container.innerHTML = "";

templeList.forEach(temple => {

const card = document.createElement("section");

const name = document.createElement("h2");
name.textContent = temple.name;

const location = document.createElement("p");
location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

const dedicated = document.createElement("p");
dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

const size = document.createElement("p");
size.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

const image = document.createElement("img");
image.src = temple.imageUrl;
image.alt = temple.name;
image.loading = "lazy";

card.appendChild(name);
card.appendChild(location);
card.appendChild(dedicated);
card.appendChild(size);
card.appendChild(image);

container.appendChild(card);

});

}


// SHOW ALL TEMPLES ON PAGE LOAD
displayTemples(temples);


// NAVIGATION FILTERS

document.querySelector("#home").addEventListener("click", () => {
displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
displayTemples(temples.filter(t => t.area < 10000));
});
