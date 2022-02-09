const fs = require('fs');
const excel = require('xlsx')

function excelToJSON(/*nome do arquivo excel*/) {
    const workbook = excel.readFile(/*nome do arquivo excel*/)
    const workbookSheets = workbook.SheetNames

    const sheet = workbookSheets[0]
    const dataExcel = excel.utils.sheet_to_json(workbook.Sheets[sheet])

    
    var arrayObj = []
    dataExcel.forEach(dado => {
        let jsonObj = {
            'key': 'value'
        }
        arrayObj.push(jsonObj)

    })
    fs.writeFile('/*nome do arquivo json */', JSON.stringify(arrayObj, null, 4), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + '/*nome do arquivo json*/');
        }
    }); 
}
excelToJSON()
