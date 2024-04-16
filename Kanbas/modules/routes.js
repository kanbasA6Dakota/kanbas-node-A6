import * as daos from "./daos.js";
function ModuleRoutes(app) {
    // Get All Modules
    app.get("/api/courses/:courseId/modules", async (req, res) => {

        const {courseId} = req.params;
        const allModules = await daos.findAllModules(); 
        const requiredModules = allModules.filter((m) => m.course === courseId);
        res.json(requiredModules); 
    });

    //Get Modules by ID:
    app.get("/api/courses/:courseId/modules/:moduleId", async (req, res) => {

        const {courseId, moduleId} = req.params;
        const allModules = await daos.findAllModules(); 
        const requiredModules = allModules.filter((m) => m.course === courseId && m._id === moduleId);
        res.json(requiredModules); 
    });
    // creating module for course.
    app.post("/api/courses/:courseId/modules", async (req, res) => {
        // const newModule = {  
        //     ...req.body,
        //     course: cid,   
        //     _id: new Date().getTime().toString(),
        // };
        // db.modules.push(newModule);
        // res.send(newModule);
        const newModule = await daos.createModule(req.params.courseId, req.body); 
        res.json(newModule); 
    });
    //Delete Modules.
    app.delete("/api/modules/:_id", async (req, res) => {
        const status = await daos.deleteModule(req.params._id);
        res.json(status);
    });

    //Update Modules
    app.put("/api/modules/:_id", async (req, res) => { 
        const status = await daos.updateModule(req.params._id, req.body);
        // const moduleIndex = db.modules.findIndex( 
        //     (m) => m._id === mid); 
        //     db.modules[moduleIndex] = { 
        //         ...db.modules[moduleIndex], 
        //         ...req.body 
        //     }; 
        //     res.sendStatus(204); 
        res.json(status); 
     });

    

}

export default ModuleRoutes;