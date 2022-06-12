//分页效果实现
//上一页
function previous() {
    //得到当前学生表格
    if(document.getElementById("stu").style.display === "block") {
        var table = document.getElementById("stuT");
        var pageNum = document.getElementById("pageNum").innerText;
        pageNum = parseInt(pageNum);
        if (pageNum === 1) {
            alert('当前为第一页，无法向前翻页')
        }
        if (pageNum > 1) {
            document.getElementById("pageNum").innerText = pageNum - 1;
            for (var i = (pageNum - 2) * 6 + 1; i < (pageNum - 1) * 6 + 1; i++) {
                table.rows[i].style.display = 'table-row';
            }
            for (var i = (pageNum - 1) * 6 + 1; i < pageNum * 6 + 1; i++) {
                table.rows[i].style.display = 'none';
            }
        }
    }

    //得到当前老师表格
    if(document.getElementById("tea").style.display === "block") {
        var table2 = document.getElementById("teaT");
        var pageNum2 = document.getElementById("pageNum2").innerText;
        pageNum2 = parseInt(pageNum2);
        if (pageNum2 === 1) {
            alert('当前为第一页，无法向前翻页')
        }
        if (pageNum2 > 1) {
            document.getElementById("pageNum2").innerText = pageNum2 - 1;
            for (var i = (pageNum2 - 2) * 6 + 1; i < (pageNum2 - 1) * 6 + 1; i++) {
                table2.rows[i].style.display = 'table-row';
            }
            for (var i = (pageNum2 - 1) * 6 + 1; i < pageNum2 * 6 + 1; i++) {
                table2.rows[i].style.display = 'none';
            }
        }
    }

    //得到当前课程表格
    if(document.getElementById("cou").style.display === "block") {
        var table3 = document.getElementById("couT");
        var pageNum3 = document.getElementById("pageNum3").innerText;
        pageNum3 = parseInt(pageNum3);
        if (pageNum3 === 1) {
            alert('当前为第一页，无法向前翻页')
        }
        if (pageNum3 > 1) {
            document.getElementById("pageNum3").innerText = pageNum3 - 1;
            for (var i = (pageNum3 - 2) * 6 + 1; i < (pageNum3 - 1) * 6 + 1; i++) {
                table3.rows[i].style.display = 'table-row';
            }
            for (var i = (pageNum3 - 1) * 6 + 1; i < pageNum3 * 6 + 1; i++) {
                table3.rows[i].style.display = 'none';
            }
        }
    }
}
//下一页
function next() {
    if(document.getElementById("stu").style.display === "block") {
        var table = document.getElementById("stuT");
        var pageSum = Math.ceil((table.rows.length - 1) / 6);
        var pageNum = document.getElementById("pageNum").innerText;
        pageNum = parseInt(pageNum);
        if (pageNum >= pageSum) {
            alert("当前为最后一页，无法向后翻页")
        } else {
            document.getElementById("pageNum").innerText = pageNum + 1;
            for (var i = (pageNum - 1) * 6 + 1; i < pageNum * 6 + 1; i++) {
                table.rows[i].style.display = 'none';
            }
            for (var i = pageNum * 6 + 1; i < (pageNum + 1) * 6 + 1; i++) {
                table.rows[i].style.display = 'table-row';
            }
        }
    }

    if(document.getElementById("tea").style.display === "block") {
        var table2 = document.getElementById("teaT");
        var pageSum2 = Math.ceil((table2.rows.length - 1) / 6);
        var pageNum2 = document.getElementById("pageNum2").innerText;
        pageNum2 = parseInt(pageNum2);
        if (pageNum2 >= pageSum2) {
            alert("当前为最后一页，无法向后翻页")
        } else {
            document.getElementById("pageNum2").innerText = pageNum2 + 1;
            for (var i = (pageNum2 - 1) * 6 + 1; i < pageNum2 * 6 + 1; i++) {
                table2.rows[i].style.display = 'none';
            }
            for (var i = pageNum2 * 6 + 1; i < (pageNum2 + 1) * 6 + 1; i++) {
                table2.rows[i].style.display = 'table-row';
            }
        }
    }

    if(document.getElementById("cou").style.display === "block") {
        var table3 = document.getElementById("couT");
        var pageSum3 = Math.ceil((table3.rows.length - 1) / 6);
        var pageNum3 = document.getElementById("pageNum3").innerText;
        pageNum3 = parseInt(pageNum3);
        if (pageNum3 >= pageSum3) {
            alert("当前为最后一页，无法向后翻页")
        } else {
            document.getElementById("pageNum3").innerText = pageNum3 + 1;
            for (var i = (pageNum3 - 1) * 6 + 1; i < pageNum3 * 6 + 1; i++) {
                table3.rows[i].style.display = 'none';
            }
            for (var i = pageNum3 * 6 + 1; i < (pageNum3 + 1) * 6 + 1; i++) {
                table3.rows[i].style.display = 'table-row';
            }
        }
    }
}