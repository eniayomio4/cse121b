/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: `Orimisan Eniayomi Adegboye`,
    photo: `images/IMG_4684.jpeg`,
    favoriteFoods: [`Rice`,`Spaghetti`,`Toast Bread`,`Hamburger`,`Chicken Pie`],
    hobbies: [`Playing Football`, `Playing Video Games`, `Dancing`],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: `Ikeja, Lagos`,
        length: `10 years`
    }
);


myProfile.placesLived.push(
    {
        place: `Owerri, Imo`,
        length: `5 years`

    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */

document.querySelector(`#photo`).setAttribute('src', myProfile.photo)
document.querySelector(`#photo`).setAttribute('alt', myProfile.name)

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach( food => {
    let li = document.createElement(`li`);
    li.textContent = food;
    document.querySelector(`#favorite-foods`).appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach( hobby => {
    let li = document.createElement(`li`);
    li.textContent = hobby;
    document.querySelector(`#hobbies`).appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach( place => {
    let dt = document.createElement(`dt`);
    let dd = document.createElement(`dd`)
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector(`#places-lived`).appendChild(dt);
    document.querySelector(`#places-lived`).appendChild(dd);
});

