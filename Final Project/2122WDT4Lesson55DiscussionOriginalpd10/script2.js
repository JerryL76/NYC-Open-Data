let data;

async function init(){




  let link = "https://data.cityofnewyork.us/resource/4dx7-axux.json";

  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function restaurantByBorough(){
  
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  

  for(let i = 0; i < data.length; i++){
    let inspection = data[i];
    if(inspection.borough == "Queens"){
      q++;
    }
	else if(inspection.borough == "Manhattan"){
      m++;
    }
	else if(inspection.borough == "Brooklyn"){
      bk++;
    }
	else if(inspection.borough == "Bronx"){
      bx++;
    }

  }

  let chartData = [
    ["Queens",q],
    ["Manhattan",m],
    ["Brooklyn", bk],
    ["Bronx", bx],
  ]
  console.log(chartData)

  let chartType = get("chartType").value;
  

  displayChart(chartData,"chart",chartType)
}


