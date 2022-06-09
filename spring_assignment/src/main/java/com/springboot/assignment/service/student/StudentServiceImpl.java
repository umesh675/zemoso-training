package com.springboot.assignment.service.student;

import com.springboot.assignment.entity.Student;
import com.springboot.assignment.repo.CourseRepo;
import com.springboot.assignment.repo.StudentRepo;
import com.springboot.assignment.service.course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private CourseRepo courseRepo;

    @Override
    public Student findById(int id) {

       return studentRepo.findById(id);
    }

    @Override
    public List<Student> findAll() {
        return studentRepo.findAll();
    }

    @Override
    public void save(Student student) {

        Student student1 = studentRepo.findById(student.getId());

        if(student1 == null &&
                studentRepo.findByFirstNameAndLastName(
                        student.getFirstName(),student.getLastName()) != null){

            throw new RuntimeException("first name & last name both exist already");
        }

        if(student1 != null){

            String firstName = "";
            String lastName = "";

            if(!student1.getFirstName().equals(student.getFirstName()))
                firstName = student.getFirstName();

            if(!student1.getLastName().equals(student.getLastName())){
                lastName = student.getLastName();
            }

            if(firstName == "" && lastName != ""){
                firstName = student.getFirstName();
            }
            if(firstName != "" && lastName == "")
                lastName = student.getLastName();

            if(studentRepo.findByFirstNameAndLastName(firstName,lastName) != null)
                throw new RuntimeException("First Name && last name both exist");

        }


        student.setCourses(courseRepo.findAll());
        studentRepo.save(student);
    }

    @Override
    public void update(Student student) {
        studentRepo.save(student);
    }

    @Override
    public void deleteById(int id) {

        studentRepo.deleteById(id);
    }

}
