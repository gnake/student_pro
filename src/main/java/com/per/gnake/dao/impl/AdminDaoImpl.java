package com.per.gnake.dao.impl;

import com.per.gnake.bean.Admin;
import com.per.gnake.bean.Course;
import com.per.gnake.bean.Student;
import com.per.gnake.bean.Teacher;
import com.per.gnake.dao.AdminDao;
import com.per.gnake.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AdminDaoImpl implements AdminDao {
    @Autowired
    private AdminMapper adminMapper;
    @Override
    public String queryAdminPassword(String username) {
        return adminMapper.queryAdminPassword(username);
    }

    @Override
    public int queryAdminIsExist(String username) {
        return adminMapper.queryAdminIsExist(username);
    }

    @Override
    public Admin GetAdmin(String username) {
        return adminMapper.GetAdmin(username);
    }

    @Override
    public List<Student> GetAllStudent() {
        return adminMapper.GetAllStudent();
    }

    @Override
    public List<Teacher> GetAllTeacher() {
        return adminMapper.GetAllTeacher();
    }

    @Override
    public List<Course> GetAllCourse() {
        return adminMapper.GetAllCourse();
    }
}
