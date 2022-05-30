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
    <link rel="stylesheet" href="<%= curPath%>/static/css/login.css">
    <style type="text/css">
        body {
            position: fixed;
            left: 0;
            top: 0;
            /*生成绝对定位，从最左上开始*/
            width: 100%;
            height: 100%;
            min-width: 1000px;
            /*屏幕宽度小于1000px时停止缩放*/
            z-index: -1;
            /*设置层叠顺序，保证在最底层*/
            background-size: cover;
            /*图像扩展足够大，覆盖背景区域*/
            background-repeat: no-repeat;
            /*不重复，平铺一次*/
            background-image: url("<%= curPath%>/static/image/login_bg.jpg");
            background-position: center 0;
            /*居中，靠左*/
            zoom: 1;
            /*针对IE*/
        }
    </style>
</head>
<body>
    <div class="con">
        <form action="#" method="post" name="login" id="login">
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
                <button type="button" onclick="">登录</button>
            </div>
        </form>
    </div>
</body>
</html>
