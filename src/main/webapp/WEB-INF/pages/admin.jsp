<%@ page import="com.per.gnake.bean.Admin" %>
<%@ page import="java.util.List" %>
<%@ page import="com.per.gnake.bean.Student" %>
<%@ page import="com.per.gnake.bean.Teacher" %>
<%@ page import="com.per.gnake.bean.Vo.CourseVo1" %>
<%@ page import="com.per.gnake.bean.Course" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String curPath = request.getScheme() + "://" + request.getServerName()
            + ":" + request.getServerPort() + path;
%>
<html>
<head>
    <title>admin</title>
    <link rel="stylesheet" href="<%=curPath%>/static/css/admin.css" type="text/css"/>
    <link rel="stylesheet" href="<%= curPath%>/static/css/button.css" type="text/css"/>
    <link rel="stylesheet" href="<%= curPath%>/static/css/add.css" type="text/css"/>
    <link rel="stylesheet" href="<%= curPath%>/static/css/examine.css" type="text/css"/>
    <link rel="stylesheet" href="<%= curPath%>/static/css/update.css" type="text/css"/>

    <script src="<%= curPath%>/static/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/admin.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/add.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/examine.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/delete.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/update.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/flip.js" type="text/javascript"></script>
    <script src="<%=curPath%>/static/js/admin_reRange.js" type="text/javascript"></script>

</head>
<script>
    $(function () {
        range();
    }
    );
</script>
<body>
<%
    Admin admin = (Admin) request.getAttribute("admin");
%>
<div id="header" class="header">
    <img src="<%= curPath%>/static/image/admin.jpeg">
    <h2>学生管理系统-管理员</h2>
    <p>欢迎&nbsp;<%= admin.getUsername()%>&nbsp;登录,&nbsp;&nbsp;<a href="<%= curPath%>">注销</a>
    </p>
