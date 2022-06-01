package com.per.ggw.controller;

import com.per.ggw.bean.Login;
import com.per.ggw.bean.Student;
import com.per.ggw.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/studentController")
public class StudentController {
    @Autowired
    private StudentService studentService;

    //登录
    @RequestMapping("/login")
    public String Login(Login login, HttpServletRequest request){
        String sno = login.getUsername();
        String spassword = login.getPassword();
        String password = studentService.queryStuPassword(sno);
//        System.out.println(password + " " + spassword);
        Student student = studentService.querySingleStudent(sno);
//        System.out.println(student);
        int row = studentService.queryStuSno(sno);
        if(row > 0) {
            if(spassword.equals(password)) {
                request.setAttribute("student",student);
//                System.out.println("登录成功");
                return "student";
            } else {
                request.setAttribute("msg","用户名或密码错误");
                System.out.println("用户名或密码错误！");
                return "login";
            }
        } else {
            request.setAttribute("msg","用户不存在");
            System.out.println("用户不存在");
            return "login";
        }

    }

    //得到所有学生信息
    @RequestMapping("/getAllStudent")
    public String QueryAllStudent(Map<String, List<Student>> map) {
        List<Student> students = studentService.queryAllStudent();
        map.put("students",students);
        return "student";
    }

    //查看所有学生信息
    @RequestMapping("/MyInformation")
    public String MyInformation(String sno, Model model) {
        Student student = studentService.querySingleStudent(sno);
        model.addAttribute("student",student);
        return "student";
    }
}
