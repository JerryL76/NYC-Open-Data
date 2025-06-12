window.onload = function(){  
  //Sample content which is a card below that has some
  //Description on the Hulk character
    
  let DOT_content = ` <div class="container center">
                    <div class="card">
                        <p>The Department of Transportation (DOT), established in 1966, is a U.S. federal agency responsible for overseeing and regulating the nation's transportation systems and infrastructure. Its mission is to ensure safe, efficient, and accessible transportation across various modes, including highways, railroads, aviation, maritime, and public transit. The DOT develops policies and regulations that focus on transportation safety, environmental sustainability, and technological innovation. Key subdivisions include the Federal Aviation Administration (FAA), Federal Highway Administration (FHWA), Federal Transit Administration (FTA), and the National Highway Traffic Safety Administration (NHTSA), among others. Through these efforts, the DOT aims to maintain and improve transportation infrastructure while addressing the evolving needs of the country.</p>
                    </div>
                    <div class="card">
                        <img src='images/DOT.png'>
                    </div>
                  </div>`
    
  let avengers = ["images/antman.png","images/black_widow.png","images/blackpanther.jpg","images/captain_america.png","images/drstrange.jpg","images/hulk.png","images/ironman.png","images/scarlet_witch.png","images/thor.png","images/wasp.png"];

  //Discussion 1: Create a simple modal window with just text
  let modal1 = new Modal("Click Here For Information","Hi There. Restaurant Inspections is where they inspect the restaurant sidewalks and roads and ensure that they comply with safety and make sure people can smoothly transport around the area. The importance of this is to ensure no traffics are caused by accidents or road blocks or just anything out of order or not in place such as potholes. That's why they get inspected to keep things together");
  modal1.render("modal1");
    
  //Discussion 2: Create a modal modal window using the image of the hulk and the content created for the hulk
    
  let modal2 = new Modal("<img src='images/DOT.png'>",DOT_content);
  modal2.render("modal2");
}

