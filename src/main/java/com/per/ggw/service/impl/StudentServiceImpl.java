package com.per.ggw.service.impl;

import com.per.ggw.bean.Student;
import com.per.ggw.dao.StudentDao;
import com.per.ggw.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentDao studentDao;

    public void setStudentDao(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    @Override
    public String queryStuPassword(String sno) {
        return studentDao.queryStuPassword(sno);
    }

    @Override
    public List<Student> queryAllStudent() {
        return studentDao.queryAllStudent();
    }

    @Override
    public int queryStuSno(String sno) {
        return studentDao.queryStuSno(sno);
    }

    @Override
    public Student querySingleStudent(String sno) {
        return studentDao.querySingleStudent(sno);
    }

}
