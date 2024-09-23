const donateButton= document.getElementById('donate button');
donateButton.addEventListener("click", function(){

const totalBalance= parseFloat(document.getElementById('total balance').value);
const donationAmount= parseFloat(document.getElementById('donation amount').value);
const balance= totalBalance-donationAmount;

const totalDonation= parseFloat(document.getElementById('total donation').value);
const totalDonationAmount=totalDonation+donationAmount


});


const historyButton=documentCC