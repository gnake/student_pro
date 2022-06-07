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

//查看中的取消按钮
function examStuCancel() {
    //关闭查看框架
    document.getElementById("examStuBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}
//admin
