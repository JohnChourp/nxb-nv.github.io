function darkModeSave() {
    // This code is only used to remember theme selection between page loads
    const themeSwitch = document.querySelector('.theme-switch');
    themeSwitch.checked = localStorage.getItem('switchedTheme') === 'true';
    document.body.style.backgroundColor = localStorage.getItem("bgColor");
    document.body.style.color = localStorage.getItem("textColor");
    themeSwitch.addEventListener('change', function(e) {
        if (e.currentTarget.checked === true) {
            // Add item to localstorage
            localStorage.setItem('switchedTheme', 'true');
            localStorage.setItem("bgColor","#404040");
            localStorage.setItem("textColor","white");
            location.reload();
        } else {
            // Remove item if theme is switched back to normal
            localStorage.removeItem('switchedTheme');
            localStorage.setItem("bgColor","white");
            localStorage.setItem("textColor","black");
            location.reload();
       }
    });
}