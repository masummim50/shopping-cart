const phonePlus = document.getElementById('phone-plus');
const phonePrice = document.getElementById('phone-price').innerText;
  let phonePriceNumber = parseFloat(phonePrice);
phonePlus.addEventListener('click', function(){
  let phoneQuantity = document.querySelector('#phone-quantity');
  let value = parseFloat(phoneQuantity.getAttribute('value'));
  value = value + 1;
  phoneQuantity.setAttribute('value', value);
  
  let newprice = phonePriceNumber * value;
  document.getElementById('phone-price').innerText = newprice;
})