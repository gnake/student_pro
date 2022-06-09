package com.per.gnake.dao;

import com.per.gnake.bean.Dective;

public interface DectiveDao {
    int pickCourseRecord(Dective dective);

    int IsSelectedCourse(Dective dective);

    int DeleteCourse(Dective dective);

    int updateScore(Dective dective);
}
