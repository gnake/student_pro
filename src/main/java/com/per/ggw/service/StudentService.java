package com.per.ggw.service;

import com.per.ggw.bean.Student;
import java.util.List;

public interface StudentService {
    String queryStuPassword(String sno);
    List<Student> queryAllStudent();
    int queryStuSno(String sno);
    Student querySingleStudent(String sno);
}
