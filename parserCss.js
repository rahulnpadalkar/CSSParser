module.exports = {
    
    parseCss:async function (path) {
                    var parsedCss={};
                    var contents = await readFile(path);
                    contents = contents.replace(/[\n\r]/g, '').replace(/\s/g,'');
                    var UnformattedRules  = contents.split("}");
                    //Cleaning Array
                    UnformattedRules = UnformattedRules.filter(Boolean);
                    UnformattedRules.forEach((ruleAndSelector) => {
                        var RuleAndSelectors = ruleAndSelector.split("{");
                        var keys = RuleAndSelectors[0] && RuleAndSelectors[0].trim();
                        var value = RuleAndSelectors[1] && RuleAndSelectors[1].trim();
                        var justRules = value.split(";");
                        var justSelectors = keys.split(",");
                        justSelectors.forEach((selector)=>{
                            parsedCss[selector.trim()]=justRules;
                        });
                    });
                    return parsedCss;
                }
}


const fs = require("fs");

function readFile (path) {
    return new Promise((resolve,reject)=>{
        var contents;
        fs.readFile(path,"utf-8",function(err,data){
            if(err)
            {
                reject(err);
            } else {
                var contents = data;
                contents =  data;
                resolve(contents);
            }

        });
    });
}
