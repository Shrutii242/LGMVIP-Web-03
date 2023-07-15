
const html = document.getElementById('html');
const css = document.getElementById('css');
const java = document.getElementById('java');
const python = document.getElementById('python');
const submit = document.getElementById('submit');
const Name = document.getElementById('Name');
const email = document.getElementById('email');
const mobileno = document.getElementById('mobileno');
const male = document.getElementById('male');
const female = document.getElementById('female');
const details = document.querySelector('.details');
const form = document.querySelector('.form');
var img;

const image = function (event) {
  img = URL.createObjectURL(event.target.files[0]);
};

submit.addEventListener('click', () => {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  details.innerHTML += `
    <div class="details_2">   
      <div class="image">
        <img src='${img}' alt="Image">
      </div>
      <div class="details_1">
        <h3 class="my_name">${Name.value}</h3>
        <p class="text">${male.checked ? male.value : female.checked ? female.value : 'Others'}</p>          
        <p class="text">${email.value}</p>
        <p class="text">${mobileno.value}</p>
        <p class="text">${values}</p>    
      </div> 
    </div>`

  alert('great!!  Student Enrolled Successfully!!!!');
  form.reset();
});
