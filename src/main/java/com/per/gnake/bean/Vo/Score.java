package com.per.gnake.bean.Vo;

public class Score {
    private String cno;
    private String cname;
    private String sno;
    private String sname;
    private String sclass;
    private int score;
    private String tno;
    public Score() {

    }

    public Score(String cno, String cname, String sno, String sname, String sclass, int score, String tno) {
        this.cno = cno;
        this.cname = cname;
        this.sno = sno;
        this.sname = sname;
        this.sclass = sclass;
        this.score = score;
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

    public String getSclass() {
        return sclass;
    }

    public void setSclass(String sclass) {
        this.sclass = sclass;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getTno() {
        return tno;
    }

    public void setTno(String tno) {
        this.tno = tno;
    }

    @Override
    public String toString() {
        return "Score{" +
                "cno='" + cno + '\'' +
                ", cname='" + cname + '\'' +
                ", sno='" + sno + '\'' +
                ", sname='" + sname + '\'' +
                ", sclass='" + sclass + '\'' +
                ", score='" + score + '\'' +
                ", tno='" + tno + '\'' +
                '}';
    }
}
