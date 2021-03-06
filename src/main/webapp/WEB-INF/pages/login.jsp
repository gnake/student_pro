<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String curPath = request.getScheme() + "://" + request.getServerName()
            + ":" + request.getServerPort() + path;
    //得到当前url
%>
<html>
<head>
    <title>login</title>
    <%-- 外部css   --%>
    <link rel="stylesheet" href="<%= curPath%>/static/css/login.css">
    <%-- js  --%>
    <script src="<%= curPath%>/static/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="<%= curPath%>/static/js/login.js" type="text/javascript"></script>
    <style type="text/css">
        body {
            background-image: url("<%= curPath%>/static/image/login_bg.jpg");
        }
    </style>
    <script type="text/javascript">
        //提示错误信息
        function confirm_msg() {
            var msg = "<%= request.getAttribute("msg")%>";
            //如果写成msg != null会出错
            if(msg == '用户不存在' || msg == '用户名或密码错误') {
                document.getElementById("msg").innerHTML = msg;
            }
        }
    </script>
</head>
<body onload="confirm_msg()">
    <div class="con">
        <form name="lg" id="lg" class="lg">
            <h2>学生信息系统</h2>
            <div class="login-field">
                <img src="<%= curPath%>/static/image/user.png">
                <input type="text" id="username" name="username" placeholder="请输入用户名"/>
            </div>
            <div class="login-field">
                <img src="<%= curPath%>/static/image/password.png">
                <input type="password" id="password" name="password" placeholder="请输入密码"/>
            </div>
            <div class="login-check">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                学生<input id="student" type="radio" name="login" value="学生"/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                教师<input id="teacher" type="radio" name="login" value="老师"/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                管理员<input id="admin" type="radio" name="login" value="管理员"/>            </div>
            <div class="login-sub">
                <button type="button" onclick="login_func()">登录</button>
            </div>
            <div style="text-align: center" >
                <p id="msg" style="color: red; font-size: 15px;" ></p>
            </div>
        </form>
    </div>
</body>
</html>
