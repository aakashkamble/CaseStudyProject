package com.onlineexam.controllers;

import com.onlineexam.dtos.DashboardDTO;
import com.onlineexam.dtos.LoginDTO;
import com.onlineexam.models.User;
import com.onlineexam.services.TestService;
import com.onlineexam.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService uservice;
    @Autowired 
    private TestService testService;

    @GetMapping("/dashboard")
    public ResponseEntity<?> dashboard(){
        DashboardDTO dto=new DashboardDTO();
        dto.setUsers(uservice.countUsers());
        dto.setTests(testService.count());
        return ResponseEntity.ok(dto);
    }


    @PostMapping("/validate")
    public ResponseEntity<?> validate(@RequestBody LoginDTO dto){
        User user=uservice.validate(dto);
        if(user!=null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> saveUser(@RequestBody User user){
        if(uservice.findByUserId(user.getUserid())!=null){
            return ResponseEntity.badRequest().body("Username not available");
        }
        uservice.saveUser(user);
        return ResponseEntity.ok().body("User registered successfully");
    }

    @GetMapping
    public ResponseEntity<?> listall(){
        return ResponseEntity.ok(uservice.allusers());
    }

    @GetMapping("{id}")
    public ResponseEntity<?> findDetails(@PathVariable("id") int id){
        return ResponseEntity.ok().body(uservice.findById(id));
    }
}
