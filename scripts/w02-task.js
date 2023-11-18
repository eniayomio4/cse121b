/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = `Orimisan Eniayomi Adegboye`;
let currentYear = `2023`;
let profilePicture = `images/IMG_4684.jpeg`;


/* Step 3 - Element Variables */

const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.querySelector(`img`);



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src' , profilePicture);
imageElement.setAttribute('alt' , `<strong>Profile image of ${fullName}</strong>`);



/* Step 5 - Array */

const favfoods = [`Rice and Beans`, `Yam and Egg`, `Chips and Chicken`, `Spaghetti and Meat balls`];
foodElement.textContent = `${favfoods}`;
let single_favfood = `Irish potatoe and egg`;
favfoods.push(single_favfood);
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.shift();
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.pop();
foodElement.innerHTML += `<br>${favfoods}`;




