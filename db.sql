-- 创建所需数据库
create database javaee_cdesign;
use javaee_cdesign;
-- 管理员表
create table login
(
    username varchar(20) not null ,
    password varchar(16) not null ,
    email varchar(50) default null,
    constraint pk_name primary key (username)
);
-- 系统管理员
insert into  admin
values ('admin','admin','admin@q.com');
--学生表
create table student
(
    sno varchar(10) not null comment '学号',
    sname varchar(10) default null comment '姓名',
    spassword varchar(15) default '123' comment '密码',
    ssex varchar(3) default null comment '性别',
    sgrade int default '19' comment '年级',
    sclass int default '1' comment '班级',
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
-- 教师表
create table teacher
(
    tno varchar(10) not null comment '教师号',
    tname varchar(20) default null comment '教师姓名',
    tsex varchar(5) default null comment '教师性别',
    tpassword varchar(20) default '1234' comment '教师密码',
    ttitle varchar(15) default '三级教师' comment '教师职称',
    constraint pk_tno primary key (tno)
);
-- 插入数据
insert into teacher (tno, tname, tsex) values
('2001','张宏为','男'),
('2002','张国荣','男'),
('2003','魏小平','女'),
('2005','高小宝','女'),
('2009','宋科嘉','男'),
('2010','黄凯','女'),
('2023','王亮','女'),
('2022','周来','男');
-- 课程表
create table course
(
    cno varchar(10) not null comment '课程号',
    cname varchar(40) default null comment '课程名',
    ctime int default '32' comment '学时',
    ccredit int default '2' comment '学分',
    tno varchar(10) default null comment '教师号',
    constraint pk_cno primary key (cno)
);
-- 插入课程信息
insert into course (cno, cname, tno) values
('3031','计算机网络','2022'),
('3032','音乐鉴赏','2009'),
('3033','软件测试','2005'),
('3035','javaee企业级开发','2023'),
('3036','oracle大型数据库','2022'),
('3039','数据结构','2002'),
('3041','大学语文','2001'),
('3045','毛概','2003'),
('3046','中国近代史','2001'),
('3047','高等数学','2010'),
('3050','linux操作系统','2022');
-- 选课表
create table dective
(
    sno varchar(10),
    cno varchar(10),
    tno varchar(10),
    score int(5) default 0 comment '分数',
    constraint pk_sct primary key (sno,cno,tno),
    constraint fk_stu foreign key (sno) references student(sno),
    constraint fk_cou foreign key (cno) references course(cno),
    constraint fk_tea foreign key (tno) references teacher(tno)
);
-- 选课信息
