const fs = require('fs');
const path = require('path');

const controllerRoutes = [];
const myDir = __dirname;

async function deepReadDir(folderPath) {
    try {
        const files = await fs.promises.readdir(folderPath);
        for (const file of files) {
            const fullPath = path.join(folderPath, file);
            const stats = await fs.promises.stat(fullPath);
            if(stats.isDirectory()){
                await deepReadDir(fullPath);
            }else if(file !=='configer.js'){
                const name = path.basename(file,'.js');
                const paths = path.relative( myDir,file);
                const func = require(fullPath);
                controllerRoutes.push({name:name,path:paths.replace(/\\/g, "/").split('..')[1].split('.js')[0], func:func});
            }
        }
    } catch (err) {
        console.log(err);
        return;
    }
}

module.exports = async function() {
    await deepReadDir(myDir);
    return controllerRoutes;
}
