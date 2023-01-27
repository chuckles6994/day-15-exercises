// const product_name = 'MacBook Pro 14" M1 PRO'
// const product_price = '2410'
// const currency = 'EUR';
let body=document.body;

// const product_html = `<div class="product product--highlighted">
//     <div class="product__name">${product_name}</div>
//     <div class="product__price">${product_price}${currency}</div>
// </div>`;

// const elementFromHTML = (html) => {
//     const div = document.createElement('div');
//     div.innerHTML = html;
//     return div.firstChild;
// }

// const div= elementFromHTML(product_html)
// body.appendChild(div)

// // Discover String Interpolation 

// const employee = {
//     first_name: 'Alfred',
//     last_name: 'Pennyworth',
//     age: 67,
//     occupation: 'butler',
//     place_of_residence: 'Gotham',
//     photo_url: 'https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg'
// };
// const id = `<div class="employee__photo">
//         <img src="${employee.photo_url}" alt="${employee.first_name}
//         ${employee.last_name}">
//     </div>
//     <div class="employee_info">
//         <div class="employee__full-name">${employee["first_name"]}
//         ${employee["last_name"]}</div>
//         <div class="employee__occupation">${employee["occupation"]}</div>
//         <div class="employee__residence">Last known place of residence: ${employee["place_of_residence"]}</div>
//         <div class="employee__age">Age: ${employee["age"]} years old</div>
//     </div>
// </div>`;

// const elementFromHTML = (html) => {
//         const div = document.createElement('div');
//         div.innerHTML = html;
//         return div
//     }

// const div= elementFromHTML(id);
// body.appendChild(div);

// // Discover Style and classlist
// const alerts = [
//     'Unable to access resource. User is not authorized.',
//     'You are missing proper user permissions.',
//     'Administrators have been notified of this action.',
//     'Please remain where you are, police is on the way.'
// ];

// const newDiv= document.createElement('div')
// newDiv.className="alerts"
// body.appendChild(newDiv)

// const elementFromHTML= (html) => {
//     const div =document.createElement('div');
//     div.innerHTML=html;
//     return div;
// }
// for(i=0; i<alerts.length; i++){
//     const alert=alerts[i];
//     const alertElement=elementFromHTML(`<div>`);
//     const alertText=elementFromHTML(`<div>`);
//     const alertClose=elementFromHTML(`<div>`);
//     alertElement.classList.add('alert');
//     alertText.classList.add(`alert__text`);
//     alertClose.classList.add(`alert__close`);
//     alertText.innerHTML=alert;
//     alertClose.innerHTML="&times;"
//     newDiv.appendChild(alertElement);
//     alertElement.appendChild(alertText);
//     alertElement.appendChild(alertClose);
//     // newDiv.addEventListener('click', () =>{
//     //     // alertText.style.backgroundColor="green"
//     //     // alertElement.style.color="white"
//     //     alert.classList.add('alert--error')
//     //     })
//     // alertClose.addEventListener('click', () =>{
//     //     alertClose.style.display="none"
//     //      })
 
//     alertElement.addEventListener('click', ()=>{
//         alertElement.classList.add('alert--error');
//         alertElement.classList.toggle('alert--seen');
//     })
// };

// Discover Attributes

// const alerts=document.querySelectorAll('.alert')

// alerts.forEach(alert=>{
//     const type=alert.getAttribute('data-type');
//     if (type==='error'){
//         alert.classList.add('alert--error');
//     }else if (type==='success'){
//         alert.classList.add('alert--success');
//     }else if (type==='warning'){
//         alert.classList.add('alert--warning');
// }
// })








