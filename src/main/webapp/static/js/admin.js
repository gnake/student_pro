//学生管理
function man_stu() {
    document.getElementById("tea").style.display = "none";
    document.getElementById("cou").style.display = "none";
    document.getElementById("final2").style.display = "none";
    document.getElementById("final3").style.display = "none";
    document.getElementById("addb").style.display = "block";
    document.getElementById("stu").style.display = "block";
    document.getElementById("final").style.display = "block";
}


//老师管理
function man_tea() {
    document.getElementById("stu").style.display = "none";
    document.getElementById("cou").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("final3").style.display = "none";
    document.getElementById("final2").style.display = "block";
    document.getElementById("addb").style.display = "block";
    document.getElementById("tea").style.display = "block";
}
//课程管理
function man_cou() {
    document.getElementById("stu").style.display = "none";
    document.getElementById("tea").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("final2").style.display = "none";
    document.getElementById("final3").style.display = "block";
    document.getElementById("addb").style.display = "block";
    document.getElementById("cou").style.display = "block";
}
