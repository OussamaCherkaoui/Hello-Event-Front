package com.octest.dao;

import com.octest.beans.Student;

import java.sql.SQLException;
import java.util.ArrayList;

public interface StudentDao {
    ArrayList<Student> getStudents() throws SQLException, ClassNotFoundException;
    void insertstudent(Student student) throws SQLException, ClassNotFoundException;
    void updateStudent(Student student) throws SQLException, ClassNotFoundException;
    void deleteStudent(String matricule) throws SQLException, ClassNotFoundException;
    Student getStudentByMatricule(String matricule) throws SQLException, ClassNotFoundException;
}
