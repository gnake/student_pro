package com.per.gnake.bean.Vo;

//查看已选课程
public class CourseVo {
    private String cno;
    private String cname;
    private String ccredit;
    private String score;

    public CourseVo() {

    }
    public CourseVo(String cno, String cname, String ccredit, String score) {
        this.cno = cno;
        this.cname = cname;
        this.ccredit = ccredit;
        this.score = score;
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

    public String getCcredit() {
        return ccredit;
    }

    public void setCcredit(String ccredit) {
        this.ccredit = ccredit;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "CourseVo{" +
                "cno='" + cno + '\'' +
                ", cname='" + cname + '\'' +
                ", ccredit='" + ccredit + '\'' +
                ", score='" + score + '\'' +
                '}';
    }
}
