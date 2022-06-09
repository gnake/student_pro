package com.per.gnake.bean;

public class Teacher {
    private String tno;//职工号
    private String tname;//姓名
    private String tsex;//性别
    private String tpassword;//密码
    private String ttitle;//职称
    public Teacher() {

    }

    public Teacher(String tno, String tname, String tsex, String tpassword, String ttitle) {
        this.tno = tno;
        this.tname = tname;
        this.tsex = tsex;
        this.tpassword = tpassword;
        this.ttitle = ttitle;
    }

    public String getTno() {
        return tno;
    }

    public void setTno(String tno) {
        this.tno = tno;
    }

    public String getTname() {
        return tname;
    }

    public void setTname(String tname) {
        this.tname = tname;
    }

    public String getTsex() {
        return tsex;
    }

    public void setTsex(String tsex) {
        this.tsex = tsex;
    }

    public String getTpassword() {
        return tpassword;
    }

    public void setTpassword(String tpassword) {
        this.tpassword = tpassword;
    }

    public String getTtitle() {
        return ttitle;
    }

    public void setTtitle(String ttitle) {
        this.ttitle = ttitle;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "tno='" + tno + '\'' +
                ", tname='" + tname + '\'' +
                ", tsex='" + tsex + '\'' +
                ", tpassword='" + tpassword + '\'' +
                ", ttitle='" + ttitle + '\'' +
                '}';
    }
}
