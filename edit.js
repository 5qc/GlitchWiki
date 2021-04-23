document.getElementById("editable").contentEditable = true;

let name = document.getElementById("name")
let csrftoken = getCookie('csrftoken');

name.addEventListener("input", function() {
    let newName = name.textContent
    let data = { name: newName }

    fetch('change_name/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(data),
        credentials: 'same-origin',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success: ', data)
    })
    .catch((error) => {
        console.error('My Error: ', error)
    })
}, false);

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
