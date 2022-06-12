package com.per.gnake.mapper;

import com.per.gnake.bean.Course;

public interface CourseMapper {
    int deleteCourse(String cno);

    int addCourse(Course course);

    int updateCourse(Course course);
}
