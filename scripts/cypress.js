const cypress=require('cypress');
const  fse=require('fs-extra');
const {merge} =require("mochawesome-merge");
const generator = require('mochawesome-report-generator');

async function runTests(){
    await fse.remove("cypress/results");
    await fse.remove('mochawesome-report');
    const {totalFailed} = await cypress.run();
    const jsonReport = await merge(
        {
            files:['./cypress/results/*.json']
        });
    await generator.create(jsonReport);
    process.exit(totalFailed)
}
runTests();