package com.onlineexam.utils;

import com.onlineexam.models.Question;
import com.onlineexam.models.Test;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class CSVHelper {

    public static List<Question> csvToQuestions(InputStream is, Test test) {
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

            List<Question> questions = new ArrayList<>();

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();

            for (CSVRecord csvRecord : csvRecords) {
                Question question=new Question(csvRecord.get("question"),
                        csvRecord.get("ch1"),csvRecord.get("ch2"),
                        csvRecord.get("ch3"),csvRecord.get("ch4"),
                        Integer.parseInt(csvRecord.get("ans")),Integer.parseInt(csvRecord.get("marks")));
                question.setTest(test);
                questions.add(question);
            }

            return questions;
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}
