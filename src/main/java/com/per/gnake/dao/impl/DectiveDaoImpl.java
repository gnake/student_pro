package com.per.gnake.dao.impl;

import com.per.gnake.bean.Dective;
import com.per.gnake.dao.DectiveDao;
import com.per.gnake.mapper.DectiveMapper;
import org.springframework.beans.factory.annotation.Autowired;

public class DectiveDaoImpl implements DectiveDao {
    @Autowired
    private DectiveMapper dectiveMapper;
    @Override
    public int pickCourseRecord(Dective dective) {
        return dectiveMapper.pickCourseRecord(dective);
    }

    @Override
    public int IsSelectedCourse(Dective dective) {
        return dectiveMapper.IsSelectedCourse(dective);
    }

    @Override
    public int DeleteCourse(Dective dective) {
        return dectiveMapper.DeleteCourse(dective);
    }
}
