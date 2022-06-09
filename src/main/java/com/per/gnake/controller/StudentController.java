package com.per.gnake.controller;

import com.per.gnake.bean.Login;
import com.per.gnake.bean.Student;
import com.per.gnake.bean.Vo.CourseVo;
import com.per.gnake.bean.Vo.CourseVo1;
import com.per.gnake.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/studentController")
public class StudentController {
    @Autowired
    private StudentService studentService;

    //登录
    @RequestMapping("/stuLogin")
    public String Login(Login login, Model model){
        String sno = login.getUsername();
        String spassword = login.getPassword();

        String password = studentService.queryStuPassword(sno);
//        System.out.println(password + " " + spassword);

        Student student = studentService.querySingleStudent(sno);
//        System.out.println(student);

        //查看已选课程
        List<CourseVo> courseVos = studentService.querySelectedCourse(sno);
//        System.out.println(courseVos);

        //选课与退选
        List<CourseVo1> courseVo1s = studentService.queryAllCourse();
//        System.out.println(courseVo1s);

        int row = studentService.queryStuSno(sno);
        if(row > 0) {
            if(spassword.equals(password)) {
                model.addAttribute("student",student);
                model.addAttribute("courseVos",courseVos);
                model.addAttribute("courseVo1s",courseVo1s);
//                System.out.println("登录成功");
                return "student";
            } else {
                model.addAttribute("msg","用户名或密码错误");
                System.out.println("用户名或密码错误！");
                return "login";
            }
        } else {
            model.addAttribute("msg","用户不存在");
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


    //管理员增加学生
    @ResponseBody
    @RequestMapping("/addStudent")
    public String addStudent(Student student) {
        int row = studentService.queryStuSno(student.getSno());

        if(row > 0) {
            return "isExist";
        }

        int rows = studentService.addStudent(student);
        if(rows > 0) {
            return "success";
        } else {
            return "error";
        }
    }

    //查看学生
    //登录函数中学生信息存在student中

    //删除学生
    @ResponseBody
    @RequestMapping("/deleteStudent")
    public String deleteStudent(String sno) {
        int row = studentService.deleteStudent(sno);

        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }

    //管理员修改学生，（没有修改密码）
    @ResponseBody
    @RequestMapping("/updateStudent")
    public String updateStudent(Student student) {

        if(student.getSpassword() == null || student.getSpassword() == "") {
            String pwd = studentService.queryStuPassword(student.getSno());
            student.setSpassword(pwd);
        }

        int row = studentService.updateStudent(student);

        if(row > 0) {
            return "success";
        } else {
            return "error";
        }
    }
}
