package com.onlineexam.services;

import com.onlineexam.dtos.LoginDTO;
import com.onlineexam.models.User;
import com.onlineexam.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired 
    private UserRepository repo;

    public User saveUser(User user){
        return repo.save(user);
    }

    public List<User> allusers(){
        return repo.findAll(Sort.by(Sort.Direction.DESC,"id"));
    }

    public long countUsers(){
        return repo.count();
    }

    public User findById(int id){
        return repo.getById(id);
    }

    public User findByUserId(String id){
        return repo.findByUserid(id);
    }

    public User validate(LoginDTO dto){
        User user=findByUserId(dto.getUserid());
        if(user!=null && user.getPassword().equals(dto.getPassword())){
            return user;
        }
        return null;
    }
}
