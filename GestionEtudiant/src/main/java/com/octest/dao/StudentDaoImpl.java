package com.octest.dao;

import com.octest.beans.Student;
import com.octest.config.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class StudentDaoImpl implements StudentDao{

    @Override
    public ArrayList<Student> getStudents() throws SQLException, ClassNotFoundException {
        ArrayList<Student> listStudents = new ArrayList();
        try {
        String sql = "SELECT * FROM etudiant";
        PreparedStatement statement = Connection.getConnection().prepareStatement(sql);
        ResultSet resultat = statement.executeQuery();

        while(resultat.next()) {
            String matricule = resultat.getString("matricule");
            String name = resultat.getString("name");
            String email = resultat.getString("email");
            int telephone = resultat.getInt("telephone");
            String adress = resultat.getString("adress");
            Student student = new Student(matricule,name,email,telephone,adress);
            listStudents.add(student);
        }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return listStudents;
    }

    @Override
    public void insertstudent(Student student) throws SQLException, ClassNotFoundException {
        try
        {
        String sql = "INSERT INTO etudiant VALUES(?,?,?,?,?)";
        PreparedStatement statement = Connection.getConnection().prepareStatement(sql);
        statement.setString(1, student.getMatricule());
        statement.setString(2,student.getName());
        statement.setString(3,student.getEmail());
        statement.setInt(4,student.getTelephone());
        statement.setString(5,student.getAdress());
        statement.executeUpdate();
        } catch (ClassNotFoundException | SQLException e) {
             e.printStackTrace();
        }
    }

    @Override
    public void updateStudent(Student student) throws SQLException, ClassNotFoundException {
        try {
        String sql = "update etudiant set name=?,email=?,telephone=?,adress=? where matricule=?";
        PreparedStatement statement = Connection.getConnection().prepareStatement(sql);
        statement.setString(1,student.getName());
        statement.setString(2,student.getEmail());
        statement.setInt(3,student.getTelephone());
        statement.setString(4,student.getAdress());
        statement.setString(5, student.getMatricule());
        statement.executeUpdate();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteStudent(String matricule) throws SQLException, ClassNotFoundException {
        try{
        String sql = "delete from etudiant where matricule=?";
        PreparedStatement statement = Connection.getConnection().prepareStatement(sql);
        statement.setString(1, matricule);
        statement.executeUpdate();
            System.out.println(statement.executeUpdate());
        } catch (ClassNotFoundException | SQLException e) {
        e.printStackTrace();
        }
    }

    @Override
    public Student getStudentByMatricule(String matricule) throws SQLException, ClassNotFoundException {
        try {
            String sql = "SELECT * FROM etudiant where matricule=?";
            PreparedStatement statement = Connection.getConnection().prepareStatement(sql);
            statement.setString(1, matricule);
            ResultSet resultat = statement.executeQuery();

            while(resultat.next()) {
                String name = resultat.getString("name");
                String email = resultat.getString("email");
                int telephone = resultat.getInt("telephone");
                String adress = resultat.getString("adress");
                Student student = new Student(matricule,name,email,telephone,adress);
                return student;
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
