function process() {
    var unit = document.getElementById("unitBox").value;
    var quantity = parseInt(document.getElementById("quantityBox").value);




    if (unit * quantity > 20000 && quantity > 20) {

        document.getElementById("content").innerHTML = `
     <h4>10% discount<h4> `;
    }

    if (unit * quantity > 10000 && quantity > 10) {

        document.getElementById("content").innerHTML = `
     <h4>5% discount<h4> `;
    }

    if (unit * quantity > 5000 && quantity > 6) {

        document.getElementById("content").innerHTML = `
     <h4>3% discount<h4> `;
    }





    else {
    document.getElementById("content").innerHTML = `
        
        <h4> Sorry  no discount this time </h4> `;
       }
}
