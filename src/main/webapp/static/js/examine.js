//admin
// 查看学生
function examineStu(obj) {

    //打开查看框架
    document.getElementById("examStuBlock").style.display = "block";
    document.getElementById("totalbg").style.display = "block";

    //查看按钮父节点是td，td父节点是当前行
    var iTr = obj.parentNode.parentNode;

    var iTds = iTr.getElementsByTagName("td");

    //将新框架中的输入框中内容设为当前行对应的内容
    document.getElementById("stuSno2").value = iTds[1].innerText;
    document.getElementById("stuSname2").value = iTds[2].innerText;
    document.getElementById("stuSsex2").value = iTds[3].innerText;
    document.getElementById("stuSclass2").value = iTds[4].innerText;
    document.getElementById("stuSgrade2").value = iTds[5].innerText;
    document.getElementById("stuScollege2").value = iTds[6].innerText;
}
function examStuCancel() {
    //关闭查看框架
    document.getElementById("examStuBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}
//老师
function examineTea(obj) {

    //打开查看框架
    document.getElementById("examTeaBlock").style.display = "block";
    document.getElementById("totalbg").style.display = "block";

    //查看按钮父节点是td，td父节点是当前行
    var iTr = obj.parentNode.parentNode;

    var iTds = iTr.getElementsByTagName("td");

    //将新框架中的输入框中内容设为当前行对应的内容
    document.getElementById("teaTno2").value = iTds[1].innerText;
    document.getElementById("teaTname2").value = iTds[2].innerText;
    document.getElementById("teaTsex2").value = iTds[3].innerText;
    document.getElementById("teaTtitle2").value = iTds[4].innerText;

}
function examTeaCancel() {
    //关闭查看框架
    document.getElementById("examTeaBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}
//老师
function examineCou(obj) {

    //打开查看框架
    document.getElementById("examCouBlock").style.display = "block";
    document.getElementById("totalbg").style.display = "block";

    //查看按钮父节点是td，td父节点是当前行
    var iTr = obj.parentNode.parentNode;

    var iTds = iTr.getElementsByTagName("td");

    //将新框架中的输入框中内容设为当前行对应的内容
    document.getElementById("couCno2").value = iTds[1].innerText;
    document.getElementById("couCname2").value = iTds[2].innerText;
    document.getElementById("couCtime2").value = iTds[3].innerText;
    document.getElementById("couCcredit2").value = iTds[4].innerText;

}
function examCouCancel() {
    //关闭查看框架
    document.getElementById("examCouBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}