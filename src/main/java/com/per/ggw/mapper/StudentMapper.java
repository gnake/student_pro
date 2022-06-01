package com.per.ggw.mapper;

import com.per.ggw.bean.Student;

import java.util.List;

public interface StudentMapper {
    String queryStuPassword(String sno);
    List<Student> queryAllStudent();
    int queryStuSno(String sno);
    Student querySingleStudent(String sno);
}
