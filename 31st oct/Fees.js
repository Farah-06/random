function process(){
    var person = document.getElementById("nameBox").value ;
    var courses = parseInt(document.getElementById("courseBox").value) ;
    
    var tuitionfee = parseInt(document.getElementById("tuitionBox").value) ;

    
    if(courses*tuitionfee > 20000) {
         
        document.getElementById("content").innerHTML=`
     <h4>Hello ${person}, you will get scholarship this time <h4> `;

    
    }
    else{
        document.getElementById("content").innerHTML=`
        
        <h4> Sorry ${person}, no scholarship can be obtained this time </h4> `;
    }
}
