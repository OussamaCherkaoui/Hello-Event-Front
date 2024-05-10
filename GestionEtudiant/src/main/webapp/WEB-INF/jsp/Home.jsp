<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Liste des étudiants</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fffafa;
            height: 3em;
        }
        h1 {
            text-align: center;
            color: #149cfa;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #fffafa;
            color: #180f68;
        }

        table th, table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        table th {
            color: #180f68;
            background-color: #f2f2f2;
        }
        .action-buttons {
            display: flex;
            justify-content: space-between;
        }

        .action-buttons button {
            padding: 5px 10px;
            cursor: pointer;
        }

        .edit {
            display: inline-block;
            padding: 8px 16px;
            text-align: center;
            text-decoration: none;
            color: #ffffff;
            background-color: #007bff;
            border-radius: 4px;
            border: none;
            cursor: pointer;
        }

        .edit:hover {
            background-color: #0056b3;
        }

        .action-buttons button.delete {
            background-color: #f44336;
            color: white;
            border: none;
        }
        .action-buttons button.delete:hover {
            background-color: #da3428;
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
</head>
<body>
<nav>
    <div>
        <a href="/GestionEtudiant/"><img src="https://i.ibb.co/ncHyx9G/t-l-chargement.png" style="border-radius: 10px" alt="Logo"></a>
    </div>
    <div>
        <ul>
            <li><a href="/GestionEtudiant/">Accueil</a></li>
            <li><a href="/GestionEtudiant/AddStudent">Ajouter Étudiant</a></li>
        </ul>
    </div>
</nav>

<h1>Liste des étudiants</h1>

<table>
    <thead>
    <tr>
        <th>Matricule</th>
        <th>Nom</th>
        <th>Email</th>
        <th>Téléphone</th>
        <th>Adresse</th>
        <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach items="${listeEtudiants}" var="etudiant">
        <form action="deleteStudent" method="post">
        <input type="hidden" value="${etudiant.getMatricule()}" name="matricule">
            <tr>
                <td>${etudiant.getMatricule()}</td>
                <td>${etudiant.getName()}</td>
                <td>${etudiant.getEmail()}</td>
                <td>${etudiant.getTelephone()}</td>
                <td>${etudiant.getAdress()}</td>
                <td class="action-buttons">
                    <a href="/GestionEtudiant/updateStudent?matricule=${etudiant.getMatricule()}" class="edit">Modifier</a>
                    <button type="submit" class="delete">Supprimer</button>
                </td>
            </tr>
    </form>
    </c:forEach>
    </tbody>
</table>

</body>
</html>