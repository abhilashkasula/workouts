const fs = require('fs');

const atheleteId = process.env.ATHELETE_ID;
const url = process.env.LIVEZY_URL;

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
const body = `{"atheleteID":"${atheleteId}","isActive":true,"date":"${today}","ID":"${atheleteId}"}`;

fetch(url, {method: 'POST', body, headers: { 'content-type': 'application/json'}}).then(res => res.json()).then((data) => {
    const info = data.data.currentWeekModules[today][0]
    info.date = today;
    fs.writeFileSync('data.json', JSON.stringify(info));
})