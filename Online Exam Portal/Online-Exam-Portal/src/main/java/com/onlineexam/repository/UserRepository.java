package com.onlineexam.repository;

import com.onlineexam.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,Integer> {
    User findByUserid(String userid);

	User getById(int id);
}
