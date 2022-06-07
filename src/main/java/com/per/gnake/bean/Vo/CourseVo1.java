package com.per.gnake.bean.Vo;

//选课
public class CourseVo1 {
    private String cno;
    private String cname;
    private String ctime;
    private String ccredit;
    private String tname;
    private String sno;
    public CourseVo1() {

    }

    public CourseVo1(String cno, String cname, String ctime, String ccredit, String tname, String sno) {
        this.cno = cno;
        this.cname = cname;
        this.ctime = ctime;
        this.ccredit = ccredit;
        this.tname = tname;
        this.sno = sno;
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

    public String getTname() {
        return tname;
    }

    public void setTname(String tname) {
        this.tname = tname;
    }

    public String getSno() {
        return sno;
    }

    public void setSno(String sno) {
        this.sno = sno;
    }

    @Override
    public String toString() {
        return "CourseVo1{" +
                "cno='" + cno + '\'' +
                ", cname='" + cname + '\'' +
                ", ctime='" + ctime + '\'' +
                ", ccredit='" + ccredit + '\'' +
                ", tname='" + tname + '\'' +
                ", sno='" + sno + '\'' +
                '}';
    }
}
