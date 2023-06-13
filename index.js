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
const siteUrl = 'https://camo.githubusercontent.com/d5c17a0275ce03432bb1829b5140dda056e5fe2d2aebf25db3a81f9181bb62cd/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d6a75616e6761726369613036266c6162656c3d50722532306f25323066253230692532306c25323065253230253230253230766965777326636f6c6f723d303066663030267374796c653d666c6174';
const numLoads = 1000;
const delayBetweenLoadsInMs = 25;

loadSite(siteUrl, numLoads, delayBetweenLoadsInMs);