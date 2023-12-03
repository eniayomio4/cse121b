/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById(`temples`);
templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {

    temples.forEach(temple => {
        const articleElement = document.createElement(`article`);
        const h3Element = document.createElement(`h3`);
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement(`img`);
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);

        
    });
}



/* async getTemples Function using fetch()*/

const  getTemples = async () => {

    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`);
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
    

}

/* reset Function */

const reset = () => {

    const articles = templesElement.querySelectorAll(`article`);
    articles.forEach(article => {
        article.remove();
    });
}

/* sortBy Function */

const sortBy = (temples) => {

    reset();
    const filter = document.getElementById('sortBy').value; 
    switch (filter) {

      case 'utah':
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
  
      case 'nonutah':
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
  
      case 'older':
        displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
        break;
  
      case 'all':
      default:
        displayTemples(temples);
        break;
    }
  };
  
  // Example usage:
  // sortBy(templeList);
  


getTemples();

/* Event Listener */

document.querySelector(`#sortBy`).addEventListener(`change`, () => {sortBy(templeList)});