//删除
function deleteStu(obj) {

    var  iTr = obj.parentNode.parentNode;
    var iTds = iTr.getElementsByTagName("td");
    var sno = iTds[1].innerText;

    var protopol = window.location.protocol;
    var host = window.location.host;
    var url = protopol + "//" + host + "/studentController/deleteStudent";

    if(confirm("您确定要删除学号为 " + sno + " 的学生吗？")) {
        $.ajax(
            {
                type: 'post',
                url: url,
                data: {sno: sno},
                success: function (data) {
                    if(data === "success") {
                        alert("删除成功")
                        iTr.remove();
                        //排序
                        range();
                    } else if (data === "error") {
                        alert("删除失败");
                    }
                },
                error: function (data) {
                    alert("异常情况---" + data);
                }
            }
        );
    }
}
