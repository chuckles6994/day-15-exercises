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

// Departures Stage 1

// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

// const heading= document.createElement('h1')
// heading.innerHTML="Departure Times"
// body.appendChild(heading)
// const list=document.createElement('ul')
// body.appendChild(list)

//     departures.forEach(element => {
//         let hours =Math.floor(element/60);
//         let min = element -(hours*60);
//         const li = document.createElement('li');
//         li.innerHTML= `<li> ${hours} : ${min}</li>`;
//         list.appendChild(li)
//     });

// Shopping list stage 1
// const items= ['apples', 'bananas','grapefruit','oranges', 'kiwis']
// const div=document.getElementById('items')

// items.forEach(fruit => {
//     const newDiv=document.createElement('div')
//     div.appendChild(newDiv)
//     div.classList.add('fruit')
//     div.innerHTML+=fruit
// })

// Departures Stage 2

const departures = [
    {time: {hrs: 8, min: 14},
    train: 'Acela Express',
    No:2153,
    Destination:'Washington, D.C.',
    Status:'',
    Track:'2'
    },
    {time: {hrs: 8, min: 19},
    train: 'New Haven Line',
    No:1541,
    Destination:'Grand Central Terminal',
    Status:'On Time',
    Track:'14'
    },
    {time: {hrs: 8, min: 20},
    train: 'Shoreline East',
    No:1606,
    Destination:'Old Saybrook',
    Status:'On Time',
    Track:'12'
    },
    {time: {hrs: 8, min: 37},
    train: 'NE Regional',
    No:190,
    Destination:'Boston South Station',
    Status:'On Time',
    Track:'1'
    },
    {time: {hrs: 8, min: 40},
    train: 'Shuttle',
    No:490,
    Destination:'Springfield',
    Status:'On Time',
    Track:'3'
    }, 
    {time: {hrs: 8, min: 43},
    train: 'NE Regional',
    No:95,
    Destination:'Newport News',
    Status:'On Time',
    Track:'3'
    },
    {time: {hrs: 8, min: 50},
    train: 'New Haven Line',
    No:1545,
    Destination:'Grand Central Terminal',
    Status:'On Time',
    Track:'8'
    }, 
    {time: {hrs: 9, min: 16},
    train: 'Shoreline East',
    No:1610,
    Destination:'Old Saybrook',
    Status:'On Time',
    Track:'10'
    }, 
    {time: {hrs: 9, min: 23},
    train: 'New Haven Line',
    No:1549,
    Destination:'Grand Central Terminal',
    Status:'On Time',
    Track:'14'
    }, 
    {time: {hrs: 9, min: 36},
    train: 'Acela Express',
    No:2150,
    Destination:'Boston South Station',
    Status:'On Time',
    Track:'1'
    }, 
    {time: {hrs: 9, min: 46},
    train: 'New Haven Line',
    No:1551,
    Destination:'Grand Central Station',
    Status:'On Time',
    Track:'8'
    }, 
    {time: {hrs: 10, min: 13},
    train: 'NE Regional',
    No:170,
    Destination:'Boston South Station',
    Status:'On Time',
    Track:'2'
    }, 
    {time: {hrs: 10, min: 25},
    train: 'New Haven Line',
    No:1553,
    Destination:'Grand Central Terminal',
    Status:'On Time',
    Track:'14'
    }
];

const heading= document.querySelector('th')
heading.textContent="Departure Times"
heading.classList.add('head')
const table=document.querySelector("table")

    departures.forEach(element => {
        // let hours =Math.floor(element/60);
        // let min = element -(hours*60);
        table.innerHTML +=
        `<tr><td>${element.time.hrs}:${element.time.min}</td></tr>
        <tr><td>${element.train}</td></tr>
        <tr><td>${element.No}</td></tr>
        <tr><td>${element.Destination}</td></tr>
        <tr><td>${element.Status}</td></tr>
        <tr><td>${element.Track}</td></tr>
        <hr>`
        table.classList.add('board__time')
    });
 





    









