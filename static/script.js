function highlightElement(element) {
    element.classList.add('highlight');
  
    setTimeout(() => {
      element.classList.remove('highlight');
    }, 2000);
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
    var key = document.getElementById("key_input").value;
    var value = document.getElementById("value_input").value;

    setCookie(key, value, 365);
});

document.getElementById("get_button").addEventListener("click", function() {
    value_input = document.getElementById("value_input");
    highlightElement(value_input);

    var key = document.getElementById("key_input").value;
    var result = getCookie(key);

    value_input.value = result;
    // alert(`Get ${key}: ${result}`);
})
document.getElementById("add_button").addEventListener("click", function(event) {
    event.preventDefault();
    const key = document.getElementById("key_input").value;
    const value = document.getElementById("value_input").value;

    setCookie(key, value, 365);
    // alert(`Set ${key} to ${value}`);
});

document.getElementById("get_button").addEventListener("click", function(event) {
    event.preventDefault();
    const key = document.getElementById("key_input").value;
    result = getCookie(key)
    console.log(`Get ${key}: ${result}`); // alert(result);
    document.getElementById("value_input").value = getCookie(key);
    // alert(`Get ${key}: ${document.getElementById("value_input").value}`);
});

