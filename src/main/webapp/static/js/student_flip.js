//上一页
function previous() {
    if(document.getElementById('sec').style.display === 'block') {
        var iTable = document.getElementById('xuanke_tuixuan');
        var pageNum = document.getElementById('pageNum').innerText;
        pageNum = parseInt(pageNum);
        if(pageNum === 1) {
            alert('当前为第一页，无法向前翻页')
        } else {
            document.getElementById("pageNum").innerText = pageNum - 1;

            for(var i = (pageNum - 2) * 6 + 1;i < (pageNum - 1) * 6 + 1;i++) {
                iTable.rows[i].style.display = 'table-row';
            }
            for(var i = (pageNum - 1) * 6 + 1;i<pageNum * 6 + 1;i++){
                iTable.rows[i].style.display = 'none';
            }
        }
    }
    if(document.getElementById('all_dec').style.display === 'block') {
        var iTable2 = document.getElementById('the_selected_course');
        var pageNum2 = document.getElementById('pageNum2').innerText;
        pageNum2 = parseInt(pageNum2);
        if(pageNum2 === 1) {
            alert('当前为第一页，无法向前翻页')
        } else {
            document.getElementById("pageNum2").innerText = pageNum2 - 1;
            for(var i = (pageNum2 - 2) * 6 + 1;i < (pageNum2 - 1) * 6 + 1;i++) {
                iTable2.rows[i].style.display = 'table-row';
            }
            for(var i = (pageNum2 - 1) * 6 + 1;i<pageNum2 * 6 + 1;i++){
                iTable2.rows[i].style.display = 'none';
            }
        }
    }
}
// 下一页
function next() {
    if(document.getElementById('sec').style.display === 'block'){
        var iTable = document.getElementById('xuanke_tuixuan');
        var pageNum = document.getElementById('pageNum').innerText;
        pageNum = parseInt(pageNum);
        var pageSum = Math.ceil((iTable.rows.length - 1) / 6);
        if(pageNum >= pageSum) {
            alert("当前为最后一页，无法向后翻页");
        } else {
            document.getElementById("pageNum").innerText = pageNum + 1;
            for(var i = (pageNum - 1) * 6 + 1;i < pageNum * 6 + 1;i++) {
                iTable.rows[i].style.display = 'none';
            }

            for(var i = pageNum * 6 + 1 ; i < (pageNum + 1) * 6 + 1; i++) {
                iTable.rows[i].style.display = 'table-row';
            }
        }
    }
    if(document.getElementById('all_dec').style.display === 'block') {
        var iTable2 = document.getElementById('the_selected_course');
        var pageNum2 = document.getElementById('pageNum2').innerText;
        pageNum2 = parseInt(pageNum2);
        var pageSum2 = Math.ceil((iTable2.rows.length - 1) / 6);
        if(pageNum2 >= pageSum2) {
            alert("当前为最后一页，无法向后翻页");
        } else {
            document.getElementById("pageNum2").innerText = pageNum2 + 1;
            for(var i = (pageNum2 - 1) * 6 + 1;i < pageNum2 * 6 + 1;i++) {
                iTable2.rows[i].style.display = 'none';
            }

            for(var i = pageNum2 * 6 + 1;i < (pageNum2 + 1) * 6 + 1;i++) {
                iTable2.rows[i].style.display = 'table-row';
            }
        }
    }
}