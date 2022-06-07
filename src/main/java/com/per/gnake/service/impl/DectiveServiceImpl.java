package com.per.gnake.service.impl;

import com.per.gnake.bean.Dective;
import com.per.gnake.dao.DectiveDao;
import com.per.gnake.service.DectiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DectiveServiceImpl implements DectiveService {

    @Autowired
    private DectiveDao dectiveDao;

    public void setDectiveDao(DectiveDao dectiveDao) {
        this.dectiveDao = dectiveDao;
    }

    @Override
    public int pickCourseRecord(Dective dective) {
        return dectiveDao.pickCourseRecord(dective);
    }

    @Override
    public int IsSelectedCourse(Dective dective) {
        return dectiveDao.IsSelectedCourse(dective);
    }

    @Override
    public int DeleteCourse(Dective dective) {
        return dectiveDao.DeleteCourse(dective);
    }
}
