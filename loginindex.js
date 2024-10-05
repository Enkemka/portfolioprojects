document.addEventListener("DOMContentLoaded", function() {
    



const apiKey = "f8b1a5d13848ffa0ad8bbcdecc89a74c";

function convertToF(num){
    return Math.round((num-273.15)*1.8+32);
    
}

async function getData(locationName){
    try{
        let apiCall=`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${apiKey}`;
        //get api key 
        const response= await fetch(apiCall);
        //fetch api call
        const data= await response.json();
        //turn datat from api call that was fatched into json
        console.log(data);
       

   const{name:location,main:{temp:temperature},weather:[{description:conditions}],main:{temp_max:high},main:{temp_min:low}}=data;
   //object destrucuting, nested include
   //old name then new, {nested object}[{nested array}]
   console.log(` here in ${location} its looking like we have ${conditions}`)

    document.getElementById("location").textContent=location;

    
    

    document.getElementById("temperature").textContent=`${convertToF(temperature)} ℉`;
    document.getElementById("conditions").textContent=conditions;
    document.getElementById("high").textContent=`${convertToF(high)} ℉`;
    document.getElementById("low").textContent=`${convertToF(low)} ℉`;
   
        if(!response.ok)(
            console.log("data not found")
        )
        
    } catch (error){
        console.error(error);
    }
   
}




function convertToC(num){
    return (num-32)*5/9;
    
}



document.getElementById("search").addEventListener("click",()=>{
   
  let locationName = document.getElementById("userInput").value;
   document.getElementById("userInput").value="";
    console.log(locationName)
    getData(locationName);
    
    
    
});






//button event click lister that changes from kevil to farenheight and celcious



//make a funtion that acesses all the text contents and changes them with api values 
//search bitton click event listener that changes name depedning on what user typed 




});