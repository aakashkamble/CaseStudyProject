package com.onlineexam.controllers;

import com.onlineexam.dtos.QuizUploadDTO;
import com.onlineexam.models.Test;
import com.onlineexam.models.User;
import com.onlineexam.services.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tests")
public class TestController {

    @Autowired 
    private TestService testService;

    @PostMapping("saveUser")
    public ResponseEntity<?> saveUser(@RequestBody Test test){
        testService.saveTest(test);
        return ResponseEntity.ok().body("Test saved successfully");
    }

    @PostMapping("questions")
    public ResponseEntity<?> uploadQuestions(QuizUploadDTO dto){
        testService.saveQuestions(dto);
        return ResponseEntity.ok().body("Questions uploaded successfully");
    }

    @GetMapping
    public ResponseEntity<?> listall(){
        return ResponseEntity.ok(testService.allTests());
    }

    @GetMapping("questions/{id}")
    public ResponseEntity<?> allquestions(@PathVariable("id") int id){
        return ResponseEntity.ok(testService.findByQuestionsByTestid(id));
    }

    @DeleteMapping("questions/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable("id") int id){
        testService.deleteQuestion(id);
        return ResponseEntity.ok("Question deleted successfully");
    }
    
    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteTest(@PathVariable("id") int id){
        testService.deleteTest(id);
        return ResponseEntity.ok("Test deleted successfully");
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findDetails(@PathVariable("id") int id){
        return ResponseEntity.ok().body(testService.findById(id));
    }
}
