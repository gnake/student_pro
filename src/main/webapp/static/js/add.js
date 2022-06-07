function addStu() {
    if(document.getElementById("stu").style.display === "block") {
        document.getElementById("StuAddBlock").style.display = "block";
        document.getElementById("totalbg").style.display = "block";
    }

}

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
    upd.id = "UpaStu";
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