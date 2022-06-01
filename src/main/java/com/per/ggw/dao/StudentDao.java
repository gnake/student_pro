package com.per.ggw.dao;

import com.per.ggw.bean.Student;
import java.util.List;

public interface StudentDao {
    String queryStuPassword(String sno);
    List<Student> queryAllStudent();
    int queryStuSno(String sno);

    Student querySingleStudent(String sno);
}
