package com.per.gnake.service;

import com.per.gnake.bean.Admin;
import com.per.gnake.bean.Course;
import com.per.gnake.bean.Student;
import com.per.gnake.bean.Teacher;

import java.util.List;

public interface AdminService {
    String queryAdminPassword(String username);

    int queryAdminIsExist(String username);

    Admin GetAdmin(String username);

    List<Student> GetAllStudent();

    List<Teacher> GetAllTeacher();

    List<Course> GetAllCourse();
}
