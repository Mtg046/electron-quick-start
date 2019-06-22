// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { setTimeout } = require('timers');

setTimeout(() => console.log('Timeout fired'), 1000);

// Uncomment the line below to cause the timeout to fire
// process.nextTick(() => {})
