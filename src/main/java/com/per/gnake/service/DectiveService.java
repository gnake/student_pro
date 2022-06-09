package com.per.gnake.service;

import com.per.gnake.bean.Dective;

public interface DectiveService {
    int pickCourseRecord(Dective dective);

    int IsSelectedCourse(Dective dective);

    int DeleteCourse(Dective dective);

    int updateScore(Dective dective);
}
