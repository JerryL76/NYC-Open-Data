async function init(){
  

  let link = "https://data.cityofnewyork.us/resource/4dx7-axux.json";
  info = await fetch(link);
  data = await info.json();
  
  console.log(data);


}


function findBorough(){
  let output = document.getElementById("output");
  let build = "";
  let borough = document.getElementById("borough").value;

  for(let i=0; i<data.length; i++){
    let inspection = data[i];
    if(inspection.borough == borough){
      build+= `<div class="card">`;
      build+= `  <h3>Restaurant Name: ${inspection.restaurantname}</h3>`;
      build+= `  <h3>Legal Business Name: ${inspection.legalbusinessname}</h3>`;
      build+= `  <h4>Borough: ${inspection.borough}</h3>`;
      build+= `  <p>Postal: ${inspection.postcode}</p>`;
      build+= `  <p>Roadway Complaint: ${inspection.isroadwaycompliant}</p>`;
      build+= `  <p>Agency: ${inspection.agencycode}</p>`;
      build+= `</div>`;
    }
  }
  output.innerHTML = build +"\n *** END ***";
}

