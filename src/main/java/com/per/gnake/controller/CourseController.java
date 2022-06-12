package com.per.gnake.controller;

import com.per.gnake.bean.Course;
import com.per.gnake.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/courseController")
public class CourseController {

    @Autowired
    private CourseService courseService;

    //删除
    @ResponseBody
    @RequestMapping("/deleteCourse")
    public String deleteCourse(String cno) {
        int row = courseService.deleteCourse(cno);

        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }

    //增加课程
    @ResponseBody
    @RequestMapping("/addCourse")
    public String addCourse(Course course) {
        int row = courseService.addCourse(course);
        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }

    //修改
    @ResponseBody
    @RequestMapping("/updateCourse")
    public String updateCourse(Course course) {
        int row = courseService.updateCourse(course);
        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }
}
