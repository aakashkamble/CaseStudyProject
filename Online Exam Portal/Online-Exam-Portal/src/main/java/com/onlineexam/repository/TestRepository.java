package com.onlineexam.repository;

import com.onlineexam.models.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends MongoRepository<Test,Integer> {

	Test getById(int id);
}
