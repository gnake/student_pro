<%@ page import="java.util.List" %>
<%@ page import="com.per.gnake.bean.Student" %>
<%@ page import="com.per.gnake.bean.Vo.CourseVo" %>
<%@ page import="com.per.gnake.bean.Vo.CourseVo1" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  String path = request.getContextPath();
  String curPath = request.getScheme() + "://" + request.getServerName()
          + ":" + request.getServerPort() + path;
//    System.out.println(curPath);
%>
<html>
<head>
  <title>student</title>
    <link rel="stylesheet" href="<%= curPath%>/static/css/student.css" type="text/css"/>
    <link rel="stylesheet" href="<%= curPath%>/static/css/button.css" type="text/css"/>
    <link rel="stylesheet" href="<%= curPath%>/static/css/student_updateInfo.css" type="text/css"/>

    <script src="<%= curPath%>/static/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/student.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/student_reRange.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/student_flip.js" type="text/javascript"></script>

</head>
<script>
    $(function () {
            student_reRange();
        }
    );
</script>
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
        <a href="javascript:void(0)" onclick="aboutCourse()">选课与退选</a>
        <a href="javascript:void(0)" onclick="all_dec()">查看已选课程</a>
        <a href="javascript:void(0)" onclick="updateInfo()">修改信息</a>
    </div>
    <div id="con_right" class="con_right">
<%--   查看个人信息     --%>
        <div id="info" class="info">
            <table>
                <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>班级</th>
                    <th>年级</th>
                    <th>学院</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><%= student.getSno()%></td>
                        <td><%=student.getSname()%></td>
                        <td><%= student.getSsex()%></td>
                        <td><%= student.getSclass()%></td>
                        <td><%= student.getSgrade()%></td>
                        <td><%= student.getScollege()%></td>
                    </tr>
                </tbody>
            </table>
        </div>

    <%--选课与退选--%>
        <div id="sec">
            <table id="xuanke_tuixuan">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>课程号</th>
                    <th>课程名</th>
                    <th>学时</th>
                    <th>学分</th>
                    <th>授课教师</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <%
                    int j = 0;
                    List<CourseVo1> courseVo1s = (List<CourseVo1>) request.getAttribute("courseVo1s");
                %>
                <%
                  for(CourseVo1 it : courseVo1s){
                      j++;
                %>
                <tr>
                    <td><%= j%></td>
                    <td><%= it.getCno()%></td>
                    <td><%= it.getCname()%></td>
                    <td><%= it.getCtime()%></td>
                    <td><%= it.getCcredit()%></td>
                    <td><%= it.getTname()%></td>
                    <td>
                        <input id="choose" type="button" value="选择" onclick="selCourSe(this)">
                        <input id="eixt_race" type="button" value="退选" onclick="exitCourse(this)">
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
<%--查看已选课程--%>
        <div id="all_dec">
            <table id="the_selected_course">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>课程号</th>
                    <th>课程名</th>
                    <th>学分</th>
                    <th>成绩</th>
                </tr>
                </thead>
                <tbody>
                <%
                    int i = 0;
                    List<CourseVo> courseVos = (List<CourseVo>) request.getAttribute("courseVos");
                %>
                <%
                    for(CourseVo it : courseVos){
                        i++;
                %>
                <tr>
                    <td><%= i%></td>
                    <td><%= it.getCno()%></td>
                    <td><%= it.getCname()%></td>
                    <td><%= it.getCcredit()%></td>
                    <td><%= it.getScore()%></td>
                </tr>
                <%
                    }
                %>
                </tbody>
            </table>
        </div>
        <div id="final2">
            <p>第</p>
            <p id="pageNum2">1</p>
            <P>页，共</P>
            <p id="nums2">0</p>
            <p>条，(每页显示6条)</p>
            <button id="next2" onclick="next()">下一页</button>
            <button id="previous2" onclick="previous()">上一页</button>
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
            <label>
                <span>班级 :</span>
                <input id="sclass" type="text" name="sclass" placeholder="请输入您的班级"/>
                <div class="error-msg"></div>
            </label>

            <label>
                <span>年级 :</span>
                <input id="sgrade" type="text"  name="sgrade" placeholder="请输入您的年级"/>
                <div class="error-msg"></div>
            </label>

            <label>
                <span>学院 :</span>
                <input id="scollege" type="text" name="scollege" placeholder="请输入您的学院"/>
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
