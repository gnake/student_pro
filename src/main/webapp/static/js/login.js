//登录函数
function login_func() {

    if(document.getElementById("student").checked) {
        f = document.getElementById("lg");
        f.action = "/studentController/stuLogin"
        f.method = "post";
        f.submit();
    }

    if(document.getElementById("teacher").checked) {
        f = document.getElementById("lg");
        f.action = "/teacherController/teaLogin";
        f.method = "post";
        f.submit();
    }

    if(document.getElementById("admin").checked) {
        f = document.getElementById("lg");
        f.action = "/adminController/adminLogin";
        f.method = "post";
        f.submit();
    }
}
