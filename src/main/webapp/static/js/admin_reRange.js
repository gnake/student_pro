//重新整理排序
function range() {
    var iTable = document.getElementById("stuT");
    var iTrs = iTable.getElementsByTagName('tr');
    for(var i = 1; i < iTrs.length; i++) {
        var sort = iTrs[i].getElementsByTagName('td')[0];
        sort.innerText = i;
    }

    var nums = iTrs.length - 1;
    document.getElementById("nums").innerText = nums;
    nums = parseInt(nums);
    var pageSum = Math.ceil(nums / 6);
    var pageNum = document.getElementById("pageNum").innerText;
    pageNum = parseInt(pageNum);

    if(pageNum <= pageSum) {
        for (var i = (pageNum - 1) * 6 + 1;i < pageNum * 6 + 1;i++) {
            iTable.rows[i].style.display = 'table-row';
        }
        for(var i = 1; i < (pageNum - 1) * 6 + 1;i++) {
            iTable.rows[i].style.display = 'none';
        }
        for(var i = pageNum * 6 + 1; i< nums + 1;i++) {
            iTable.rows[i].style.display = 'none';
        }
    } else {
        for(var i = (pageNum - 2) * 6 + 1;i < nums + 1;i ++) {
            iTable.rows[i].style.display = 'table-row';
        }
        for(var i = 1;i < (pageNum - 2) * 6 + 1;i++) {
            iTable.rows[i].style.display = 'none';
        }
        document.getElementById("pageNum").innerText = pageNum - 1;
    }
}
