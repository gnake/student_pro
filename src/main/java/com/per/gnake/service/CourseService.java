package com.per.gnake.service;

import com.per.gnake.bean.Course;

public interface CourseService {
    int deleteCourse(String cno);

    int addCourse(Course course);

    int updateCourse(Course course);
}
