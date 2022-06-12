package com.per.gnake.dao;

import com.per.gnake.bean.Teacher;
import com.per.gnake.bean.Vo.Score;

import java.util.List;

public interface TeacherDao {

    String queryTeaPassowrd(String tno);

    int getSingeTea(String tno);

    Teacher queryTeacher(String tno);

    Teacher queryTeacherByName(String tname);

    List<Score> queryTeacherNeedInputScore(String tno);

    int deleteTeacher(String tno);

    int addTeacher(Teacher teacher);

    int updateTeacher(Teacher teacher);
}
