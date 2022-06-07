package com.per.gnake.controller;

import com.per.gnake.bean.*;
import com.per.gnake.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/adminController")
public class AdminController {

    @Autowired
    private AdminService adminService;

    //登录
    @RequestMapping("/adminLogin")
    public String adminToLogin(Login login, Model model) {

        String username = login.getUsername();
        String password = login.getPassword();
        String pwd = adminService.queryAdminPassword(username);

        Admin admin = adminService.GetAdmin(username);
        List<Student> students = adminService.GetAllStudent();
        List<Teacher> teachers = adminService.GetAllTeacher();
        List<Course> courses = adminService.GetAllCourse();
        int row = adminService.queryAdminIsExist(username);

        if(row > 0) {
            if(password.equals(pwd)) {
                model.addAttribute("admin",admin);
                model.addAttribute("students",students);
                model.addAttribute("teachers",teachers);
                model.addAttribute("courses",courses);
//                System.out.println("登录成功");
                return "admin";
            } else {
                model.addAttribute("msg","用户名或密码错误");
                return "login";
            }
        } else {
            model.addAttribute("msg","用户不存在");
            return "login";
        }
    }
}
