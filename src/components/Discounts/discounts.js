// const originalPrice = 100;
// const discount = 15;

function calculatePriceWithDiscount(price, discount) {
  const percentagePriceWithDiscount = 100 - discount;
  const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

  return priceWithDiscount;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById('InputPrice')
  const priceValue = inputPrice.value;
  
  const InputDiscount = document.getElementById('InputDiscount')
  const discountValue = InputDiscount.value;

  const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue)

  const resultPrice = document.getElementById('resultPrice')
  resultPrice.innerText = "Your Price with discount is $" + priceWithDiscount
}