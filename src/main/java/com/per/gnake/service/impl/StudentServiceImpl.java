package com.per.gnake.service.impl;

import com.per.gnake.bean.Student;
import com.per.gnake.bean.Vo.CourseVo;
import com.per.gnake.bean.Vo.CourseVo1;
import com.per.gnake.dao.StudentDao;
import com.per.gnake.service.StudentService;
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

    @Override
    public List<CourseVo> querySelectedCourse(String sno) {
        return studentDao.querySelectedCourse(sno);
    }

    @Override
    public List<CourseVo1> queryAllCourse() {
        return studentDao.queryAllCourse();
    }

    @Override
    public int addStudent(Student student) {
        return studentDao.addStudent(student);
    }

    @Override
    public int deleteStudent(String sno) {
        return studentDao.deleteStudent(sno);
    }

    @Override
    public int updateStudent(Student student) {
        return studentDao.updateStudent(student);
    }

}
