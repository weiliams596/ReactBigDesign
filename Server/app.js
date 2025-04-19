const express = require('express');
const app = express();
const ctlFunc = require('./controllers/configer');

const PORT = process.env.PORT || 3000;

async function init() {
    try {
        const routes = await ctlFunc();
        routes.map((route)=>{
            if(route.func.get){
                app.get(route.path, (req,res)=>{route.func.get(req,res)});
            }
            if(route.func.post){
                app.post(route.path, (req,res)=>{route.func.post(req,res)});
            }
            if(route.func.put){
                app.put(route.path, (req,res)=>{route.func.put(req,res)});
            }
            if(route.func.delete){
                app.delete(route.path, (req,res)=>{route.func.delete(req,res)});
            }
        });
    } catch (err) {
        console.error(err);
    }
}

init();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

