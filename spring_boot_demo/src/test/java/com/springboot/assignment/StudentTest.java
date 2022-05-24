package com.springboot.assignment;

import com.springboot.assignment.entity.Student;
import com.springboot.assignment.repo.StudentRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import java.util.List;


import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class StudentTest {

    @Autowired
    private StudentRepo repo;


    @Test
    public void addStudent(){

        Student student = Student.builder().firstName("Rajesh")
                .lastName("Chandra")
                .email("rajesh@gmail.com")
                .build();

        Student saveStudent = repo.save(student);

        assertNotNull(saveStudent);
    }

    @Test
    public void testFindByIdStudentExist(){
        int id = 1;

        Student student = repo.findById(id);
        assertNotNull(student);

    }

    @Test
    public void testFindByIdStudentNotExist(){

        int id = 20;

        Student student = repo.findById(id);

        assertNull(student);
    }

    @Test
    public void testUpdateStudent(){

        int id = 1;

        Student student = repo.findById(id);
        student.setLastName("Shing");

        Student updateStudent = repo.save(student);

        String updatedLastName = updateStudent.getLastName();

        Assertions.assertThat(updatedLastName).isEqualTo("Shing");

    }

    @Test
    public void testStudentList(){

        List<Student> students = repo.findAll();

        Assertions.assertThat(students).hasSizeGreaterThanOrEqualTo(0);
    }



}
