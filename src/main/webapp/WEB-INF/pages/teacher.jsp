<%@ page import="com.per.gnake.bean.Teacher" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String curPath = request.getScheme() + "://" + request.getServerName()
            + ":" + request.getServerPort() + path;
%>
<html>
<head>
    <title>teacher</title>
    <link rel="stylesheet" href="<%=curPath%>/static/css/teacher.css" type="text/css"/>
    <script src="<%= curPath%>/static/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/teacher.js" type="text/javascript"></script>
</head>
<body>
<%
    Teacher teacher = (Teacher) request.getAttribute("teacher");
%>
<div id="header" class="header">
    <img src="<%= curPath%>/static/image/tea.jpg">
    <h2>学生管理系统-老师</h2>
    <p>欢迎&nbsp;<%= teacher.getTname()%>&nbsp;登录,&nbsp;&nbsp;<a href="<%= curPath%>">注销</a>
    </p>
</div>
<div id="tbody" class="tbody">
    <div id="tbody_l" class="tbody_l">
        <a id="MyInfo" href="javascript:void(0)" onclick="TeaInfo()">查看个人信息</a>
        <a href="javascript:void(0)" onclick="">录入成绩</a>
        <a href="javascript:void(0)" onclick="">修改信息</a>
    </div>
    <div id="tbody_r" class="tbody_r">
        <div id="teainfo" class="teainfo">
            <table>
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>职工号</th>
                    <th>性别</th>
                    <th>职称</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><%= teacher.getTname()%></td>
                    <td><%= teacher.getTno()%></td>
                    <td><%= teacher.getTsex()%></td>
                    <td><%= teacher.getTtitle()%></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<div id="footer" class="footer">

</div>
</body>
</html>
