let root = document.documentElement;
const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const email = document.querySelector('#email');
// const footerLocalCurrency = document.querySelector('#local-currency');
// const footerCity = document.querySelector('.footer__city');
// const ipEndpoint = `https://api.ipify.org?format=json`;
// const currencyEndpoint = `http://ip-api.com/json/`;
// const bitcoinPriceEndpoint = `https://api.coindesk.com/v1/bpi/currentprice/`;
// const browserLocale = navigator.language;

dark.addEventListener('click', function() {
    root.style.setProperty('--darkBg', 'hsl(200, 7.0%, 8.8%)');
    root.style.setProperty('--lightText', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--themeSwitchBg', 'hsl(197, 6.8%, 13.6%)');
});

light.addEventListener('click', function() {
    root.style.setProperty('--darkBg', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--lightText', 'hsl(0, 0%, 0%)');
    root.style.setProperty('--themeSwitchBg', 'hsl(209, 13.3%, 95.3%)');
});

email.addEventListener('click', (event) => {
    email.href = 'mailto:saurav.erahk@gmail.com',
    email.textContent = 'saurav.erahk@gmail.com';
    email.classList.remove('blur');
});

// async function getBitcoinPrice(currency) {
//     const bitcoinPrice = await fetch(`${bitcoinPriceEndpoint}${currency}.json`);
//     const bitcoinPriceData = await bitcoinPrice.json();
//     const toLocal = await bitcoinPriceData.bpi.INR.rate_float;
//     const BTCtoLocal = (new Intl.NumberFormat(`${browserLocale}`, { style: 'currency', currency: `${currency}`, maximumSignificantDigits: 10  }).format(toLocal));
//     footerLocalCurrency.innerText = BTCtoLocal;
// }


// async function getCurrency(ipData) {
//     const currentCurrency = await fetch(`${currencyEndpoint}${ipData}?fields=currency,city`);
//     const currencyData = await currentCurrency.json();
//     console.log(currencyData.currency,currencyData.city);
//     getBitcoinPrice(currencyData.currency);
//     footerCity.innerText = currencyData.city;
// }

// async function getIP() {
//     const currentIp = await fetch(ipEndpoint);
//     const ipData = await currentIp.json();
//     console.log(ipData.ip);
//     getCurrency(ipData.ip);
// }

// getIP();