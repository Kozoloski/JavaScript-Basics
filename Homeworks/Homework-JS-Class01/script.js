var number_of_phones =30;
var phoneprice_without_tax = 119.95;
var phone_tax = 119.95 * 0.05;
var phoneprice_with_tax = phoneprice_without_tax + phone_tax;
var thirtyphonesprice = phoneprice_with_tax * number_of_phones;

console.log(`The price of thirty phones is $${thirtyphonesprice}`);