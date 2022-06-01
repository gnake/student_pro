package com.per.ggw.dao.impl;

import com.per.ggw.bean.Student;
import com.per.ggw.dao.StudentDao;
import com.per.ggw.mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class StudentDaoImpl implements StudentDao {
    @Autowired
    private StudentMapper studentMapper;
    @Override
    public String queryStuPassword(String sno) {
        return studentMapper.queryStuPassword(sno);
    }
    @Override
    public List<Student> queryAllStudent() {
        return studentMapper.queryAllStudent();
    }

    @Override
    public int queryStuSno(String sno) {
        return studentMapper.queryStuSno(sno);
    }

    @Override
    public Student querySingleStudent(String sno) {
        return studentMapper.querySingleStudent(sno);
    }

}
