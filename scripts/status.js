window.addEventListener('offline', (e) => {
    console.log("🔴 Rozłączono z internetem");
});

window.addEventListener('online', (e) => {
    console.log("🟢 Połączenie przywrócone");
});