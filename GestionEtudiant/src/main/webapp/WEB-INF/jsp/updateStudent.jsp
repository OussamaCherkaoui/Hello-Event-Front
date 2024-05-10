<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Update Student</title>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #fffafa;
    }

    .container {
        width: 80%;
        margin: 20px auto;
        background-color: #fff;
        padding: 8px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
        margin-top: 0;
        text-align: center;
        color: #149cfa;
    }

    .form-group {
        margin-bottom: 10px;
    }

    label {
        display: block;
        margin-bottom: 3px;
        color: #333;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"] {
        width: 95%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
    nav {
        background-color: #e51b1b;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }

    nav img {
        height: 45px;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    nav ul li {
        display: inline;
        margin-left: 20px;
    }

    nav ul li a {
        text-decoration: none;
        color: #ffffff;
        line-height: 33px;
        padding: 0 10px;
        font-family: sans-serif;
        font-size: 18px;
        font-weight:bold;
    }

    nav ul li a:hover {
        text-decoration: none;
        color: aliceblue;
    }
</style>
<body>
<nav>
    <div>
        <a href="/GestionEtudiant/"><img src="https://i.ibb.co/ncHyx9G/t-l-chargement.png" style="border-radius: 8px" alt="Logo"></a>
    </div>
    <div>
        <ul>
            <li><a href="/GestionEtudiant/">Accueil</a></li>
            <li><a href="/GestionEtudiant/AddStudent">Ajouter Étudiant</a></li>
        </ul>
    </div>
</nav>
<div class="container">
    <h2>Modifier Étudiant</h2>
    <form action="updated" method="post">
        <div class="form-group">
            <label for="matricule">Matricule :</label>
            <input type="text" id="matricule" name="matricule" value="${etudiant.getMatricule()}" required>
        </div>
        <div class="form-group">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" value="${etudiant.getName()}" required>
        </div>
        <div class="form-group">
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" value="${etudiant.getEmail()}" required>
        </div>
        <div class="form-group">
            <label for="telephone">Téléphone :</label>
            <input type="tel" id="telephone" name="telephone" value="${etudiant.getTelephone()}" required>
        </div>
        <div class="form-group">
            <label for="adress">Adresse :</label>
            <input type="text" id="adress" name="adress" value="${etudiant.getAdress()}" required>
        </div>
        <button type="submit">Modifier Étudiant</button>
    </form>
    <div style="color: #4CAF50;text-align: center">
        <c:if test="${ not empty result}">${result}</c:if>
    </div>
</div>
</body>
</html>

