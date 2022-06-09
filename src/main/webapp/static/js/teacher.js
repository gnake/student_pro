
//查看教师个人信息
function TeaInfo() {
    document.getElementById("resultInputBlock").style.display = "none";
    document.getElementById("updateMy").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("teainfo").style.display = "block";
}
//录入成绩
function resultInput() {
    document.getElementById("teainfo").style.display = "none";
    document.getElementById("updateMy").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("resultInputBlock").style.display = "block";


}
//修改信息
function updateTea() {
    document.getElementById("resultInputBlock").style.display = "none";
    document.getElementById("teainfo").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("updateMy").style.display = "block";

}

// //暂存
// function zancun(obj) {
//
// }

//提交
function tijiao(obj) {
    var iTr = obj.parentNode.parentNode;
    var iTds = iTr.getElementsByTagName("td");
    var cno = iTds[1].innerText;
    var cname = iTds[2].innerText;
    var sno = iTds[3].innerText;
    var sname = iTds[4].innerText;
    var sclass = iTds[5].innerText;
    var score = iTds[6].getElementsByTagName("input")[0].value;
    // alert(score)
    var iTable = document.getElementById("teainfoTable");
    var tno = iTable.getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerText;

    var data = {};
    data.cno = cno;
    data.cname =  cname;
    data.sno = sno;
    data.sname = sname;
    data.sclass = sclass;
    data.score = score;
    data.tno = tno;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/dectiveController/inputScore";

    if(confirm("确定要提交吗？")){
        $.ajax(
            {
                type: 'post',
                url: url,
                data: data,
                success: function (data) {
                    if(data === "success") {
                        alert("提交成功");
                        iTds[6].getElementsByTagName("input")[0].remove();
                        iTds[6].innerText = score;
                    }
                    if(data === "error") {
                        alert("提交失败");
                        iTds[6].getElementsByTagName("input")[0].value = null;
                    }
                },
                error: function (data) {
                    alert("异常情况--" + data);
                    iTds[6].getElementsByTagName("input")[0].value = null;
                },
            }
        )
    }

}