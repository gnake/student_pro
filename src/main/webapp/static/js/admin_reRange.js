//重新整理排序
function range() {
    //学生
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
        for(var i = (pageNum - 1) * 6 + 1;i < pageNum * 6 + 1;i++) {
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

    //老师
    var iTable2 = document.getElementById("teaT");
    var iTrs2 = iTable2.getElementsByTagName('tr');
    for(var i = 1; i < iTrs2.length; i++) {
        var sort2 = iTrs2[i].getElementsByTagName('td')[0];
        sort2.innerText = i;
    }

    var nums2 = iTrs2.length - 1;
    document.getElementById("nums2").innerText = nums2;
    nums2 = parseInt(nums2);
    var pageSum2 = Math.ceil(nums2 / 6);
    var pageNum2 = document.getElementById("pageNum2").innerText;
    pageNum2 = parseInt(pageNum2);

    if(pageNum2 <= pageSum2) {
        for (var i = (pageNum2 - 1) * 6 + 1;i < pageNum2 * 6 + 1;i++) {
            iTable2.rows[i].style.display = 'table-row';
        }
        for(var i = 1; i < (pageNum2 - 1) * 6 + 1;i++) {
            iTable2.rows[i].style.display = 'none';
        }
        for(var i = pageNum2 * 6 + 1; i< nums2 + 1;i++) {
            iTable2.rows[i].style.display = 'none';
        }
    } else {
        for(var i = (pageNum2 - 2) * 6 + 1;i < nums2 + 1;i ++) {
            iTable2.rows[i].style.display = 'table-row';
        }
        for(var i = 1;i < (pageNum2 - 2) * 6 + 1;i++) {
            iTable2.rows[i].style.display = 'none';
        }
        document.getElementById("pageNum2").innerText = pageNum2 - 1;
    }

    //课程
    var iTable3 = document.getElementById("couT");
    var iTrs3 = iTable3.getElementsByTagName('tr');
    for(var i = 1; i < iTrs3.length; i++) {
        var sort3 = iTrs3[i].getElementsByTagName('td')[0];
        sort3.innerText = i;
    }

    var nums3 = iTrs3.length - 1;
    document.getElementById("nums3").innerText = nums3;
    nums3 = parseInt(nums3);
    var pageSum3 = Math.ceil(nums3 / 6);
    var pageNum3 = document.getElementById("pageNum3").innerText;
    pageNum3 = parseInt(pageNum3);

    if(pageNum3 <= pageSum3) {
        for (var i = (pageNum3 - 1) * 6 + 1;i < pageNum3 * 6 + 1;i++) {
            iTable3.rows[i].style.display = 'table-row';
        }
        for(var i = 1; i < (pageNum3 - 1) * 6 + 1;i++) {
            iTable3.rows[i].style.display = 'none';
        }
        for(var i = pageNum3 * 6 + 1; i< nums3 + 1;i++) {
            iTable3.rows[i].style.display = 'none';
        }
    } else {
        for(var i = (pageNum3 - 2) * 6 + 1;i < nums3 + 1;i ++) {
            iTable3.rows[i].style.display = 'table-row';
        }
        for(var i = 1;i < (pageNum3 - 2) * 6 + 1;i++) {
            iTable3.rows[i].style.display = 'none';
        }
        document.getElementById("pageNum3").innerText = pageNum3 - 1;
    }
}
