//修改学生
function updateStu(obj) {
    //打开修改框架
    document.getElementById("updateStuBlock").style.display = "block";
    document.getElementById("totalbg").style.display = "block";

    //获取当前行
    var iTr = obj.parentNode.parentNode;

    //获取当前行中的所有单元格
    iTds = iTr.getElementsByTagName("td");

    //将修改框架中的内容设为当前行的内容
    document.getElementById("stuSno3").value = iTds[1].innerText;
    document.getElementById("stuSname3").value = iTds[2].innerText;
    var sex = iTds[3].innerText;
    var selector = document.getElementById("stuSsex3");
    for (var i = 0; i < selector.options.length; i++) {
        if (selector.options[i].value === sex) {
            selector.options[i].selected = true;
            break;
        }
    }

    document.getElementById("stuSclass3").value = iTds[4].innerText;
    document.getElementById("stuSgrade3").value = iTds[5].innerText;
    document.getElementById("stuScollege3").value = iTds[6].innerText;
}
//保存按钮
function perserveStu() {
    var data = {};
    var sno = document.getElementById("stuSno3").value;
    var sname = document.getElementById("stuSname3").value;
    var sexSelect = document.getElementById("stuSsex3");
    var sexIndex = sexSelect.selectedIndex;
    var ssex = sexSelect.options[sexIndex].value;
    var sclass = document.getElementById("stuSclass3").value;
    var sgrade = document.getElementById("stuSgrade3").value;
    var scollege = document.getElementById("stuScollege3").value;

    data.sno = sno;
    data.sname = sname;
    data.ssex = ssex;
    data.sclass = sclass;
    data.sgrade = sgrade;
    data.scollege = scollege;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/studentController/updateStudent";

    if(confirm("确定更新吗？")) {
        $.ajax(
            {
                type: 'post',
                url: url,
                data: data,
                success: function (data) {
                    if(data === "success") {
                        alert("更新成功");
                        iTds[1].innerText = sno;
                        iTds[2].innerText = sname;
                        iTds[3].innerText = ssex;
                        iTds[4].innerText = sclass;
                        iTds[5].innerText = sgrade;
                        iTds[6].innerText = scollege;

                        //关闭框架
                        document.getElementById("updateStuBlock").style.display = "none";
                        document.getElementById("totalbg").style.display = "none";
                    } else if(data === "error") {
                        alert("更新失败");
                    }
                },
                error: function (data) {
                    alert("异常情况---" + data);
                }
            }
        );
    }
}
//修改中的取消按钮
function updateStuCancel() {
    //关闭修改框架
    document.getElementById("updateStuBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}
//修改老师
function updateTea(obj) {
    //打开修改框架
    document.getElementById("updateTeaBlock").style.display = "block";
    document.getElementById("totalbg").style.display = "block";

    //获取当前行
    var iTr = obj.parentNode.parentNode;

    //获取当前行中的所有单元格
    iTds = iTr.getElementsByTagName("td");

    //将修改框架中的内容设为当前行的内容
    document.getElementById("teaTno3").value = iTds[1].innerText;
    document.getElementById("teaTname3").value = iTds[2].innerText;
    var tsex = iTds[3].innerText;
    var selector = document.getElementById("teaTsex3");
    for (var i = 0; i < selector.options.length; i++) {
        if (selector.options[i].value === tsex) {
            selector.options[i].selected = true;
            break;
        }
    }

    document.getElementById("teaTtitle3").value = iTds[4].innerText;
}
function perserveTea() {
    var data = {};
    var tno = document.getElementById("teaTno3").value;
    var tname = document.getElementById("teaTname3").value;
    var sexSelect3 = document.getElementById("teaTsex3");
    var sexIndex3 = sexSelect3.selectedIndex;
    var tsex = sexSelect3.options[sexIndex3].value;
    var ttitle = document.getElementById("teaTtitle3").value;

    data.tno = tno;
    data.tname = tname;
    data.tsex = tsex;
    data.ttitle = ttitle;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/teacherController/updateTeacher";

    if(confirm("确定更新吗？")) {
        $.ajax(
            {
                type: 'post',
                url: url,
                data: data,
                success: function (data) {
                    if(data === "success") {
                        alert("更新成功");
                        iTds[1].innerText = tno;
                        iTds[2].innerText = tname;
                        iTds[3].innerText = tsex;
                        iTds[4].innerText = ttitle;

                        //关闭框架
                        document.getElementById("updateTeaBlock").style.display = "none";
                        document.getElementById("totalbg").style.display = "none";
                    } else if(data === "error") {
                        alert("更新失败");
                    }
                },
                error: function (data) {
                    alert("异常情况---" + data);
                }
            }
        );
    }
}
function updateTeaCancel() {
    //关闭修改框架
    document.getElementById("updateTeaBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}
//修改课程
function updateCou(obj) {
    //打开修改框架
    document.getElementById("updateCouBlock").style.display = "block";
    document.getElementById("totalbg").style.display = "block";

    //获取当前行
    var iTr = obj.parentNode.parentNode;

    //获取当前行中的所有单元格
    iTds = iTr.getElementsByTagName("td");

    //将修改框架中的内容设为当前行的内容
    document.getElementById("couCno3").value = iTds[1].innerText;
    document.getElementById("couCname3").value = iTds[2].innerText;
    document.getElementById("couCtime3").value = iTds[3].innerText;
    document.getElementById("couCcredit3").value = iTds[4].innerText;
}
function perserveCou() {
    var data = {};
    var cno = document.getElementById("couCno3").value;
    var cname = document.getElementById("couCname3").value;
    var ctime = document.getElementById("couCtime3").value;
    var ccredit = document.getElementById("couCcredit3").value;

    data.cno = cno;
    data.cname = cname;
    data.ctime = ctime;
    data.ccredit = ccredit;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/courseController/updateCourse";

    if(confirm("确定更新吗？")) {
        $.ajax(
            {
                type: 'post',
                url: url,
                data: data,
                success: function (data) {
                    if(data === "success") {
                        alert("更新成功");
                        iTds[1].innerText = cno;
                        iTds[2].innerText = cname;
                        iTds[3].innerText = ctime;
                        iTds[4].innerText = ccredit;
                        //关闭框架
                        document.getElementById("updateCouBlock").style.display = "none";
                        document.getElementById("totalbg").style.display = "none";
                    } else if(data === "error") {
                        alert("更新失败");
                    }
                },
                error: function (data) {
                    alert("异常情况---" + data);
                }
            }
        );
    }
}
function updateCouCancel() {
    //关闭修改框架
    document.getElementById("updateCouBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}