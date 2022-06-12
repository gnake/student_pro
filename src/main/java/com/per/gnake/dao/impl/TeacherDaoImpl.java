package com.per.gnake.dao.impl;

import com.per.gnake.bean.Teacher;
import com.per.gnake.bean.Vo.Score;
import com.per.gnake.dao.TeacherDao;
import com.per.gnake.mapper.TeacherMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TeacherDaoImpl implements TeacherDao {

    @Autowired
    private TeacherMapper teacherMapper;
    @Override
    public String queryTeaPassowrd(String tno) {
        return teacherMapper.queryTeaPassowrd(tno);
    }

    @Override
    public int getSingeTea(String tno) {
        return teacherMapper.getSingeTea(tno);
    }

    @Override
    public Teacher queryTeacher(String tno) {
        return teacherMapper.queryTeacher(tno);
    }

    @Override
    public Teacher queryTeacherByName(String tname) {
        return teacherMapper.queryTeacherByName(tname);
    }

    @Override
    public List<Score> queryTeacherNeedInputScore(String tno) {
        return teacherMapper.queryTeacherNeedInputScore(tno);
    }

    @Override
    public int deleteTeacher(String tno) {
        return teacherMapper.deleteTeacher(tno);
    }

    @Override
    public int addTeacher(Teacher teacher) {
        return teacherMapper.addTeacher(teacher);
    }

    @Override
    public int updateTeacher(Teacher teacher) {
        return teacherMapper.updateTeacher(teacher);
    }
}
