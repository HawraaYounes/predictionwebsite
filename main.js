var dogImage = document.getElementById('dog-img');
var nameInput = document.getElementById('name_input');
var myName = document.getElementById('name');
var gender = document.getElementById('gender');
var age = document.getElementById('age');
var nationality = document.getElementById('nationality');
var btn = document.getElementById('btn');
var nameValue;

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
  fetch('https://api.genderize.io?name='+nameValue)
    .then(response => response.json())
    .then(data => {
      gender.innerHTML = `<p>Gender: "${data.gender}"</p>`;
  });
}

function fetchAge(){//function that fetch age api, and add it to the page
  fetch('https://api.agify.io/?name='+nameValue)
    .then(response => response.json())
    .then(data => {
      age.innerHTML = `<p>Age: "${data.age}" years old.</p>`;
  });
}

function  fetchNationality(){//function that nationality api, and add it to the page
  fetch('https://api.nationalize.io/?name='+nameValue)
    .then(response => response.json())
    .then(data => {
      nationality.innerHTML += `<span>"Nationality: "</span>`;
      for(let i=0;i<2;i++){
        nationality.innerHTML += `<span>" ${data.country[i].country_id}"</span>`;
    }
  });
}

function fetchApis(){//function that calls the three previous functions and dispalys the name
    if (nameInput.value== "") {
        myName.innerHTML="Enter your name first!";
        
     }
     else{
        myName.innerHTML='';
        gender.innerHTML='';
        age.innerHTML='';
        nationality.innerHTML='';
        nameValue = nameInput.value;
        myName.innerHTML=nameValue;
        fetchGender();
        fetchAge();
        fetchNationality();
     }
}