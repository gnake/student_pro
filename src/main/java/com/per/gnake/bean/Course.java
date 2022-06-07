package com.per.gnake.bean;

public class Course {
    private String cno;//课程号
    private String cname;//课程名
    private String ctime;//学时
    private String ccredit;//学分
    private String tno;//职工号
    public Course() {

    }

    public Course(String cno, String cname, String ctime, String ccredit, String tno) {
        this.cno = cno;
        this.cname = cname;
        this.ctime = ctime;
        this.ccredit = ccredit;
        this.tno = tno;
    }

    public String getCno() {
        return cno;
    }

    public void setCno(String cno) {
        this.cno = cno;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getCtime() {
        return ctime;
    }

    public void setCtime(String ctime) {
        this.ctime = ctime;
    }

    public String getCcredit() {
        return ccredit;
    }

    public void setCcredit(String ccredit) {
        this.ccredit = ccredit;
    }

    public String getTno() {
        return tno;
    }

    public void setTno(String tno) {
        this.tno = tno;
    }

    @Override
    public String toString() {
        return "Course{" +
                "cno='" + cno + '\'' +
                ", cname='" + cname + '\'' +
                ", ctime='" + ctime + '\'' +
                ", ccredit='" + ccredit + '\'' +
                ", tno='" + tno + '\'' +
                '}';
    }
}
