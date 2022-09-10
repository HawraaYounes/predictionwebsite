var dogImage = document.getElementById('dog-img');
var name_input = document.getElementById('name_input');
var my_name = document.getElementById('name');
var gender = document.getElementById('gender');
var age = document.getElementById('age');
var nationality = document.getElementById('nationality');
var btn = document.getElementById('btn');
var name_value;

console.log("helllo");
window.addEventListener('load', fetchDogImage);//Display random dog image once the page is loaded.
btn.addEventListener('click', fetchApis);//Once the button is clicked, the function fetchApis() is called


function fetchDogImage() {//function that fetch dog images api, and add it to the page
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.innerHTML = `<img src="${data.message}"/>`;
  });
}

function fetchGender(){//function that fetch predicted gender api, and add it to the page
  fetch('https://api.genderize.io?name=rio')
    .then(response => response.json())
    .then(data => {
      gender.innerHTML = `<p>"${data.gender}"</p>`;
  });
}

function fetchAge(){//function that fetch age api, and add it to the page
  fetch('https://api.agify.io/?name=nour')
    .then(response => response.json())
    .then(data => {
      age.innerHTML = `<p>I'm "${data.age}" years old.</p>`;
  });
}

function  fetchNationality(){//function that nationality api, and add it to the page
  fetch('https://api.nationalize.io/?name=mohamad')
    .then(response => response.json())
    .then(data => {
      for(let i=0;i<data.country.length;i++){
        nationality.innerHTML += `<p>"${data.country[i].country_id}"</p>`;
    }
  });
}

function fetchApis(){//function that calls the three previous functions and dispalys the name
    if (name_input.value== "") {
        my_name.innerHTML="Enter your name first!";
     }
     else{
        console.log("hiiiii");
        name_value = name_input.value;
        my_name.innerHTML=name_value;
        fetchGender();
        fetchAge();
        fetchNationality();
     }
}