function process(){
    var person = document.getElementById("nameBox").value ;
    var travel = parseInt(document.getElementById("travelBox").value) ;
    
    

    
    if(travel > 10) {
         
        document.getElementById("content").innerHTML=`
     <h4>Hello ${person}, travelled a lot <h4> `;

    
    }
    else{
        document.getElementById("content").innerHTML=`
        
        <h4> Hello ${person}, more to travel. </h4> `;
    }
}