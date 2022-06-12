package com.per.gnake.controller;

import com.per.gnake.bean.Login;
import com.per.gnake.bean.Teacher;
import com.per.gnake.bean.Vo.Score;
import com.per.gnake.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/teacherController")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    //登录
    @RequestMapping("/teaLogin")
    public String teaLogin(Login login, Model model) {
        String tno = login.getUsername();
        String tpassword = login.getPassword();

        String password = teacherService.queryTeaPassowrd(tno);

        Teacher teacher = teacherService.queryTeacher(tno);

        int row = teacherService.getSingeTea(tno);

        List<Score> scores = teacherService.queryTeacherNeedInputScore(tno);

        if(row > 0) {
            if(tpassword.equals(password)) {
                model.addAttribute("teacher",teacher);
                model.addAttribute("scores",scores);
//                System.out.println("登录成功");
                return "teacher";
            } else {
                model.addAttribute("msg","用户名或密码错误");
                System.out.println("用户名或密码错误");
                return "login";
            }
        } else {
            model.addAttribute("msg","用户不存在");
            System.out.println("用户不存在");
            return "login";
        }
    }

    //删除老师
    @ResponseBody
    @RequestMapping("/deleteTeacher")
    public String deleteTeacher(String tno) {
        int row = teacherService.deleteTeacher(tno);
        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }

    //增加老师
    @ResponseBody
    @RequestMapping("/addTeacher")
    public String addTeacher(Teacher teacher) {
        int row = teacherService.addTeacher(teacher);
        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }

    //修改
    @ResponseBody
    @RequestMapping("/updateTeacher")
    public String updateTeacher(Teacher teacher) {
        int row = teacherService.updateTeacher(teacher);
        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }
}
