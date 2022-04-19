const SearchPhones = () => {
    // get input text
    const SearchFild = document.getElementById('Phone-search');
    const Searchtext = SearchFild.value;
  
    // clean inputfild

    SearchFild.value = '';
  

    // search URL

    const url = `https://openapi.programming-hero.com/api/phones?search=${Searchtext}`;
    fetch(url)
    .then(res => res.json())
    .then(Phone => displayPhones(Phone.data,Phone.status));
   }



   
    // display phone search result

  const displayPhones = (data , status) => {
    const SearchResult = document.getElementById('Result-container');


    // clean past search results
    SearchResult.textContent = '';

          //  clean previous details
   const Detail = document.getElementById('Details');
   Detail.textContent='';
  
  
  // Handle Search texts and aboilability.

 if(status == true){
   
   //clean error massge field.
  const getNotFound = document.getElementById('Not-found');
  getNotFound.innerText = '';

  // forEach function
 
   data.forEach(phone => {
  
    const  creatDiv = document.createElement('div');
    // creatDiv.classList.add('');
    
       creatDiv.innerHTML = `    
       <div class="lg:p-3 p-1  flex items-center justify-around">
         <img src="${phone.image}" class="" alt="...">
         <div class="">
           <h5 class="font-O  text-xl">Brand: ${phone.brand}</h5>
           <p class="font-O">Model: ${phone.phone_name.slice(0, 200)}</p>
           <button onclick="Detail('${phone.slug}')" class="lg:text-xl hover:bg-purple-700  bg-P font-S text-white transition-all px-2 py-1 mt-2 rounded-md  p-2  ">Details</button>
         </div>
       </div>        
       `
       SearchResult.appendChild(creatDiv);
     
  
      
   })

  //  clean SearchResult
   creatDiv.textContent = '';
  
  }

  // show error when phone not found!!!

  else{
    const getNotFound = document.getElementById('Not-found');
    getNotFound.innerText = 'This phone is not found!!';
  }
}

   
// Detail part

const Detail = phoneSlag =>{
  
  const url = `https://openapi.programming-hero.com/api/phone/${phoneSlag}`;
   fetch(url)
   .then(res => res.json())
   .then(slug =>displayDetails(slug.status , slug.data));
}
// arrow function
const displayDetails = (status, data) => {
  
// handle invalid inputs

   if(status == true){
      //  clean previous details
   const Detail = document.getElementById('Details');
   Detail.textContent='';
   
  //  Detail container
   
   const Div = document.createElement('div');
   Div.innerHTML = `
  
    <div class="lg:p-3  p-5  mt-5 lg:flex items-center justify-center">
    <img class="p-3 lg:mr-4 " src="${data.image}" class="" alt="...">
         <div class="mt-5">
         <p class="text-sm lg:text-xl">Name: ${data.name}.</p>
         
         <p class="text-sm lg:text-xl">Brand: ${data.brand}.</p>
         <p class="text-sm lg:text-xl">Release Date: ${data.releaseDate}.</ptext-sm lg:text-xl
         <p class="text-sm lg:text-xl ">Storage: ${data.mainFeatures.storage}.</>
         <p class="text-sm lg:text-xl">Display Size: ${data.mainFeatures.displaySize}.</p>
         <p class="text-sm lg:text-xl">ChipSet: ${data.mainFeatures.chipSet}.</p>
         <p class="text-sm lg:text-xl">Memory: ${data.mainFeatures.memory}.</p>
         <p class="text-sm lg:text-xl">sensors: ${data.mainFeatures.sensors}.</p>
         <p class="text-sm lg:text-xl">Others:</p>
         <p class="text-sm lg:text-xl">Bluetooth: ${data.others.Bluetooth}.</p>
         <p class="text-sm lg:text-xl">GPS: ${data.others.GPS}.</p>
         <p class="text-sm lg:text-xl">NFC: ${data.others.NFC}.</p>
         <p class="text-sm lg:text-xl">Radio: ${data.others.Radio}.</p>
         <p class="text-sm lg:text-xl">USB: ${data.others.USB}.</p>
         </div>
       </div>   
   
   `;
   Detail.appendChild(Div);


  

} 

}
   

