package com.per.gnake.service.impl;

import com.per.gnake.bean.Teacher;
import com.per.gnake.bean.Vo.Score;
import com.per.gnake.dao.TeacherDao;
import com.per.gnake.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TeacherServiceImpl implements TeacherService {

    @Autowired
    private TeacherDao teacherDao;

    public void setTeacherDao(TeacherDao teacherDao) {
        this.teacherDao = teacherDao;
    }

    @Override
    public String queryTeaPassowrd(String tno) {
        return teacherDao.queryTeaPassowrd(tno);
    }

    @Override
    public int getSingeTea(String tno) {
        return teacherDao.getSingeTea(tno);
    }

    @Override
    public Teacher queryTeacher(String tno) {
        return teacherDao.queryTeacher(tno);
    }

    @Override
    public Teacher queryTeacherByName(String tname) {
        return teacherDao.queryTeacherByName(tname);
    }

    @Override
    public List<Score> queryTeacherNeedInputScore(String tno) {
        return teacherDao.queryTeacherNeedInputScore(tno);
    }
}