</div>
<div id="abody" class="abody">
    <div id="abody_l" class="abody_l">
        <a href="javascript:void(0)" onclick="man_stu()">学生管理</a>
        <a href="javascript:void(0)" onclick="man_tea()">老师管理</a>
        <a href="javascript:void(0)" onclick="man_cou()">课程管理</a>
    </div>
    <div id="abody_r" class="abody_r">
        <div id="addb" class="addb">
            <button id="add" onclick="addStu()">新增</button>
        </div>
        <%--  学生   --%>
        <div id="stu" class="stu">
            <table id="stuT">
                <thead>
                <tr>
                    <th>序号</th>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>班级</th>
                    <th>年级</th>
                    <th>学院</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <%
                    int i = 0;
                    List<Student> students = (List<Student>) request.getAttribute("students");
                %>
                <%
                    for(Student it : students) {
                        i++;
                %>
                <tr>
                    <td><%= i%></td>
                    <td><%= it.getSno()%></td>
                    <td><%= it.getSname()%></td>
                    <td><%= it.getSsex()%></td>
                    <td><%= it.getSclass()%></td>
                    <td><%= it.getSgrade()%></td>
                    <td><%= it.getScollege()%></td>
                    <td>
                        <input id="ExaStu" class="exam" type="button" value="查看" onclick="examineStu(this)"/>
                        <input id="DelStu" class="del" type="button" value="删除" onclick="deleteStu(this)"/>
                        <input id="UpdStu" class="upd" type="button" value="修改" onclick="updateStu(this)"/>
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
            <%--    学生增加表格        --%>
            <div id="totalbg"></div>
            <div id="StuAddBlock">
                <div id="StuAddHeader">新增学生信息</div>
                <div id="StuAddMain">
                    <table id="StuAddMsgTable">
                        <tr>
                            <td class="StuAddTableTd1">学号</td>
                            <td class="StuAddTableTd2"><input type="text" id="stuSno1"></td>
                        </tr>
                        <tr>
                            <td class="StuAddTableTd1">姓名</td>
                            <td class="StuAddTableTd2"><input type="text" id="stuSname1"></td>
                        </tr>
                        <tr>
                            <td class="StuAddTableTd1">性别</td>
                            <td class="StuAddTableTd2">
                                <select id="stuSsex1">
                                    <option value="男" selected>男</option>
                                    <option value="女">女</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="StuAddTableTd1">班级</td>
                            <td class="StuAddTableTd2"><input type="text" id="stuSclass1"></td>
                        </tr>
                        <tr>
                            <td class="StuAddTableTd1">年级</td>
                            <td class="StuAddTableTd2"><input type="text" id="stuSgrade1"></td>
                        </tr>
                        <tr>
                            <td class="StuAddTableTd1">学院</td>
                            <td class="StuAddTableTd2"><input type="text" id="stuScollege1"></td>
                        </tr>
                    </table>
                </div>
                <div id="StuAddFoot">
                    <button id="StuSubmit" onclick="StuSubmit()">提交</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button id="StuAddCancel" onclick="StuAddCancel()">取消</button>
                </div>
            </div>


        <%-- 学生查看  --%>
        <div id="examStuBlock">
            <div id="examStuHeader">查看学生信息</div>
            <div id="examStuMain">
                <table id="examStuMsgTable">
                    <tr>
                        <td class="examStuTableTd1">学号</td>
                        <td class="examStuTableTd2">
                            <input type="text" id="stuSno2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examStuTableTd1">姓名</td>
                        <td class="examStuTableTd2">
                            <input type="text" id="stuSname2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examStuTableTd1">性别</td>
                        <td class="examStuTableTd2">
                            <input type="text" id="stuSsex2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examStuTableTd1">班级</td>
                        <td class="examStuTableTd2">
                            <input type="text" id="stuSclass2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examStuTableTd1">年级</td>
                        <td class="examStuTableTd2">
                            <input type="text" id="stuSgrade2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examStuTableTd1">学院</td>
                        <td class="examStuTableTd2">
                            <input type="text" id="stuScollege2" readonly="readonly"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="examStuFooter" style="text-align: right; height: 45px; padding-top: 5px; padding-right: 100px">
                <button id="examStuCancel" onclick="examStuCancel()">取消</button>
            </div>
        </div>

        <%--修改学生信息--%>
        <div id="updateStuBlock">
            <div id="updateStuHeader">修改学生信息</div>
            <div id="updateStuMain">
                <table id="updateStuTable">
                    <tr>
                        <td class="updateStuTableTd1">学号</td>
                        <td class="updateStuTableTd2">
                            <input type="text" id="stuSno3" readonly = "readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateStuTableTd1">姓名</td>
                        <td class="updateStuTableTd2">
                            <input type="text" id="stuSname3"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateStuTableTd1">性别</td>
                        <td class="updateStuTableTd2">
                            <select id="stuSsex3">
                                <option value="男" selected>男</option>
                                <option value="女">女</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateStuTableTd1">班级</td>
                        <td class="updateStuTableTd2">
                            <input type="text" id="stuSclass3"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateStuTableTd1">年级</td>
                        <td class="updateStuTableTd2">
                            <input type="text" id="stuSgrade3"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateStuTableTd1">学院</td>
                        <td class="updateStuTableTd2">
                            <input type="text" id="stuScollege3"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="updateStuFooter">
                <button id="perserveStu" onclick="perserveStu()">保存</button>
                <button id="updateStuCancel" onclick="updateStuCancel()">取消</button>
            </div>
        </div>
        <%--  老师    --%>
            <div id="tea" class="tea">
        <table>
            <thead>
            <tr>
                <th>序号</th>
                <th>职工号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>职称</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <%
                int j = 0;
                List<Teacher> teachers = (List<Teacher>) request.getAttribute("teachers");
            %>
            <%
                for(Teacher it : teachers) {
                    j++;
            %>
            <tr>
                <td><%= j%></td>
                <td><%= it.getTno()%></td>
                <td><%= it.getTname()%></td>
                <td><%= it.getTsex()%></td>
                <td><%= it.getTtitle()%></td>
                <td>
                    <input class="exam" type="button" value="查看"/>
                    <input class="del" type="button" value="删除"/>
                    <input class="upd" type="button" value="修改"/>
                </td>
            </tr>
            <%
                }
            %>
            </tbody>
        </table>
    </div>
        <%--  管理员    --%>
            <div id="cou" class="cou">
        <table>
            <thead>
            <tr>
                <th>序号</th>
                <th>课程号</th>
                <th>课程名</th>
                <th>学时</th>
                <th>学分</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <%
                int k = 0;
                List<Course> courses = (List<Course>) request.getAttribute("courses");
            %>
            <%
                for(Course it : courses) {
                    k++;
            %>
            <tr>
                <td><%= k%></td>
                <td><%= it.getCno()%></td>
                <td><%= it.getCname()%></td>
                <td><%= it.getCtime()%></td>
                <td><%= it.getCcredit()%></td>
                <td>
                    <input class="exam" type="button" value="查看"/>
                    <input class="del" type="button" value="删除"/>
                    <input class="upd" type="button" value="修改"/>
                </td>
            </tr>
            <%
                }
            %>
            </tbody>
        </table>
        </div>
    </div>
</div>
<div id="footer" class="footer">

</div>
</body>
</html>
