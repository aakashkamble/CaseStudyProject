package com.onlineexam.dtos;

public class DashboardDTO {
    private long users;
    private long tests;
    private long exams;

    public long getUsers() {
        return users;
    }

    public void setUsers(long users) {
        this.users = users;
    }

    public long getTests() {
        return tests;
    }

    public void setTests(long tests) {
        this.tests = tests;
    }

    public long getExams() {
        return exams;
    }

    public void setExams(long exams) {
        this.exams = exams;
    }
}
