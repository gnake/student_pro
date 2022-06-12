function addStu() {
    if(document.getElementById("stu").style.display === "block") {
        document.getElementById("StuAddBlock").style.display = "block";
        document.getElementById("totalbg").style.display = "block";
    }
    if(document.getElementById("tea").style.display === "block") {
        document.getElementById("TeaAddBlock").style.display = "block";
        document.getElementById("totalbg").style.display = "block";
    }
    if(document.getElementById("cou").style.display === "block") {
        document.getElementById("CouAddBlock").style.display = "block";
        document.getElementById("totalbg").style.display = "block";
    }
}
//学生
function StuSubmit() {
    var data = {};
    data.sno = document.getElementById("stuSno1").value;
    data.sname = document.getElementById("stuSname1").value;
    var sexSelect = document.getElementById("stuSsex1");
    var sexIndex = sexSelect.selectedIndex;
    data.ssex = sexSelect.options[sexIndex].value;
    data.sclass = document.getElementById("stuSclass1").value;
    data.sgrade = document.getElementById("stuSgrade1").value;
    data.scollege = document.getElementById("stuScollege1").value;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/studentController/addStudent";

    $.ajax(
        {
            type: 'post',
            url: url,
            data: data,
            success: function (data) {
                if(data === 'error') {
                    alert("添加失败");
                } else if (data === "success") {
                    alert("添加成功");
                    submit();
                } else if(data === "isExist") {
                    alert("学号重复,添加失败");
                }
            },
            error: function (data) {
                alert("异常情况");
            }
        }
    )
}
function submit() {
    // 关闭新增框架
    document.getElementById('StuAddBlock').style.display = 'none';
    document.getElementById('totalbg').style.display = 'none';

    var Itable = document.getElementById("stuT");
    var sno = document.getElementById("stuSno1").value;
    var sname = document.getElementById("stuSname1").value;
    var sexSelect = document.getElementById("stuSsex1");
    var sexIndex = sexSelect.selectedIndex;
    var ssex = sexSelect.options[sexIndex].value;
    var sclass = document.getElementById("stuSclass1").value;
    var sgrade = document.getElementById("stuSgrade1").value;
    var scollege = document.getElementById("stuScollege1").value;
    var rows = Itable.rows.length;

    // alert(rows);

    var iTr = document.createElement('tr');

    if(rows % 2 !== 0) {
        iTr.style.background = "#fff";
    } else {
        iTr.style.background = "#F5FAFA";
    }

    Itable.appendChild(iTr);

    var iTd1 = document.createElement("td");
    iTd1.className = 'col';
    iTd1.appendChild(document.createTextNode(rows));

    var iTd2 = document.createElement("td");
    iTd2.className = 'col';
    iTd2.appendChild(document.createTextNode(sno));

    var iTd3 = document.createElement("td");
    iTd3.className = 'col';
    iTd3.appendChild(document.createTextNode(sname));

    var iTd4 = document.createElement("td");
    iTd4.className = 'col';
    iTd4.appendChild(document.createTextNode(ssex));

    var iTd5 = document.createElement("td");
    iTd5.className = 'col';
    iTd5.appendChild(document.createTextNode(sclass));

    var iTd6 = document.createElement("td");
    iTd6.className = 'col';
    iTd6.appendChild(document.createTextNode(sgrade))

    var iTd7 = document.createElement("td");
    iTd7.className = 'col';
    iTd7.appendChild(document.createTextNode(scollege));

    var iTd8 = document.createElement("td");
    iTd8.className = 'col';
    var add = document.createElement("input");
    add.id = "ExaStu";
    add.className = "exam";
    add.setAttribute("type","button");
    add.setAttribute("value","查看");
    add.setAttribute("onclick","examineStu(this)");
    var del = document.createElement("input");
    del.id = "DelStu";
    del.className = "del";
    del.setAttribute("type","button");
    del.setAttribute("value","删除");
    del.setAttribute("onclick","deleteStu(this)");
    var upd = document.createElement("input");
    upd.id = "UpdStu";
    upd.className = "upd";
    upd.setAttribute("type","button");
    upd.setAttribute("value","修改");
    upd.setAttribute("onclick","updateStu(this)");
    iTd8.appendChild(add);
    iTd8.appendChild(del);
    iTd8.appendChild(upd);

    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);
    iTr.appendChild(iTd6);
    iTr.appendChild(iTd7);
    iTr.appendChild(iTd8);

    // 将新增框架中的输入框值初始化
    document.getElementById('stuSno1').value = null;
    document.getElementById('stuSname1').value = null;
    document.getElementById('stuSsex1').value = null;
    document.getElementById('stuSclass1').value = null;
    document.getElementById('stuSgrade1').value = null;
    document.getElementById('stuScollege1').value = null;

    range();

    var pageNum = document.getElementById("pageNum").innerText;
    pageNum = parseInt(pageNum);
    for(var i = pageNum * 6 + 1;i < rows;i++) {
        Itable.rows[i].style.display = 'none';
    }
}
function StuAddCancel() {
    document.getElementById("StuAddBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}

//老师
function TeaSubmit() {
    var data = {};
    data.tno = document.getElementById("teaTno1").value;
    data.tname = document.getElementById("teaTname1").value;
    var sexSelect2 = document.getElementById("teaTsex1");
    var sexIndex2 = sexSelect2.selectedIndex;
    data.tsex = sexSelect2.options[sexIndex2].value;
    data.ttitle = document.getElementById("teaTtitle1").value;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/teacherController/addTeacher";

    $.ajax(
        {
            type: 'post',
            url: url,
            data: data,
            success: function (data) {
                if(data === 'error') {
                    alert("添加失败");
                } else if (data === "success") {
                    alert("添加成功");
                    submitT();
                } else if(data === "isExist") {
                    alert("学号重复,添加失败");
                }
            },
            error: function (data) {
                alert("异常情况");
            }
        }
    )
}
function submitT() {
    document.getElementById("TeaAddBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";

    var iTable = document.getElementById("teaT");
    var rows = iTable.rows.length;

    var tno = document.getElementById("teaTno1").value;
    var tname = document.getElementById("teaTname1").value;
    var tsex = document.getElementById("teaTsex1").value;
    var ttitle = document.getElementById("teaTtitle1").value;

    var iTr = document.createElement("tr");
    if(rows % 2 !== 0) {
        iTr.style.background = "#fff";
    } else {
        iTr.style.background = "#F5FAFA";
    }
    iTable.appendChild(iTr);

    var iTd1 = document.createElement("td");
    iTd1.className = "col";
    iTd1.appendChild(document.createTextNode(rows));
    var iTd2 = document.createElement("td");
    iTd2.className = "col";
    iTd2.appendChild(document.createTextNode(tno));
    var iTd3 = document.createElement("td");
    iTd3.className = "col";
    iTd3.appendChild(document.createTextNode(tname));
    var iTd4 = document.createElement("td");
    iTd4.className = "col";
    iTd4.appendChild(document.createTextNode(tsex));
    var iTd5 = document.createElement("td");
    iTd5.className = "col";
    iTd5.appendChild(document.createTextNode(ttitle));
    var iTd6 = document.createElement("td");
    iTd6.className = 'col';
    var add = document.createElement("input");
    add.id = "ExaTea";
    add.className = "exam";
    add.setAttribute("type","button");
    add.setAttribute("value","查看");
    add.setAttribute("onclick","examineTea(this)");
    var del = document.createElement("input");
    del.id = "DelTea";
    del.className = "del";
    del.setAttribute("type","button");
    del.setAttribute("value","删除");
    del.setAttribute("onclick","deleteTea(this)");
    var upd = document.createElement("input");
    upd.id = "UpdTea";
    upd.className = "upd";
    upd.setAttribute("type","button");
    upd.setAttribute("value","修改");
    upd.setAttribute("onclick","updateTea(this)");
    iTd6.appendChild(add);
    iTd6.appendChild(del);
    iTd6.appendChild(upd);

    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);
    iTr.appendChild(iTd6);

    document.getElementById("teaTno1").value = null;
    document.getElementById("teaTname1").value = null;
    document.getElementById("teaTsex1").value = null;
    document.getElementById("teaTtitle1").value = null;

    range();

    var pageNum2 = document.getElementById("pageNum2").innerText;
    pageNum2 = parseInt(pageNum2);
    for(var i = pageNum2 * 6 + 1;i < rows;i++) {
        iTable.rows[i].style.display = 'none';
    }
}
function TeaAddCancel() {
    document.getElementById("TeaAddBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}

//课程
function CouSubmit() {
    var data = {};
    data.cno = document.getElementById("couCno1").value;
    data.cname = document.getElementById("couCname1").value;
    data.ctime = document.getElementById("couCtime1").value;
    data.ccredit = document.getElementById("couCcredit1").value;
    data.tno = document.getElementById("couCtno1").value;

    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol + "//" + host + "/courseController/addCourse";

    $.ajax(
        {
            type: 'post',
            url: url,
            data: data,
            success: function (data) {
                if(data === 'error') {
                    alert("添加失败");
                } else if (data === "success") {
                    alert("添加成功");
                    submitC();
                } else if(data === "isExist") {
                    alert("学号重复,添加失败");
                }
            },
            error: function (data) {
                alert("异常情况");
            }
        }
    )
}
function submitC() {
    document.getElementById("CouAddBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";

    var iTable = document.getElementById("couT");
    var rows = iTable.rows.length;

    var cno = document.getElementById("couCno1").value;
    var cname = document.getElementById("couCname1").value;
    var ctime = document.getElementById("couCtime1").value;
    var ccredit = document.getElementById("couCcredit1").value;
    var tno = document.getElementById("couCtno1").value;

    var iTr = document.createElement("tr");
    if(rows % 2 !== 0) {
        iTr.style.background = "#fff";
    } else {
        iTr.style.background = "#F5FAFA";
    }
    iTable.appendChild(iTr);

    var iTd1 = document.createElement("td");
    iTd1.className = "col";
    iTd1.appendChild(document.createTextNode(rows));
    var iTd2 = document.createElement("td");
    iTd2.className = "col";
    iTd2.appendChild(document.createTextNode(cno));
    var iTd3 = document.createElement("td");
    iTd3.className = "col";
    iTd3.appendChild(document.createTextNode(cname));
    var iTd4 = document.createElement("td");
    iTd4.className = "col";
    iTd4.appendChild(document.createTextNode(ctime));
    var iTd5 = document.createElement("td");
    iTd5.className = "col";
    iTd5.appendChild(document.createTextNode(ccredit));
    var iTd6 = document.createElement("td");
    iTd6.className = 'col';
    var add = document.createElement("input");
    add.id = "ExaCou";
    add.className = "exam";
    add.setAttribute("type","button");
    add.setAttribute("value","查看");
    add.setAttribute("onclick","examineCou(this)");
    var del = document.createElement("input");
    del.id = "DelCou";
    del.className = "del";
    del.setAttribute("type","button");
    del.setAttribute("value","删除");
    del.setAttribute("onclick","deleteCou(this)");
    var upd = document.createElement("input");
    upd.id = "UpdCou";
    upd.className = "upd";
    upd.setAttribute("type","button");
    upd.setAttribute("value","修改");
    upd.setAttribute("onclick","updateCou(this)");
    iTd6.appendChild(add);
    iTd6.appendChild(del);
    iTd6.appendChild(upd);

    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);
    iTr.appendChild(iTd6);

    document.getElementById("couCtno1").value = null;
    document.getElementById("couCname1").value = null;
    document.getElementById("couCtime1").value = null;
    document.getElementById("couCcredit1").value = null;
    document.getElementById("couCtno1").value = null;

    range();

    var pageNum3 = document.getElementById("pageNum3").innerText;
    pageNum3 = parseInt(pageNum3);
    for(var i = pageNum3 * 6 + 1;i < rows;i++) {
        iTable.rows[i].style.display = 'none';
    }
}
function CouAddCancel() {
    document.getElementById("CouAddBlock").style.display = "none";
    document.getElementById("totalbg").style.display = "none";
}