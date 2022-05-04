const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response) => {
    console.log('Se extrajo correctamente el precio de bitcoin');
    let bitcoinData = '';
    
    var items = [];
    for (key in response.data.bpi) {
        items.push(response.data.bpi[key])
    }

    console.log(items)

    items.forEach(row => {
        bitcoinData += `${row['code']}, ${row['symbol']}, ${row['rate']}, ${row['description']}, ${row['rate_float']}\n`;
    });

    return fs.writeFile('bitcoinPrice.txt', bitcoinData);
})
.then(() => {
    console.log('Se guardo el precio del bitcoin en bitcoinPrice.csv');
})