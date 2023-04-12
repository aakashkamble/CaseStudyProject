package com.onlineexam.services;

import com.onlineexam.dtos.AnswerDTO;
import com.onlineexam.dtos.ExamDTO;
import com.onlineexam.models.Exam;
import com.onlineexam.models.ExamQuiz;
import com.onlineexam.models.Question;
import com.onlineexam.models.Test;
import com.onlineexam.repository.ExamQuizRepository;
import com.onlineexam.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
public class ExamService {
    @Autowired
    private ExamRepository repo;
    @Autowired 
    private UserService userService;
    @Autowired 
    private TestService testService;
    @Autowired 
    private ExamQuizRepository examQuizRepository;

    public void saveExam(ExamDTO dto){
        Exam exam=new Exam();
        Test test=testService.findById(dto.getTestid());
        exam.setTest(test);
        exam.setUser(userService.findById(dto.getUserid()));
        exam=repo.save(exam);

        List<Question> questions=testService.findByQuestionsByTestid(dto.getTestid());
        Collections.shuffle(questions);
        List<ExamQuiz> examQuizs=new ArrayList<>();
        int i=1;
        for(Question q : questions){
            examQuizs.add(new ExamQuiz(i++,test,exam,q));
        }
        examQuizRepository.saveAll(examQuizs);
    }

    public boolean checkTestTaken(ExamDTO dto){
        return repo.findByTestAndUser(testService.findById(dto.getTestid()), userService.findById(dto.getUserid()))!=null;
    }

    public void saveAnswer(AnswerDTO dto){
        ExamQuiz examQuiz= examQuizRepository.getById(dto.getQid());
        examQuiz.setUserans(dto.getAnswer());
        examQuizRepository.save(examQuiz);
    }

    public void submitExam(AnswerDTO dto){
        Exam exam=repo.getById(dto.getExamid());
        exam.setStatus("Completed");
        int total=0;
        for(ExamQuiz eq : examQuizRepository.findByExam(exam))
        {
            if(eq.getUserans()==eq.getQuestion().getAnswer())
                total+=eq.getQuestion().getMarks();
        }
        exam.setTestScore(total);
        repo.save(exam);
    }

    public List<Exam> allExams(){
        return repo.findAll(Sort.by(Sort.Direction.DESC,"id"));
    }
    
    public List<Exam> userExams(int userid){
        return repo.findByUser(userService.findById(userid));
    }

    public void deleteExam(int id){
        repo.delete(repo.getById(id));
    }

    public Exam findById(int id){
        return repo.getById(id);
    }

    public List<ExamQuiz> allExamQuizs(int id){
        return examQuizRepository.findByExam(repo.getById(id));
    }
}
