function highlightElement(element) {
    const border = document.createElement('div');
    border.classList.add('border-animation');
    element.appendChild(border);

    // Удаляем границу после окончания анимации
    setTimeout(() => {
        element.removeChild(border);
    }, 1500);
}
  

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
    }
    return null;
}

document.getElementById("add_button").addEventListener("click", function() {
    const key = document.getElementById("key_input").value;
    const value = document.getElementById("value_input").value;

    setCookie(key, value, 365);
    this.blur();
});

document.getElementById("get_button").addEventListener("click", function() {
    const key = document.getElementById("key_input").value;
    result = getCookie(key);

    output = document.getElementById("value_input");
    output.value = result;

    highlightElement(output);
    this.blur();
});

