package com.onlineexam.repository;

import com.onlineexam.models.Question;
import com.onlineexam.models.Test;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends MongoRepository<Question,Integer> {

    List<Question> findByTest(Test test);

	Question getById(int id);
}
