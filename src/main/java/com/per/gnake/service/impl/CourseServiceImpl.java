package com.per.gnake.service.impl;

import com.per.gnake.bean.Course;
import com.per.gnake.dao.CourseDao;
import com.per.gnake.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;

public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao courseDao;

    public void setCourseDao(CourseDao courseDao) {
        this.courseDao = courseDao;
    }

    @Override
    public int deleteCourse(String cno) {
        return courseDao.deleteCourse(cno);
    }

    @Override
    public int addCourse(Course course) {
        return courseDao.addCourse(course);
    }

    @Override
    public int updateCourse(Course course) {
        return courseDao.updateCourse(course);
    }
}
