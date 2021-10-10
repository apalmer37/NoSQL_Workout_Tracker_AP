const path = require("path")

// get files and send them to html
module.exports = function(app){

    app.get("/", (req,res) =>{
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    })

    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })
}


