package com.springboot.assignment;

import com.springboot.assignment.entity.Course;
import com.springboot.assignment.repo.CourseRepo;
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
public class CourseTest {

    @Autowired
    private CourseRepo repo;

    @Test
    public void addCourse(){

        Course course = Course.builder()
                .courseCode("CS105")
                .courseName("Bio")
                .build();

        Course savedCourse = repo.save(course);

        assertNotNull(savedCourse);
    }

    @Test
    public void testFindByIdCourseExist(){

        int id = 1;

        Course course = repo.findById(id);

        assertNotNull(course);
    }

    @Test
    public void testFindByIdCourseNotExist(){

        int id = 20;

        Course course = repo.findById(id);

        assertNull(course);
    }

    @Test
    public void testUpdateCourse(){

        int id = 1;
        Course course = repo.findById(id);
        course.setCourseCode("CS107");
        Course updateCourse = repo.save(course);

        Assertions.assertThat(updateCourse.getCourseCode()).isEqualTo("CS107");
    }

    @Test
    public void testCourseList(){

        List<Course> courses = repo.findAll();

        Assertions.assertThat(courses).hasSizeGreaterThanOrEqualTo(0);
    }


}
