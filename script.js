const change = () => {
    var img = document.getElementById("per");
    var name = document.getElementById("name").value;
    img.src = `https://joeschmoe.io/api/v1/random ${name}`
}