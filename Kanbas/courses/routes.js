import courses from "../Database/courses.js";  
import Database from "../Database/index.js"; 
import * as dao from "./daos.js";
export default function CourseRoutes(app) { 
    // get all courses.
    app.get("/api/courses", async (req, res) => { 
        // const courses = Database.courses; 
        // res.send(courses); 
        const courses = await dao.findAllCourses();
        res.json(courses);
    });

    //Creating new courses
    app.post("/api/courses", async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course); 
    });

    //Delete a course
    app.delete("/api/courses/:_id", async (req, res) => {
        const status = await dao.deleteCourse(req.params._id);
        res.json(status);
    });

    //Update a Course
    app.put("/api/courses/:id", async (req, res) => {
        // const {id} = req.params;
        // const course = req.body;
        // Database.courses = Database.courses.map((c) => c._id === id ? {
        //     ...c, ...course
        // } : c);
        // const { id } = req.params;
        const updatedStatus = await dao.updateCourse(req.params.id, req.body);
        res.json(updatedStatus);
    });

    // Retrieve a course.
    app.get("/api/courses/:_id", async(req, res) => {
        const course = await dao.findCourseById(req.params._id);
        res.json(course);
    });
}