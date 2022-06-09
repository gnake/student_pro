package com.per.gnake.controller;

import com.per.gnake.bean.Dective;
import com.per.gnake.bean.Teacher;
import com.per.gnake.bean.Vo.CourseVo1;
import com.per.gnake.bean.Vo.Score;
import com.per.gnake.service.DectiveService;
import com.per.gnake.service.StudentService;
import com.per.gnake.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/dectiveController")
public class DectiveController {

    @Autowired
    private DectiveService dectiveService;
    @Autowired
    private TeacherService teacherService;
    @Autowired
    private StudentService studentService;


    //学生选课
    @ResponseBody
    @RequestMapping("/pickCourse")
    public String pickCourse(CourseVo1 courseVo1) {
//        System.out.println(courseVo1);

        String sno = courseVo1.getSno();
        String cno = courseVo1.getCno();
        String tname = courseVo1.getTname();
        Teacher teacher = teacherService.queryTeacherByName(tname);
        String tno = teacher.getTno();

        Dective dective = new Dective();
        dective.setSno(sno);
        dective.setCno(cno);
        dective.setTno(tno);

        //前端不好判断，只可一报出异常，无法报出准确的已选课程无法再选
        //判断学号选的课是否被选过
        int IsSelect = dectiveService.IsSelectedCourse(dective);

        if(IsSelect > 0) {
            System.out.println("此学生 " + courseVo1.getCname() + " 的课不可重复选") ;
            return "IsSelected";
        } else {
            int row = dectiveService.pickCourseRecord(dective);
            if(row > 0) {
//            System.out.println("选课成功");
                return "success";
            } else {
                System.out.println("选课失败");
                return "error";
            }
        }
    }

    //退选课程
    @ResponseBody
    @RequestMapping("/exitSelectCourse")
    public String exitRaceCourse(CourseVo1 courseVo1) {

        String sno = courseVo1.getSno();
        String cno = courseVo1.getCno();
        String tname = courseVo1.getTname();
        Teacher teacher = teacherService.queryTeacherByName(tname);
        String tno = teacher.getTno();

        Dective dective = new Dective();
        dective.setSno(sno);
        dective.setCno(cno);
        dective.setTno(tno);

        int rows = dectiveService.DeleteCourse(dective);
        if(rows > 0) {
//            System.out.println("退选成功");
            return "success";
        } else {
            System.out.println("退选失败");
            return "error";
        }
    }


    //录入成绩
    @ResponseBody
    @RequestMapping("/inputScore")
    public String inputScore(Score score, Model model) {
//        System.out.println(score);
        String sno = score.getSno();
        String cno = score.getCno();
        String tno = score.getTno();
        int achievement = score.getScore();
        Dective dective = new Dective(sno,tno,cno,achievement);

        int rows = dectiveService.updateScore(dective);

        if(rows > 0) {
//            System.out.println("录入成绩成功");
            return "success";
        } else {
            System.out.println("录入成绩失败");
            return "error";
        }

    }

}
