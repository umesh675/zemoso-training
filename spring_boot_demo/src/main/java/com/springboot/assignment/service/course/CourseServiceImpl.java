package com.springboot.assignment.service.course;

import com.springboot.assignment.entity.Course;
import com.springboot.assignment.repo.CourseRepo;
import com.springboot.assignment.repo.StudentRepo;
import com.springboot.assignment.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private StudentRepo studentRepo;

    @Override
    public Course findById(int id) {

        return courseRepo.findById(id);
    }

    @Override
    public List<Course> findAll() {
        return courseRepo.findAll();
    }

    @Override
    public void save(Course course) {

        course.setStudents(studentRepo.findAll());
        courseRepo.save(course);
    }

    @Override
    public void update(Course course) {

        courseRepo.save(course);
    }

    @Override
    public void deleteById(int id) {

        courseRepo.deleteById(id);
    }
}
