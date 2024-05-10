package com.octest.beans;

public class Student {
    private String matricule;
    private String name;
    private String email;
    private int Telephone;

    public Student(String matricule, String name, String email, int telephone, String adress) {
        this.matricule = matricule;
        this.name = name;
        this.email = email;
        Telephone = telephone;
        this.adress = adress;
    }

    private String adress;

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getName() {
        return name;
    }

    public void setName(String nom) {
        this.name = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getTelephone() {
        return Telephone;
    }

    public void setTelephone(int telephone) {
        Telephone = telephone;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

}
