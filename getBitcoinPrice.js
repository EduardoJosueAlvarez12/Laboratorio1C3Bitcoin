const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((response) => {
    console.log('Se extrajo correctamente el precio de bitcoin');
    let bitcoinData = '';
    let data = `[${[response.data.bpi]}]`
    console.log(data);
    console.log(response.data.bpi)
    response.data.bpi.forEach(row => {
        bitcoinData += `${row.USD['code']}, ${row['symbol']}, ${row['rate']}, ${row['description']}, ${row['rate_float']}\n`;
    });

    return fs.writeFile('bitcoinPrice.csv');
})
.then(() => {
    console.log('Se guardo el precio del bitcoin en bitcoinPrice.csv');
})