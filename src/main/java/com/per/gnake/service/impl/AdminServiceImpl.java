package com.per.gnake.service.impl;

import com.per.gnake.bean.Admin;
import com.per.gnake.bean.Course;
import com.per.gnake.bean.Student;
import com.per.gnake.bean.Teacher;
import com.per.gnake.dao.AdminDao;
import com.per.gnake.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminDao adminDao;

    public void setAdminDao(AdminDao adminDao) {
        this.adminDao = adminDao;
    }

    @Override
    public String queryAdminPassword(String username) {
        return adminDao.queryAdminPassword(username);
    }

    @Override
    public int queryAdminIsExist(String username) {
        return adminDao.queryAdminIsExist(username);
    }

    @Override
    public Admin GetAdmin(String username) {
        return adminDao.GetAdmin(username);
    }

    @Override
    public List<Student> GetAllStudent() {
        return adminDao.GetAllStudent();
    }

    @Override
    public List<Teacher> GetAllTeacher() {
        return adminDao.GetAllTeacher();
    }

    @Override
    public List<Course> GetAllCourse() {
        return adminDao.GetAllCourse();
    }
}
