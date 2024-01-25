const loadPhone = async (showall) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    console.log(data)
    const datas = data.data.tools;
    console.log(datas);
    dispaly(datas, showall);
}

const dispaly = (phones, showAll) => {
    console.log(phones);

    const phnContainer = document.getElementById('phn-container');

    // Show all button
    const show = document.getElementById('show');

     // Select the button element with id 'show'
    //  Add the event listener for the "See More" button here
     show.addEventListener('click', () => {
        seeall(true);
        
      
    });



    
    if (!showAll) {
        phones = phones.slice(0, 6);
    }

    phones.forEach(phone => {
        const phnCard = document.createElement('div');
        phnCard.classList = 'm-10 card bg-white shadow-xl';

        phnCard.innerHTML = `
        <img src="${phone.image}" alt="" class="rounded-xl w-30" />
        <div class="card-body items-center text-center">
            <h1 class="card-title text-3xl text-black font-bold">Features</h1>
            ${phone.features && phone.features.length >= 3 ? `
                <p>1.${phone.features[0]}</p>
                <p>2.${phone.features[1]}</p>
                <p>3.${phone.features[2]}</p>
            ` : ''}
            <div>
                <hr class="w-60 mt-2">
                <div class="space-y-5">
                    <h2 class="text-3xl text-black font-bold mt-6">${phone.name}</h2>
                    <p class="text-black font-bold">📅 ${phone.published_in}</p>
                </div>
            </div>
        </div>
        <div class="my-4 font-bold text-center">
            <button class="btn btn-primary" onclick="showdetails('${phone.id}')" >Details</button>
        </div>
    `;

        phnContainer.appendChild(phnCard);
    });

   
}

const seeall = (showall) => {
    loadPhone(showall);
   
}




// showdetails 








const showdetails = async (id) => {
    console.log(id);

    
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
     
            const data = await res.json();
            const datafile = data.data
            console.log(datafile)
            phndata(datafile)

          
}





const phndata = (tools) => {
    my_modal_4.showModal();
    console.log(tools.image_link);

    const modalContainer = document.getElementById('modalcontarner');
    modalContainer.classList = ' font-bold text-black';



    modalContainer.innerHTML = `

    <div class="flex justify-between  ">
    <div>
    <p>Description: ${tools.description}</p>
    

    <div class="flex justify-between ">
         
<div>
<h1>${tools.pricing
    [0].price}</h1>
<p>${tools.pricing
    [0].plan}</p>
  
</div>
<div>
<h1>${tools.pricing
    [0].price}</h1>
<p>${tools.pricing
    [0].plan}</p>
  
</div>
<div>
<h1>${tools.pricing
    [0].price}</h1>
<p>${tools.pricing
    [0].plan}</p>
  
</div>

</div>


    
<div class="flex justify-evenly">
<div class="">

<h1 class="card-title text-3xl font-bold">Features</h1>

<p>${tools.features [1].feature_name}</p>
<p>${tools.features [2].feature_name}</p>
<p>${tools.features [3].feature_name}</p>


</div>
<div>

<h1 class="card-title text-3xl font-bold">Integrations</h1>
<p>${tools.integrations[0]}</p>
<p>${tools.integrations[1]}</p>
<p>${tools.integrations[2]}</p>
</div>
</div>

      
    </div>
    <div>
    <img src="${tools.image_link[0]}" alt="">
    <p> ${tools.input_output_examples [1] 
.input  }</p>
<p> ${tools.input_output_examples
   [1] .output}</p>
  
      
    </div>
  

</div>
    
       
  



    




  


    
    `;
}








loadPhone();
