const fs = require('fs');

const saveToDatabase = (DB)=>{
    fs.writeFileSync("/home/christian/NodeJs/crossfit-wod-api/src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf8",
    })
}


module.exports = {saveToDatabase}