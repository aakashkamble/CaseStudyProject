package com.onlineexam.services;

import com.onlineexam.dtos.QuizUploadDTO;
import com.onlineexam.models.Question;
import com.onlineexam.models.Test;
import com.onlineexam.repository.QuestionRepository;
import com.onlineexam.repository.TestRepository;
import com.onlineexam.utils.CSVHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    @Autowired 
    private TestRepository repo;
    @Autowired 
    private QuestionRepository qrepo;

    public void saveTest(Test test){
        repo.save(test);
    }

    public List<Test> allTests(){
        return repo.findAll(Sort.by(Sort.Direction.DESC,"id"));
    }

    public long count(){
        return repo.count();
    }

    public void deleteTest(int id){
        repo.delete(repo.getById(id));
    }

    public Test findById(int id){
        return repo.getById(id);
    }

    public void saveQuestions(QuizUploadDTO dto){
        try {
            List<Question> questions = CSVHelper.csvToQuestions(dto.getFile().getInputStream(), repo.getById(dto.getTestid()));
            qrepo.saveAll(questions);
        }catch (Exception ex){
            System.out.println("Error occurred "+ex.getMessage());
        }
    }

    public void deleteQuestion(int id){
        qrepo.delete(qrepo.getById(id));
    }

    public List<Question> findByQuestionsByTestid(int id){
        return qrepo.findByTest(repo.getById(id));
    }

    public Question findQuestionById(int id){
        return qrepo.getById(id);
    }
}
