package com.octest.config;

import java.sql.DriverManager;
import java.sql.SQLException;

public class Connection {
    private static final String url = "jdbc:mysql://localhost:3306/gestionEtudiants";
    private static final String username = "root";
    private static final String password = "";

    public static java.sql.Connection getConnection() throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(url, username, password);
    }
}
