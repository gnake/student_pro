<%@ page import="java.util.List" %>
<%@ page import="com.per.ggw.bean.Student" %>
<%@ page import="com.per.ggw.mapper.StudentMapper" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  String path = request.getContextPath();
  String curPath = request.getScheme() + "://" + request.getServerName()
          + ":" + request.getServerPort() + path;
//    System.out.println(curPath);
%>
<html>
<head>
  <title>home</title>
  <link rel="stylesheet" href="<%= curPath%>/static/css/home.css" type="text/css">
<%--  <script src="<%= curPath%>/static/js/filp.js" type="text/javascript"></script>--%>
<%--  <script src="<%= curPath%>/static/js/reRange.js" type="text/javascript"></script>--%>
    <script src="<%=curPath%>/static/js/student.js" type="text/javascript"></script>
</head>
<body>
<%
  Student student = (Student) request.getAttribute("student");
%>
<div id="header" class="header">
    <img src="<%= curPath%>/static/image/stu.jpeg">
    <h2>学生管理系统-学生</h2>
    <p>欢迎&nbsp;<%=student.getSname()%>&nbsp;登录,&nbsp;&nbsp;<a href="<%= curPath%>">注销</a>
    </p>
</div>
<div id="content" class="content">
    <div id="con_left" class="con_left">
        <a id="MyInfo" href="javascript:void(0)" onclick="MyInfo()">查看个人信息</a>
        <a href="<%= curPath%>">选课</a>
        <a href="#">退选</a>
        <a href="#">查看已选课程</a>
        <a href="#">修改</a>
    </div>
    <div id="con_right" class="con_right">

    </div>
</div>
<div id="footer" class="footer">

</div>

</body>
</html>
