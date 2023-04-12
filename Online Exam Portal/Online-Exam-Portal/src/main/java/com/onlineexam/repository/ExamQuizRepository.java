package com.onlineexam.repository;

import com.onlineexam.models.Exam;

import com.onlineexam.models.ExamQuiz;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamQuizRepository extends MongoRepository<ExamQuiz,Integer> {
    List<ExamQuiz> findByExam(Exam exam);

	ExamQuiz getById(int qid);
}
