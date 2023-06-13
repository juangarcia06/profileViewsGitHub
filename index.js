const axios = require('axios');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadSite(url, numTimes, delayBetweenLoads) {
    const requests = [];

    for (let count = 1; count <= numTimes; count++) {
        requests.push(axios.get(url));
        console.log(`Loaded ${count} times.`);
        await delay(delayBetweenLoads);
    }

    console.log('All sites loaded successfully')
    process.exit();
}

// Usage
const siteUrl = 'https://example';
const numLoads = 999999999;
const delayBetweenLoadsInMs = 0;

loadSite(siteUrl, numLoads, delayBetweenLoadsInMs);