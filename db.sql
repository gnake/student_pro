-- 创建所需数据库
create database javaee_cdesign;
use javaee_cdesign;
--学生表
create table student
(
    sno varchar(10) comment '学号',
    sname varchar(10) default null comment '姓名',
    spassword varchar(15) default '123' comment '密码',
    ssex varchar(3) default null comment '性别',
    sgrade int(5) default '19' comment '年级',
    sclass int(2) default '1' comment '班级',
    scollege varchar(20) default null comment '学院',
    constraint pk_sno primary key (sno)
) comment '学生表';
-- 插入测试数据
insert into student(sno,sname,ssex,scollege) values
    ('1932101','小小','女','电子'),
    ('1932102','小一','女','电子'),
    ('1932103','小二','男','电子'),
    ('1932104','小三','女','电子'),
    ('1932105','小红','男','电子'),
    ('1932106','小明','女','电子'),
    ('1932107','小蓝','女','电子'),
    ('1932108','小绿','男','电子'),
    ('1932109','测试1','女','电子'),
    ('1932110','测试2','女','电子'),
    ('1932111','测试3','男','电子');
