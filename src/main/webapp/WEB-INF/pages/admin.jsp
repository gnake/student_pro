<%@ page import="com.per.gnake.bean.Admin" %>
<%@ page import="java.util.List" %>
<%@ page import="com.per.gnake.bean.Student" %>
<%@ page import="com.per.gnake.bean.Teacher" %>
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
        <table id="teaT">
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
                    <input id="ExaTea" class="exam" type="button" value="查看" onclick="examineTea(this)"/>
                    <input id="DelTea" class="del" type="button" value="删除" onclick="deleteTea(this)"/>
                    <input id="UpdTea" class="upd" type="button" value="修改" onclick="updateTea(this)"/>
                </td>
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

        <%--增加老师--%>
        <div id="TeaAddBlock">
            <div id="TeaAddHeader">新增老师信息</div>
            <div id="TeaAddMain">
                <table id="TeaAddMsgTable">
                    <tr>
                        <td class="TeaAddTableTd1">职工号</td>
                        <td class="TeaAddTableTd2"><input type="text" id="teaTno1"></td>
                    </tr>
                    <tr>
                        <td class="TeaAddTableTd1">姓名</td>
                        <td class="TeaAddTableTd2"><input type="text" id="teaTname1"></td>
                    </tr>
                    <tr>
                        <td class="TeaAddTableTd1">性别</td>
                        <td class="TeaAddTableTd2">
                            <select id="teaTsex1">
                                <option value="男" selected>男</option>
                                <option value="女">女</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TeaAddTableTd1">职称</td>
                        <td class="TeaAddTableTd2"><input type="text" id="teaTtitle1"></td>
                    </tr>
                </table>
            </div>
            <div id="TeaAddFoot">
                <button id="TeaSubmit" onclick="TeaSubmit()">提交</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="TeaAddCancel" onclick="TeaAddCancel()">取消</button>
            </div>
        </div>
        <%-- 老师查看  --%>
        <div id="examTeaBlock">
            <div id="examTeaHeader">查看老师信息</div>
            <div id="examTeaMain">
                <table id="examTeaMsgTable">
                    <tr>
                        <td class="examTeaTableTd1">职工号</td>
                        <td class="examTeaTableTd2">
                            <input type="text" id="teaTno2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examTeaTableTd1">姓名</td>
                        <td class="examTeaTableTd2">
                            <input type="text" id="teaTname2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examTeaTableTd1">性别</td>
                        <td class="examTeaTableTd2">
                            <input type="text" id="teaTsex2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examTeaTableTd1">职称</td>
                        <td class="examTeaTableTd2">
                            <input type="text" id="teaTtitle2" readonly="readonly"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="examTeaFooter" style="text-align: right; height: 60px; padding-top: 5px; padding-right: 100px">
                <button id="examTeaCancel" onclick="examTeaCancel()">取消</button>
            </div>
        </div>
        <%--修改老师信息--%>
        <div id="updateTeaBlock">
            <div id="updateTeaHeader">修改老师信息</div>
            <div id="updateTeaMain">
                <table id="updateTeaTable">
                    <tr>
                        <td class="updateTeaTableTd1">职工号</td>
                        <td class="updateTeaTableTd2">
                            <input type="text" id="teaTno3" readonly = "readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateTeaTableTd1">姓名</td>
                        <td class="updateTeaTableTd2">
                            <input type="text" id="teaTname3"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateTeaTableTd1">性别</td>
                        <td class="updateTeaTableTd2">
                            <select id="teaTsex3">
                                <option value="男" selected>男</option>
                                <option value="女">女</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateTeaTableTd1">职称</td>
                        <td class="updateTeaTableTd2">
                            <input type="text" id="teaTtitle3"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="updateTeaFooter">
                <button id="perserveTea" onclick="perserveTea()">保存</button>
                <button id="updateTeaCancel" onclick="updateTeaCancel()">取消</button>
            </div>
        </div>
        <%--  课程    --%>
        <div id="cou" class="cou">
        <table id="couT">
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
                    <input id="ExaCou" class="exam" type="button" value="查看" onclick="examineCou(this)"/>
                    <input id="DelCou" class="del" type="button" value="删除" onclick="deleteCou(this)"/>
                    <input id="UpdCou" class="upd" type="button" value="修改" onclick="updateCou(this)"/>
                </td>
            </tr>
            <%
                }
            %>
            </tbody>
        </table>
        </div>
        <div id="final3">
            <p>第</p>
            <p id="pageNum3">1</p>
            <P>页，共</P>
            <p id="nums3">0</p>
            <p>条，(每页显示6条)</p>
            <button id="next3" onclick="next()">下一页</button>
            <button id="previous3" onclick="previous()">上一页</button>
        </div>
        <%--增加老师--%>
        <div id="CouAddBlock">
            <div id="CouAddHeader">新增课程信息</div>
            <div id="CouAddMain">
                <table id="CouAddMsgTable">
                    <tr>
                        <td class="CouAddTableTd1">课程号</td>
                        <td class="CouAddTableTd2"><input type="text" id="couCno1"></td>
                    </tr>
                    <tr>
                        <td class="CouAddTableTd1">课程名</td>
                        <td class="CouAddTableTd2"><input type="text" id="couCname1"></td>
                    </tr>
                    <tr>
                        <td class="CouAddTableTd1">学分</td>
                        <td class="CouAddTableTd2"><input type="text" id="couCtime1"></td>
                    </tr>
                    <tr>
                        <td class="CouAddTableTd1">学时</td>
                        <td class="CouAddTableTd2"><input type="text" id="couCcredit1"></td>
                    </tr>
                    <tr>
                        <td class="TeaAddTableTd1">任课教师号</td>
                        <td class="TeaAddTableTd2"><input type="text" id="couCtno1"></td>
                    </tr>
                </table>
            </div>
            <div id="CouAddFoot">
                <button id="CouSubmit" onclick="CouSubmit()">提交</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="CouAddCancel" onclick="CouAddCancel()">取消</button>
            </div>
        </div>
        <%-- 老师查看  --%>
        <div id="examCouBlock">
            <div id="examCouHeader">查看课程信息</div>
            <div id="examCouMain">
                <table id="examCouMsgTable">
                    <tr>
                        <td class="examCouTableTd1">课程号</td>
                        <td class="examCouTableTd2">
                            <input type="text" id="couCno2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examCouTableTd1">课程名</td>
                        <td class="examCouTableTd2">
                            <input type="text" id="couCname2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examCouTableTd1">学时</td>
                        <td class="examCouTableTd2">
                            <input type="text" id="couCtime2" readonly="readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="examCouTableTd1">学分</td>
                        <td class="examCouTableTd2">
                            <input type="text" id="couCcredit2" readonly="readonly"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="examCouFooter" style="text-align: right; height: 50px; padding-top: 5px; padding-right: 100px">
                <button id="examCouCancel" onclick="examCouCancel()">取消</button>
            </div>
        </div>
        <%--修改课程信息--%>
        <div id="updateCouBlock">
            <div id="updateCouHeader">修改课程信息</div>
            <div id="updateCouMain">
                <table id="updateCouTable">
                    <tr>
                        <td class="updateCouTableTd1">课程号</td>
                        <td class="updateCouTableTd2">
                            <input type="text" id="couCno3" readonly = "readonly"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateCouTableTd1">课程名</td>
                        <td class="updateCouTableTd2">
                            <input type="text" id="couCname3"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateCouTableTd1">学时</td>
                        <td class="updateCouTableTd2">
                            <input type="text" id="couCtime3"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="updateCouTableTd1">学分</td>
                        <td class="updateCouTableTd2">
                            <input type="text" id="couCcredit3"/>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="updateCouFooter">
                <button id="perserveCou" onclick="perserveCou()">保存</button>
                <button id="updateCouCancel" onclick="updateCouCancel()">取消</button>
            </div>
        </div>
    </div>
</div>
<div id="footer" class="footer">

</div>
</body>
</html>
