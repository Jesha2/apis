console.log("**Connected");

const resBtn = document.querySelector("button");
const andBtn = document.querySelector("#andrean");
console.log("**Sucess");
console.log(resBtn);



let buttonClicked=()=>{
    console.log("Button clicked");
    let residentName = "Alderaan";
    axios
      .get("https://swapi.dev/api/planets")
      .then((res) =>{

          let residents =res.data.results;
          for (const resident of residents) {
            if(resident.name === residentName){
                let H2 = document.createElement("h2");
                H2.textContent = resident.name;
                console.log(H2.textContent);
                document.body.appendChild(H2);

            }
        }
          console.log(residents); 

      })
      .catch((error) => console.log(error));
}
let buttonClickedForAlderaan=()=>{
    console.log("Button clicked");
    axios
      .get("https://swapi.dev/api/planets/?search=Alderaan")
      .then((res) =>{
          let resident =res.data.results[0].name
          console.log(resident);   

          let H2 = document.createElement("h2")
                H2.textContent = resident;
                console.log(H2.textContent);
                document.body.appendChild(H2);
      })
      .catch((error) => console.log(error));
}
resBtn.addEventListener('click', buttonClicked);
andBtn.addEventListener('click', buttonClickedForAlderaan);


//https://swapi.dev/api/planets/?search=Alderaan