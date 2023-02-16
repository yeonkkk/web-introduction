function getCheckBoxValue() {
    const query = 'input[name="movie"]:checked';
    const selectedEls = document.querySelectorAll(query);

    return selectedEls.length;
}


function alertTest() {
    var checkBoxCount = getCheckBoxValue();
    var username = document.getElementById("name");
    console.log(checkBoxCount);
    console.log(username);
    window.alert(username.value + "님, 저와 " + checkBoxCount + "개의 취향이 같으시네요!")
}

