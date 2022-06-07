//查看个人信息
function MyInfo() {
    if(document.getElementById("MyInfo").onclick) {
        document.getElementById("sec").style.display = "none";
        document.getElementById("all_dec").style.display = "none";
        document.getElementById("updateMy").style.display = "none";
        document.getElementById("final").style.display = "none";
        document.getElementById("final2").style.display = "none";
        document.getElementById("info").style.display = "block";
    }
}
//选课与退选
function aboutCourse() {
    document.getElementById("info").style.display = "none";
    document.getElementById("all_dec").style.display = "none";
    document.getElementById("updateMy").style.display = "none";
    document.getElementById("final2").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("sec").style.display = "block";
}
//查看已选课程
function all_dec() {
    document.getElementById("info").style.display = "none";
    document.getElementById("sec").style.display = "none";
    document.getElementById("updateMy").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("final2").style.display = "block";
    document.getElementById("all_dec").style.display = "block";
    //处理刚选课程，无课程成绩
    chuli_start_Course();
}
//修改信息
function updateInfo() {
    document.getElementById("info").style.display = "none";
    document.getElementById("sec").style.display = "none";
    document.getElementById("all_dec").style.display = "none";
    document.getElementById("final").style.display = "none";
    document.getElementById("final2").style.display = "none";
    document.getElementById("updateMy").style.display = "block";
}
//选课
function selCourSe(obj) {
    var iTr = obj.parentNode.parentNode;
    iTds = iTr.getElementsByTagName("td");
    var data = {};
    data.cno = iTds[1].innerText;
    var cname = iTds[2].innerText;
    data.cname = cname;
    data.ctime = iTds[3].innerText;
    data.ccredit = iTds[4].innerText;
    data.tname = iTds[5].innerText;

    var info = document.getElementById("info");
    var infoTr = info.getElementsByTagName("tr");
    var infoTd = infoTr[1].getElementsByTagName("td");
    data.sno = infoTd[0].innerText;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/dectiveController/pickCourse";

    if(confirm("您要选择这门课程吗？")) {
        $.ajax(
            {
                type: 'post',
                url: url,
                data: data,
                success: function (data) {
                    if (data === "success") {
                        alert("选课成功");
                        select_Course_success(obj);
                    }
                    // alert(data);
                    if(data === "IsSelected") {
                        alert("这门" + cname +"课程已选过，不可重复选择");
                    }
                    if (data === "error") {
                        alert("选课失败");
                    }
                },
                error: function (data) {
                    alert("异常情况---" + data);
                }
            }
        );
    }
}
//选课成功前端页面处理
function select_Course_success(obj) {
    var curiTr = obj.parentNode.parentNode;
    var iTd = curiTr.getElementsByTagName("td");
    var cno = iTd[1].innerText;
    var cname = iTd[2].innerText;
    var ccredit = iTd[4].innerText;
    // alert(cno + " " + cname + " " + ccredit + ' ');

    var Mytable = document.getElementById("the_selected_course");
    var nums = Mytable.rows.length;
    var iTr = document.createElement("tr");

    var iTd1 = document.createElement("td");
    iTd1.appendChild(document.createTextNode(nums));
    var iTd2 = document.createElement("td");
    iTd2.appendChild(document.createTextNode(cno));
    var iTd3 = document.createElement("td");
    iTd3.appendChild(document.createTextNode(cname));
    var iTd4 = document.createElement("td");
    iTd4.appendChild(document.createTextNode(ccredit));
    var iTd5 =document.createElement("td");
    iTd5.appendChild(document.createTextNode(0));

    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);

    Mytable.appendChild(iTr);
    student_reRange();
}
//退选
function exitCourse(obj) {
    var iTr = obj.parentNode.parentNode;
    iTds = iTr.getElementsByTagName("td");
    var data = {};
    data.cno = iTds[1].innerText;
    var cname = iTds[2].innerText;
    data.cname = cname;
    data.ctime = iTds[3].innerText;
    data.ccredit = iTds[4].innerText;
    data.tname = iTds[5].innerText;

    var info = document.getElementById("info");
    var infoTr = info.getElementsByTagName("tr");
    var infoTd = infoTr[1].getElementsByTagName("td");
    data.sno = infoTd[0].innerText;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/dectiveController/exitSelectCourse";

    if(confirm("您确定要退选吗？")) {
        $.ajax(
            {
                type: 'post',
                url: url,
                data: data,
                success: function (data) {
                    if (data === 'success') {
                        alert("退选课程成功");
                        exit_success_course(obj);
                    }
                    if (data === 'error') {
                        alert("退选课程失败");
                    }
                },
                error: function (data) {
                    alert("异常情况" + data);
                }
            }
        );
    }
}
//退选成功后前端页面的移除
function exit_success_course(obj) {
    var iTr = obj.parentNode.parentNode;
    var iTds = iTr.getElementsByTagName('td');
    var curSno = iTds[1].innerText;

    var itable = document.getElementById("the_selected_course");
    var nums = itable.rows.length;
    var iTable_Tr = itable.getElementsByTagName('tr');
    for(var i = 1; i <= nums; i++) {
        var iTable_Td = iTable_Tr[i].getElementsByTagName('td');
        var sno = iTable_Td[1].innerText;
        if(sno === curSno) {
            iTable_Tr[i].remove();
            break;
        }
    }
    //排序
    student_reRange();
}
//处理刚选课程，无课程成绩
function chuli_start_Course() {
    var Itable = document.getElementById("the_selected_course");
    var nums = Itable.rows.length;
    var iTr = Itable.getElementsByTagName("tr");
    for(var i = 1;i <= nums;i++) {
        var iTds = iTr[i].getElementsByTagName("td");
        var score = iTds[4].innerText;
        // alert(parseInt(score));
        if(parseInt(score) === 0) {
            iTds[4].innerText = '还未学习';
        }
    }
}

