<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
  String path = request.getContextPath();
  String curPath = request.getScheme() + "://" + request.getServerName()
          + ":" + request.getServerPort() + path;
//    System.out.println(curPath);
%>
<html>
<head>
  <title>Title</title>

  <link rel="stylesheet" href="<%= curPath%>/static/css/home.css" type="text/css">
</head>
<body>
<div class="header">
  <h1>学生管理系统</h1>
</div>
<div class="topnav">
  <a href="#">连接</a>
  <a href="#">连接</a>
  <a href="#">连接</a>
  <a href="#" style="float: right">连接</a>
</div>
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>文章标题</h2>
      <h5>2022 05 29</h5>
      <div class="fakeing" style="height: 200px;">图片</div>
      <p>文本</p>
      <p>练一练</p>
    </div>
    <div class="card">
      <h2>文章标题</h2>
      <h5>2022 05 29</h5>
      <div class="fakeing" style="height: 200px;">图片</div>
      <p>文本</p>
      <p>练一练</p>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>关于我</h2>
      <div class="fakeing" style="height: 100px">图片</div>
      <p>关于我的信息</p>
    </div>
    <div class="card">
      <h2>热门文章</h2>
      <div class="fakeing"><p>图片</p></div>
      <div class="fakeing"><p>图片</p></div>
      <div class="fakeing"><p>图片</p></div>
    </div>
    <div class="card">
      <h3>关注我</h3>
      <p>文本</p>
    </div>
  </div>
</div>
<div class="footer">
  <h2>底部</h2>
</div>
</body>
</html>
