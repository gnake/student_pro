package com.per.ggw.bean;

public class Student {
    private String sno;//学号
    private String sname;//姓名
    private String spassword;//密码
    private String ssex;//性别
    private Integer sgrade;//年级
    private Integer sclass;//班级
    private String scollege;//学院
    public Student() {

    }
    public Student(String sno, String sname, String spassword, String ssex, Integer sgrade, Integer sclass, String scollege) {
        this.sno = sno;
        this.sname = sname;
        this.spassword = spassword;
        this.ssex = ssex;
        this.sgrade = sgrade;
        this.sclass = sclass;
        this.scollege = scollege;
    }

    public String getSno() {
        return sno;
    }

    public void setSno(String sno) {
        this.sno = sno;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getSpassword() {
        return spassword;
    }

    public void setSpassword(String spassword) {
        this.spassword = spassword;
    }

    public String getSsex() {
        return ssex;
    }

    public void setSsex(String ssex) {
        this.ssex = ssex;
    }

    public Integer getSgrade() {
        return sgrade;
    }

    public void setSgrade(Integer sgrade) {
        this.sgrade = sgrade;
    }

    public Integer getSclass() {
        return sclass;
    }

    public void setSclass(Integer sclass) {
        this.sclass = sclass;
    }

    public String getScollege() {
        return scollege;
    }

    public void setScollege(String scollege) {
        this.scollege = scollege;
    }

    @Override
    public String toString() {
        return "Student{" +
                "sno='" + sno + '\'' +
                ", sname='" + sname + '\'' +
                ", spassword='" + spassword + '\'' +
                ", ssex='" + ssex + '\'' +
                ", sgrade=" + sgrade +
                ", sclass=" + sclass +
                ", scollege='" + scollege + '\'' +
                '}';
    }
}
