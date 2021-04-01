console.log("I am CV Reader Project");

let objarr=[

    {
        name:"jay",
        Language:"Javascript",
        framework:"Node Js",
        image:"https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        name:"Mihir",
        Language:"Javascript",
        framework:"React Js",
        image:"https://randomuser.me/api/portraits/men/93.jpg"
    },{
        name:"Mahesh",
        Language:"Javascript",
        framework:"Node Js",
        image:"https://randomuser.me/api/portraits/men/10.jpg"
    },
    {
        name:"Hemant",
        Language:"Javascript",
        framework:"Express Js",
        image:"https://randomuser.me/api/portraits/men/99.jpg"
    }
]

function itter(arry){
    let index=0;
    return {
        next:()=>{
          return  index<arry.length ? 
          {value:arry[index++]}:{done:true}
        }
    }
}
let ittobj=itter(objarr);
let card=document.getElementById('card');
    let ansobje=ittobj.next();
    if(ansobje.done!=true){
        card.innerHTML=`<img src="${ansobje.value.image}" id="image" class="card-img-top img-fluid" alt="..." style="max-height: 350px;">
        <div class="card-body">
          <p class="card-text" id="profile"><h1>${ansobje.value.name}</h1></p>
        </div>`
    }else{
     card.innerHTML=`<h5>There is No more Candidates</h5>`;
    }

let btnsub=document.getElementById('next');
btnsub.addEventListener('click',()=>{
    let card=document.getElementById('card');
    let ansobje=ittobj.next();
    if(ansobje.done!=true){
        card.innerHTML=`<img src="${ansobje.value.image}" id="image" class="card-img-top img-fluid" alt="..." style="max-height: 350px;">
        <div class="card-body">
          <p class="card-text" id="profile"><h1>${ansobje.value.name}</h1></p>
        </div>`
    }else{
     card.innerHTML=`<h5>There is No more Candidates</h5>`;
    }
    
    


});