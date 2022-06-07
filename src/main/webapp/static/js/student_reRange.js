//排序
function student_reRange(){
    //选课与退选
    var iTable = document.getElementById("xuanke_tuixuan");
    var iTrs = iTable.getElementsByTagName('tr');

    for(var i = 1;i < iTrs.length; i++) {
        var sort = iTrs[i].getElementsByTagName('td')[0];
        sort.innerText = i;
    }

    var nums = iTrs.length - 1;
    document.getElementById('nums').innerText = nums;
    nums = parseInt(nums);
    var pageSum = Math.ceil(nums / 6);
    var pageNum = document.getElementById('pageNum').innerText;
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
    //查看已选课程
    var iTable2 = document.getElementById("the_selected_course");
    var iTrs2 = iTable2.getElementsByTagName('tr');

    for(var j = 1; j < iTrs2.length; j++) {
        var sort2 = iTrs2[j].getElementsByTagName('td')[0];
        sort2.innerText = j;
    }

    var nums2 = iTrs2.length - 1;
    document.getElementById('nums2').innerText = nums2;
    nums2 = parseInt(nums2);
    var pageSum2 = Math.ceil(nums2 / 6);
    var pageNum2 = document.getElementById('pageNum2').innerText;
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
}