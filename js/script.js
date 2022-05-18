document.getElementById("btn").onclick = function result(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("c").innerHTML = c
}