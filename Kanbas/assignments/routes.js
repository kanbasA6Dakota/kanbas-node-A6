import assignments from "../Database/assignments.js";
import db from "../Database/index.js";
import * as dao from "./daos.js";
function AssignmentsRoutes(app) {
    // Get All Assignments
    app.get("/api/courses/:cid/assignments", async (req, res) => {
        const allAssignments = await dao.findAllAssignment();
        const { cid } = req.params;
        const assignments = allAssignments.filter((a) => a.course === cid);
        res.json(assignments);
    });  

    // Get Single Assignment
    app.get("/api/courses/:cid/assignments/:aid", async (req, res) => {
        const allAssignments = await dao.findAllAssignment();
        const { cid, aid } = req.params;
        const assignments = allAssignments.filter((a) => a.course === cid && a._id === aid);
        res.json(assignments);
    });  

    // creating Assignments for Course.
    app.post("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const status = await dao.createAssignment(req.params.cid, req.body);
        res.json(status);
    });

    //Delete Assignments.
    app.delete("/api/assignments/:_id", async (req, res) => {
        const status = await dao.deleteAssignment(req.params._id);
        res.json(status);
    });

    //Update Asssignments.
    app.put("/api/assignments/:_id", async (req, res) => {
        // const { aid } = req.params;
        // const assignmentIndex = db.assignments.findIndex(
        //     (a) => a._id === aid);
        // db.assignments[assignmentIndex] = {
        //     ...db.assignments[assignmentIndex],
        //     ...req.body
        // };
        const status = await dao.updateAssignment(req.params._id, req.body);
        res.json(status);
    });

}

export default AssignmentsRoutes;