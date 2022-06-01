//登录函数，跳转道后台学生控制类进行处理
function login_func() {
    if(document.getElementById("student").checked) {
        f = document.getElementById("lg");
        f.action = "/studentController/login"
        f.method = "post";
        f.submit();
    }
}
