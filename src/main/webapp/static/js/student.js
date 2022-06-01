function MyInfo() {
    if(document.getElementById("MyInfo").onclick) {
        var te = document.createElement("p");
        var txt = document.createTextNode("我是html元素p");
        te.appendChild(txt);
        var con_r = document.getElementById("con_right");
        con_r.appendChild(te);
    }
}