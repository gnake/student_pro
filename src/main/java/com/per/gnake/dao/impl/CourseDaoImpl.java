package com.per.gnake.dao.impl;

import com.per.gnake.bean.Course;
import com.per.gnake.dao.CourseDao;
import com.per.gnake.mapper.CourseMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class CourseDaoImpl implements CourseDao {
    @Autowired
    private CourseMapper courseMapper;
    @Override
    public int deleteCourse(String cno) {
        return courseMapper.deleteCourse(cno);
    }

    @Override
    public int addCourse(Course course) {
        return courseMapper.addCourse(course);
    }

    @Override
    public int updateCourse(Course course) {
        return courseMapper.updateCourse(course);
    }
}
