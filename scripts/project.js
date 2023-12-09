/* W06: Project */

/* Declare and initialize global variables */

const leadersElement = document.getElementById(`leaders`);
leadersList = [];

/* async displayLeaders Function */

const displayLeaders = (leaders) => {

  leaders.forEach(leader => {
    const articleElement = document.createElement(`article`);
    const h3Element = document.createElement(`h3`);
    h3Element.textContent = leader.name;
    const imgElement = document.createElement(`img`);
    imgElement.src = leader.imageUrl;
    //imgElement.alt = leader.location;
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    leadersElement.appendChild(articleElement);

        
  });
}



/* async getLeaders Function using fetch()*/

const  getLeaders = async () => {

  const response = await fetch(`https://run.mocky.io/v3/a0029183-e1ca-4a45-b2a3-cdd4267cba80`);
  const data = await response.json();
  leadersList = data;
  displayLeaders(leadersList);
    

}

/* reset Function */

const reset = () => {

  const articles = leadersElement.querySelectorAll(`article`);
  articles.forEach(article => {
    article.remove();
  });
}

/* sortBy Function */

const sortBy = (leaders) => {

  reset();
  const filter = document.getElementById('sortBy').value; 
  switch (filter) {

    case 'firstPresidency':
      displayLeaders(leaders.filter(leader => leader.id.includes('First Presidency')));
      break;
  
    case 'quorumOf12':
      displayLeaders(leaders.filter(leader => !leader.id.includes('First Presidency')));
      break;
  
    case 'all':
      default:
        displayLeaders(leaders);
        break;
  }
  };
  
  // Example usage:
  // sortBy(templeList);
  


getLeaders();

/* Event Listener */

document.querySelector(`#sortBy`).addEventListener(`change`, () => {sortBy(leadersList)});