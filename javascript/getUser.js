// variable 
  // contiene los datos del usuario generado
    var user = [];
  // variable de los elementos html
    const image = document.querySelector('.head-image');
    const information = document.querySelector('.user-data-information');
    const name = document.querySelector('.user-data-name')
    // botones 
    const locationDataButton = document.getElementById('LocationBtn');
    const phoneDataButton = document.getElementById('PhoneBtn');
    const mailDataButton = document.getElementById('MailBtn');








locationDataButton.addEventListener('click', () => {
  information.innerHTML = `${user.location.city}, ${user.location.state}, ${user.location.country}`
})

phoneDataButton.addEventListener('click', () => {
  information.innerHTML = ` ${user.phone}`
})

mailDataButton.addEventListener('click', () => {
  information.innerHTML = `${user.email}`
})


function loadData(){

  fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => {
      user = data.results[0];
      console.log(user);
      
      image.src = `${data.results[0].picture.large}`;
      name.innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
      information.innerHTML = `${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}`
    })
    
}


loadData()
