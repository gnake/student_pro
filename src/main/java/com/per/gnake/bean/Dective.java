package com.per.gnake.bean;

public class Dective {
    private String sno;
    private String tno;
    private String cno;
    private String score;

    public Dective(String sno, String tno, String cno, String socre) {
        this.sno = sno;
        this.tno = tno;
        this.cno = cno;
        this.score = socre;
    }

    public Dective() {

    }

    public String getSno() {
        return sno;
    }

    public void setSno(String sno) {
        this.sno = sno;
    }

    public String getTno() {
        return tno;
    }

    public void setTno(String tno) {
        this.tno = tno;
    }

    public String getCno() {
        return cno;
    }

    public void setCno(String cno) {
        this.cno = cno;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Dective{" +
                "sno='" + sno + '\'' +
                ", tno='" + tno + '\'' +
                ", cno='" + cno + '\'' +
                ", score='" + score + '\'' +
                '}';
    }
}
