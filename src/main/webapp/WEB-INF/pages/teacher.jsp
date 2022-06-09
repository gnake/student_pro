<%@ page import="com.per.gnake.bean.Teacher" %>
<%@ page import="com.per.gnake.bean.Vo.Score" %>
<%@ page import="java.util.List" %>
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
    <link rel="stylesheet" href="<%=curPath%>/static/css/button.css" type="text/css"/>
    <link rel="stylesheet" href="<%=curPath%>/static/css/student_updateInfo.css" type="text/css"/>

    <script src="<%= curPath%>/static/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/teacher.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/teacher_reRange.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/teacher_flip.js" type="text/javascript"></script>

</head>
<script>
    $(
        function () {
            teacher_reRange();
        }
    )
</script>
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
        <a href="javascript:void(0)" onclick="resultInput()">录入成绩</a>
        <a href="javascript:void(0)" onclick="updateTea()">修改信息</a>
    </div>
    <div id="tbody_r" class="tbody_r">
        <div id="teainfo" class="teainfo">
            <table id="teainfoTable">
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

        <%--  录入信息      --%>
        <div id="resultInputBlock">
                <table id="TeaTable">
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>课程号</th>
                        <th>课程名</th>
                        <th>学号</th>
                        <th>姓名</th>
                        <th>班级</th>
                        <th>成绩</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <%
                        int j = 0;
                        List<Score> scores = (List<Score>) request.getAttribute("scores");
                    %>
                    <%
                        for(Score it : scores){
                            j++;
                    %>
                    <tr>
                        <td><%= j%></td>
                        <td><%= it.getCno()%></td>
                        <td><%= it.getCname()%></td>
                        <td><%= it.getSno()%></td>
                        <td><%= it.getSname()%></td>
                        <td><%= it.getSclass()%></td>
                        <%
                            if(it.getScore() > 0) {

                        %>
                        <td><%= it.getScore()%></td>
                        <%
                            } else {
                        %>
                        <td><input id="score" type="text"/></td>
                        <%
                            }
                        %>
                        <td>
                            <input id="tijiao" type="button" value="提交" onclick="tijiao(this)">
                            <input id="zancun" type="button" value="取消" onclick="zancun(this)" style="display: none;">
                        </td>
                    </tr>
                    <%
                        }
                    %>
                    </tbody>
                </table>
        </div>

        <div id="final">
            <p>第</p>
            <p id="pageNum">1</p>
            <P>页，共</P>
            <p id="nums">0</p>
            <p>条，(每页显示6条)</p>
            <button id="next" onclick="next()">下一页</button>
            <button id="previous" onclick="previous()">上一页</button>
        </div>

        <%--  修改信息  --%>
        <div id="updateMy">
            <form class="smart-green" id="updateMyForm">
                <h1>修改信息
                    <span>请修改你的信息.</span>
                </h1>
                <label>
                    <span>姓名 :</span>
                    <input id="sname" type="text" name="sname"  placeholder="请输入您的姓名"/>
                    <div class="error-msg"></div>
                </label>

                <label>
                    <span>密码 :</span>
                    <input id="spassword" type="password" name="spasword"  placeholder="请输入您的密码"/>
                    <div class="error-msg"></div>
                </label>
                <label>
                    <span>性别 :</span>
                    <input id="ssex" type="text" name="sex" placeholder="请输入您的性别"/>
                    <div class="error-msg"></div>
                </label>
                <div class="success-msg"></div>
                <label>
                    <span> </span>
                    <input type="button" class="button" value="提交" onclick="updateInfo_submit()"/>
                </label>
            </form>
        </div>
    </div>
</div>
<div id="footer" class="footer">

</div>
</body>
</html>
