document.addEventListener("DOMContentLoaded", function() {
    



const apiKey = "f8b1a5d13848ffa0ad8bbcdecc89a74c";






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

    
    

    document.getElementById("temperature").textContent=`${convertFromKelvinToF(temperature)} F`;
    document.getElementById("conditions").textContent=conditions;
    document.getElementById("high").textContent=`${convertFromKelvinToF(high)} F`;
    document.getElementById("low").textContent=`${convertFromKelvinToF(low)} F`;
   
        if(!response.ok)(
            console.log("data not found")
        )
        
    } catch (error){
        console.error(error);
    }
   
}

document.getElementById("press").addEventListener("click",()=>{
    let degrees = document.getElementById("temperature").textContent;
        if(degrees.charAt(degrees.length - 1)=="F"){
            degrees = degrees.slice(0, -1);
            document.getElementById("temperature").textContent=`${convertToC(degrees)}C`;
            return 0;
        }
        degrees = degrees.slice(0, -1);
        document.getElementById("temperature").textContent=`${convertToF(degrees)}F`;
}
);

function convertFromKelvinToF(num){
    return Math.round((num-273.15)*1.8+32);
    
}

function convertToF(num){
    return Math.round((num * 1.8) + 32);
    
}





function convertToC(num){
    num = (num-32)*5/9;
    return num;
    
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