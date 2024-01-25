const loadPhone = async (serachtext = 'a',showAll)=>{
    const res = await     fetch(`https://openapi.programming-hero.com/api/phones?search=${serachtext}`)
    const data = await res.json()
    const phn = data.data
    dispalyPhone(phn,showAll)

//    console.log(phn)
}

const dispalyPhone = (phones,showAll) =>{
    // console.log(phones)
    const phncontainer = document.getElementById('phn-container')
    // clear phone container add new phone

    phncontainer.innerHTML= ''


    
// show all button
const  show = document.getElementById('shows')


if (phones.length > 12 && !showAll) {

  show.classList.remove('hidden')

  
}
else{
  show.classList.add('hidden')
}
// console.log(showAll)

    // disply only 10 datas not shows

   if (!showAll) {
    phones = phones.slice(0,12)
    
   }
    


    phones.forEach(phone => {
        // console.log(phone.phone_name)

        const phnCrad = document.createElement('div')
        phnCrad.classList = ` w-95 m-20 card bg-white shadow-xl`

        phnCrad.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="${phone.phone_name}" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.brand}</h2>
        <p>${phone.slug}</p>
        <div onclick="showdetails('${phone.slug}')" class="card-actions">
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
        `

        phncontainer.appendChild(phnCrad); 
        
    });

    loading(false)
}


// search 

const handlesearch = (showAll)=>{
  loading(true)
    const inputfild =  document.getElementById("inputs")
    const serachtext = inputfild.value
    // console.log(serachtext)
    loadPhone(serachtext,showAll)
    


}

// loadiing funcion

const loading = (isLoading)=>{
  const loadingFild =  document.getElementById("lodading")
 if (isLoading) {
  loadingFild.classList.remove('hidden')
  
 }
 else{
  loadingFild.classList.add('hidden')

 }
 



}


// show all btn

const handleshowall = (showAll)=>{
  handlesearch(true)


}


// showdetails 

const showdetails = async(id)=>{

  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json()
 const phndatas = data.data

  phndata(phndatas)

}

// show  phn data 

const phndata = (phne)=>{
  my_modal_4.showModal()
  console.log(phne)

  const ponedata = document.getElementById('phnDetailsContainer')

  ponedata.classList = `  space-y-6   font-bold`

  ponedata.innerHTML = `
  <img class="px-96" src="${phne.image}" alt="">
  <h1 class="text-3xl text-slate-950">Name: ${phne.name}</h1>

  <p class="text-xl text-slate-950">storage: ${phne.mainFeatures.storage
  }</p>
  <p class="text-xl text-slate-950">Dispay Size: ${phne.mainFeatures.displaySize}</p>
  <p class="text-xl text-slate-950">Chipset: ${phne.mainFeatures.chipSet}</p>
  <p class="text-xl text-slate-950">Memory: ${phne.mainFeatures.memory}</p>
  <p class="text-xl text-slate-950">slug: ${phne.slug}</p>
  <p class="text-xl text-slate-950">Release Date: ${phne. releaseDate}</p>
  <p class="text-xl text-slate-950">Brand: ${phne.brand
  }</p>
  <p class="text-xl text-slate-950">Gps:${phne.mainFeatures.sensors}</p>
  
  `

}



loadPhone()