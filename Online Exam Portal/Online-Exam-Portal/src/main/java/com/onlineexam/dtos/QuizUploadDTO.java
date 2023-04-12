package com.onlineexam.dtos;

import org.springframework.web.multipart.MultipartFile;

public class QuizUploadDTO {
    private int testid;
    private MultipartFile file;

    public int getTestid() {
        return testid;
    }

    public void setTestid(int testid) {
        this.testid = testid;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
