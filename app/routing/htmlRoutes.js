
const path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/survey',(req,res)=>{
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};