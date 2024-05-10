package com.octest.controllers;

import com.octest.beans.Student;
import com.octest.dao.StudentDaoImpl;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.SQLException;

@Controller
public class gestionControllers {
    StudentDaoImpl studentDao = new StudentDaoImpl();

    @RequestMapping(value = "/", method = RequestMethod. GET )
    public String doGetHome(ModelMap modelMap) throws SQLException, ClassNotFoundException {
        modelMap.addAttribute("listeEtudiants", studentDao.getStudents());
        return "Home";
    }


    @RequestMapping(value = "/Add", method = RequestMethod. POST )
    public String doPostAddStudent(@RequestParam String matricule,
                                   @RequestParam String name,
                                   @RequestParam String email,
                                   @RequestParam int telephone,
                                   @RequestParam String adress,ModelMap modelMap) throws SQLException, ClassNotFoundException {

        Student student = new Student(matricule, name, email, telephone, adress);
        studentDao.insertstudent(student);
        modelMap.addAttribute("result","Etudiant Ajouter avec succès");

        return "addStudent";
    }

    @RequestMapping(value = "/AddStudent", method = RequestMethod. GET )
    public String doGetAddStudent(ModelMap modelMap){

        return "addStudent";
    }


    @RequestMapping(value = "/updateStudent", method = RequestMethod. GET )
    public String doGetUpdateStudent(@RequestParam String matricule,ModelMap modelMap) throws SQLException, ClassNotFoundException {
        Student student = studentDao.getStudentByMatricule(matricule);
        modelMap.addAttribute("etudiant", student);
        return "updateStudent";
    }

    @RequestMapping(value = "/updated", method = RequestMethod. POST )
    public String UpdatedStudent(@RequestParam String matricule,
                                 @RequestParam String name,
                                 @RequestParam String email,
                                 @RequestParam int telephone,
                                 @RequestParam String adress,ModelMap modelMap) throws SQLException, ClassNotFoundException {


        Student student = new Student(matricule, name, email, telephone, adress);
        studentDao.updateStudent(student);
        modelMap.addAttribute("result","Etudiant Modifier avec succès");

        return "updateStudent";
    }
    @RequestMapping(value = "/deleteStudent", method = RequestMethod. POST )
    public String deleteStudent(@RequestParam String matricule, ModelMap modelMap) throws SQLException, ClassNotFoundException {
        studentDao.deleteStudent(matricule);
        return "redirect:/";
    }


}
