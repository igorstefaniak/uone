window.addEventListener('offline', (e) => {
    console.log("The network connection has been lost.");
});

window.onoffline = (e) => {
  console.log("The network connection has been lost.");
};