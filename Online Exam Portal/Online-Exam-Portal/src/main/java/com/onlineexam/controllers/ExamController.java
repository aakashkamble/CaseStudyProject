package com.onlineexam.controllers;

import com.onlineexam.dtos.AnswerDTO;
import com.onlineexam.dtos.ExamDTO;
import com.onlineexam.models.Exam;
import com.onlineexam.services.ExamService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/exams")
public class ExamController {

    @Autowired 
    private ExamService examService;

    @PostMapping("/saveExam")
    public ResponseEntity<?> saveExam(@RequestBody ExamDTO dto){
        if(examService.checkTestTaken(dto)){
            return ResponseEntity.badRequest().body("Exam already taken by user");
        }
        examService.saveExam(dto);
        return ResponseEntity.ok("Enrolled successfully");
    }

    @PostMapping("answers")
    public ResponseEntity<?> saveAnswer(@RequestBody AnswerDTO dto){
        examService.saveAnswer(dto);
        return ResponseEntity.ok("Answer saved successfully");
    }

    @PostMapping("submit")
    public ResponseEntity<?> submitExam(@RequestBody AnswerDTO dto){
        examService.submitExam(dto);
        return ResponseEntity.ok("Exam submitted successfully");
    }

    @GetMapping
    public ResponseEntity<?> listall(Optional<Integer> userid){
    	if(userid.isPresent()) {
        return ResponseEntity.ok(examService.userExams(userid.get()));
    	}
    	else {
    		return ResponseEntity.ok(examService.allExams());
    	}
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findDetails(@PathVariable("id") int id){
        return ResponseEntity.ok().body(examService.findById(id));
    }

    @GetMapping("questions/{id}")
    public ResponseEntity<?> findExamQuestions(@PathVariable("id") int id){
        return ResponseEntity.ok().body(examService.allExamQuizs(id));
    }
}
