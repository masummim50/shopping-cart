const phonePrice = document.getElementById("phone-price").innerText;
let phonePriceNumber = parseFloat(phonePrice);
var phoneCasePrice = document.getElementById("phone-case-price").innerText;
var phoneCasePriceNumber = parseFloat(phoneCasePrice);

// phone plus click event
const phonePlus = document.getElementById("phone-plus");
phonePlus.addEventListener("click", function () {
  cartProduct("#phone-quantity", "phone-price", 1, phonePriceNumber);
});

// phone minus click event

var phoneMinus = document.getElementById("phone-minus");

phoneMinus.addEventListener("click", function () {
  // cartProduct("#phone-quantity", 'phone-price', -1, phonePriceNumber);

  // minus button is staying disabled

  if (parseFloat(document.querySelector("#phone-quantity").getAttribute("value")) < 1) {
    return false;
  }
  else {
    cartProduct("#phone-quantity", "phone-price", -1, phonePriceNumber);
  }
});

// phone case plus click event
var phoneCasePlus = document.getElementById("phone-case-plus");
phoneCasePlus.addEventListener("click", function () {
  cartProduct("#phone-case-quantity", "phone-case-price", 1, phoneCasePriceNumber);
});

// phone case minus click eveny
var phoneCaseMinus = document.getElementById("phone-case-minus");
phoneCaseMinus.addEventListener("click", function () {
  if (parseFloat(document.querySelector("#phone-case-quantity").getAttribute("value")) < 1) {
    return false;
  }
  else {
    cartProduct("#phone-case-quantity", "phone-case-price", -1, phoneCasePriceNumber);
  }
});

// function for adding or removing click and updating price
function cartProduct(id, priceid, quantityvalue, productpricenumber) {
  let productQuantity = document.querySelector(id);
  let value = parseFloat(productQuantity.getAttribute("value"));

  value = value + quantityvalue;
  productQuantity.setAttribute("value", value);

  let newprice = productpricenumber * value;
  document.getElementById(priceid).innerText = newprice;

  //update subtotal

  var subtotal = document.getElementById("subtotal").innerText;
  var subtotalNumber = parseFloat(subtotal);
  subtotalNumber = subtotalNumber + productpricenumber * quantityvalue;
  document.getElementById("subtotal").innerText = subtotalNumber;

  // update tax:
  var tax = document.getElementById("tax").innerText;
  var taxNumber = parseFloat(tax);
  taxNumber = (subtotalNumber * 15) / 100;
  document.getElementById("tax").innerText = taxNumber;

  // show total with taxNumber
  var total = document.getElementById("total").innerText;
  var totalNumber = parseFloat(total);
  totalNumber = subtotalNumber + taxNumber;
  document.getElementById("total").innerText = totalNumber;
}

// manage checkout button

var checkOutButton = document.getElementById("check-out-button");
checkOutButton.addEventListener("click", function () {
  var total = document.getElementById("total").innerText;
  var totalNumber = parseFloat(total);
  if (totalNumber == 0) {
    alert("Can't checkout empty cart");
  }
  else {
  return true;
  }
});


// experimental removing element
// this was bonkers, it works but this is so much code, need to reduce it
var crossbuttons = document.querySelectorAll('.remove-item');
for(var button of crossbuttons){
  button.addEventListener('click', function(e){
    var container =  document.querySelector('.cart-item-container').childElementCount;
    if(container == 3){
    document.querySelector('.cart').remove();
    }
    else{
      var clicked = e.target;
      clicked.parentNode.parentNode.parentNode.remove();
      var sib = clicked.previousElementSibling.childNodes[1].innerText;
      var amountToMinus = parseFloat(sib);
      var amountTax = (amountToMinus*15)/100;
      var subtotal = parseFloat(document.getElementById('subtotal').innerText);
      var tax = parseFloat(document.getElementById('tax').innerText);
      var total = parseFloat(document.getElementById('total').innerText);
      document.getElementById('subtotal').innerText = subtotal - amountToMinus;
      document.getElementById('tax').innerText = tax - amountTax;
      document.getElementById('total').innerText = total - (amountToMinus+amountTax);
    }
  })
}