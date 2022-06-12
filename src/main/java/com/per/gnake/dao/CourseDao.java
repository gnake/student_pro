package com.per.gnake.dao;

import com.per.gnake.bean.Course;

public interface CourseDao {
    int deleteCourse(String cno);

    int addCourse(Course course);

    int updateCourse(Course course);
}
