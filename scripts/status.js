window.addEventListener('offline', (e) => {
    console.log("🔴 Rozłączono z internetem");
});

window.addEventListener('online', (e) => {
    console.log("🟢 Połączenie przywrócone");
});

function getSelectedText() {
    var selectedText = '';

    // window.getSelection
    if (window.getSelection) {
        selectedText = window.getSelection();
    }
    // document.getSelection
    else if (document.getSelection) {
        selectedText = document.getSelection();
    }
    // document.selection
    else if (document.selection) {
        $(this).css("color", "#21fc6b").text("online");
        console.log;
    } else return;
    document.testform.selectedtext.value = selectedText;
}