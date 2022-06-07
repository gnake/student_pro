//分页效果实现
//上一页
function previous() {
    //得到当前学生表格
    var table = document.getElementById("stuT");
    var pageNum = document.getElementById("pageNum").innerText;
    pageNum = parseInt(pageNum);
    if(pageNum === 1) {
        alert('当前为第一页，无法向前翻页')
    }
    if(pageNum > 1) {
        document.getElementById("pageNum").innerText = pageNum - 1;
        for (var i = (pageNum - 2) * 6 + 1; i < (pageNum - 1) * 6 + 1;i++) {
            table.rows[i].style.display = 'table-row';
        }
        for(var i = (pageNum - 1) * 6 + 1; i< pageNum * 6 + 1;i++) {
            table.rows[i].style.display = 'none';
        }
    }

}
//下一页
function next() {
    var table = document.getElementById("stuT");
    var pageSum = Math.ceil((table.rows.length - 1) / 6 );
    var pageNum = document.getElementById("pageNum").innerText;
    pageNum = parseInt(pageNum);
    if(pageNum >= pageSum) {
        alert("当前为最后一页，无法向后翻页")
    } else {
        document.getElementById("pageNum").innerText = pageNum + 1;
        for (var i = (pageNum - 1) * 6 + 1;i < pageNum * 6 + 1;i++) {
            table.rows[i].style.display = 'none';
        }
        for (var i = pageNum * 6 + 1; i< (pageNum + 1) * 6 + 1;i++) {
            table.rows[i].style.display = 'table-row';
        }
    }
}