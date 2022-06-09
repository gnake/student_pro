package com.per.gnake.dao;

import com.per.gnake.bean.Student;
import com.per.gnake.bean.Vo.CourseVo;
import com.per.gnake.bean.Vo.CourseVo1;

import java.util.List;

public interface StudentDao {
    String queryStuPassword(String sno);
    List<Student> queryAllStudent();
    int queryStuSno(String sno);

    Student querySingleStudent(String sno);
    List<CourseVo> querySelectedCourse(String sno);

    List<CourseVo1> queryAllCourse();

    int addStudent(Student student);

    int deleteStudent(String sno);

    int updateStudent(Student student);
}
