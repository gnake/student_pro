package com.per.gnake.mapper;

import com.per.gnake.bean.Dective;

public interface DectiveMapper {
    int pickCourseRecord(Dective dective);

    int IsSelectedCourse(Dective dective);

    int DeleteCourse(Dective dective);
}
