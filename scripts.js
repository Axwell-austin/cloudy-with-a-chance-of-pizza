console.log('HI')
function getSize() {
    var size = document.getElementById("pizzaSize").value;
    return parseInt(size);
  }
  function getCrust() {
    var crust = document.getElementById("pizzaCrust").value;
    return parseInt(crust);
  }
  
  function getTopping() {
    var topping = document.getElementById("pizzaTopping").value;
    return parseInt(topping);
  }
  function getQuantity() {
    var number = document.getElementById("quantity").value;
    return parseInt(number);
  }
  /*calculation of total amount*/
  function totalAmount() {
      var totals = (getSize() + getCrust() + getTopping()) * getQuantity();
      alert(
      "Your order of" +
      getQuantity("") +
      "Pizza," +
      "" + "total to Shillings " +
      totals +
      "" + "" + "Keep Shopping with us."
      );
      /*location details*/
    var location = prompt("Please pin your location of delivery");
    if (location !=="") {
        alert("Pay ksh 100, and your order will be on its way.")
    }
  }