//修改信息提交按钮
function updateInfo_submit() {
    var data = {};

    var info = document.getElementById("info");
    var infoTr = info.getElementsByTagName("tr");
    var infoTd = infoTr[1].getElementsByTagName("td");
    data.sno = infoTd[0].innerText;

    var sname = document.getElementById("sname").value;
    var spassword = document.getElementById("spassword").value;
    var ssex = document.getElementById("ssex").value;
    var sclass = document.getElementById("sclass").value;
    var sgrade = document.getElementById("sgrade").value;
    var scollege = document.getElementById("scollege").value;

    //判断前端页面修改信息的输入是否填写完整
    if(IsPerfect() === true) {
        data.sname = sname;
        data.spassword = spassword;
        data.ssex = ssex;
        data.sclass = sclass;
        data.sgrade = sgrade;
        data.scollege = scollege;

        var protocol = window.location.protocol;
        var host = window.location.host;
        var url = protocol + "//" + host + "/studentController/updateStudent";

        $.ajax(
            {
                type: 'post',
                url: url,
                data: data,
                success: function (data) {
                    if (data === 'success') {
                        alert("修改成功");
                        document.getElementById("sname").value = null;
                        document.getElementById("spassword").value = null;
                        document.getElementById("ssex").value = null;
                        document.getElementById("sclass").value = null;
                        document.getElementById("sgrade").value = null;
                        document.getElementById("scollege").value = null;
                    }
                    if (data === 'error') {
                        alert("修改失败");
                    }
                },
                error: function (data) {
                    alert('异常情况---' + data);
                },
            }
        );
    }
}

//判断前端页面修改信息的输入是否填写完整
function IsPerfect() {
    var sname = document.getElementById("sname").value;
    var spassword = document.getElementById("spassword").value;
    var ssex = document.getElementById("ssex").value;
    var sclass = document.getElementById("sclass").value;
    var sgrade = document.getElementById("sgrade").value;
    var scollege = document.getElementById("scollege").value;

    if(sname === '') {
        alert('姓名还未填写');
        return false;
    }
    if(spassword === '') {
        alert('密码还未填写');
        return false;
    }
    if(ssex === '') {
        alert('性别还未填写');
        return false;
    }
    if(sclass === '') {
        alert('班级还未填写');
        return false;
    }
    if(sgrade === '') {
        alert('年级还未填写');
        return false;
    }
    if(scollege === '') {
        alert('学院还未填写');
        return false;
    }
    return true;
}