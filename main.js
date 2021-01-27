
const phonePrice = document.getElementById('phone-price').innerText;
  let phonePriceNumber = parseFloat(phonePrice);
var phoneCasePrice = document.getElementById('phone-case-price').innerText;
var phoneCasePriceNumber = parseFloat(phoneCasePrice);





// phone plus click event
const phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function(){

  cartPhone('#phone-quantity', 'phone-price', 1, phonePriceNumber);

});

// phone minus click event
var phoneMinus = document.getElementById('phone-minus');

phoneMinus.addEventListener('click', function(){
  cartPhone("#phone-quantity", 'phone-price', -1, phonePriceNumber);
});

// phone case plus click event
var phoneCasePlus = document.getElementById('phone-case-plus');
phoneCasePlus.addEventListener('click', function(){
  cartPhone('#phone-case-quantity', 'phone-case-price', 1, phoneCasePriceNumber );
});

// phone case minus click eveny
var phoneCaseMinus = document.getElementById('phone-case-minus');
phoneCaseMinus.addEventListener('click', function(){
  cartPhone('#phone-case-quantity', 'phone-case-price', -1, phoneCasePriceNumber);
})

// function for adding or removing click and updating price
function cartPhone(id, priceid, quantityvalue, productpricenumber){
  let productQuantity = document.querySelector(id);
  let value = parseFloat(productQuantity.getAttribute('value'));
  
  value = value + quantityvalue;
  productQuantity.setAttribute('value', value);
  
  let newprice = productpricenumber * value;
  document.getElementById(priceid).innerText = newprice;

  //update subtotal

  var subtotal = document.getElementById('subtotal').innerText;
var subtotalNumber = parseFloat(subtotal);
subtotalNumber = subtotalNumber + productpricenumber * quantityvalue;
document.getElementById('subtotal').innerText = subtotalNumber;
  
// update tax:
var tax = document.getElementById('tax').innerText;
var taxNumber = parseFloat(tax);
taxNumber = subtotalNumber *15/100;
document.getElementById('tax').innerText = taxNumber;

// show total with taxNumber
var total = document.getElementById('total').innerText;
var totalNumber = parseFloat(total);
totalNumber = subtotalNumber+taxNumber;
document.getElementById('total').innerText = totalNumber;

}