import { join } from "path";

// get files and send them to html
export default function(app){
    app.get("/stats", function(req, res){
        res.sendFile(join(__dirname, "../public/stats.html"));
    })

    app.get("/exercise", function(req, res){
        res.sendFile(join(__dirname, "../public/exercise.html"));
    })
}


