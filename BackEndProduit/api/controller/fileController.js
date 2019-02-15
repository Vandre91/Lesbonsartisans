const fs = require('fs');

class fileController{

    LoadFile(req,res){

      let fileName = req.files.filepond.name;
      var indexOfFirst = fileName.indexOf(".");
      let extent = fileName.substring(indexOfFirst);
      let name = fileName.substring(0, indexOfFirst)

      if (fs.existsSync("../upload/"+fileName)) {
        
        let savefile = false;
        
        for(let i = 1; savefile != true; i++ ){
          if (!fs.existsSync("../upload/"+name+"("+i+")"+extent)) {
            savefile = true;
            fs.writeFileSync("../upload/"+name+"("+i+")"+extent, req.files.filepond.data);
          }
        }
      }else{
        fs.writeFileSync("../upload/"+fileName, req.files.filepond.data);
      }
      
      res.send('Load');
      
        
    }

}

module.exports = fileController;