import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell','crispysandwhich'];
followersArray.forEach((person) =>{
  axios.get(`https://api.github.com/users/${person}`)
  .then(res =>{
    console.log(res)
    createCard(res)

  })
  .catch(err => console.log(err))
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const card = document.querySelector('.cards')

function createCard(object){

    const html =  ` 
      <div class="card">
      <img src= ${object.data.avatar_url} />
      <div class="card-info">
        <h3 class="name">${object.data.name === null ? 'not availble' : object.data.name}</h3>
        <p class="username">${object.data.login}</p>
        <p>Location: ${object.data.location === null ? 'not availble' : object.data.location}</p>
        <p>Profile:
          <a href=${object.data.html_url}>${object.data.html_url}</a>
        </p>
        <p>Followers: ${object.data.followers}</p>
        <p>Following: ${object.data.following}</p>
        <p>Bio: ${object.data.bio}</p>
      </div>
    </div>
   `
    
   card.innerHTML += html
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
