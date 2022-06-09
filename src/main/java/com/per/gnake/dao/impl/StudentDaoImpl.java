package com.per.gnake.dao.impl;

import com.per.gnake.bean.Student;
import com.per.gnake.bean.Vo.CourseVo;
import com.per.gnake.bean.Vo.CourseVo1;
import com.per.gnake.dao.StudentDao;
import com.per.gnake.mapper.StudentMapper;
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

    @Override
    public List<CourseVo> querySelectedCourse(String sno) {
        return studentMapper.querySelectedCourse(sno);
    }

    @Override
    public List<CourseVo1> queryAllCourse() {
        return studentMapper.queryAllCourse();
    }

    @Override
    public int addStudent(Student student) {
        return studentMapper.addStudent(student);
    }

    @Override
    public int deleteStudent(String sno) {
        return studentMapper.deleteStudent(sno);
    }

    @Override
    public int updateStudent(Student student) {
        return studentMapper.updateStudent(student);
    }

}
