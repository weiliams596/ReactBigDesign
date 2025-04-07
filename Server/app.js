const express = require('express');
const app = express();
const ctlFunc = require('./controllers/configer');

const PORT = process.env.PORT || 3000;

async function init() {
    try {
        console.log('Initializing server...');
        const controllerRoutes = await ctlFunc();
        console.log(`Registering ${controllerRoutes.length} routes`);
        console.log(controllerRoutes);
        controllerRoutes.forEach(route => {
            console.log(`Registering route: ${route.path}`);
            app.get(route.path, async (req, res) => {
                route.func.get(req, res);
            });
            app.post(route.path, async (req, res) => {
                route.func.post(req, res);
            });
            app.put(route.path, async (req, res) => {
                route.func.put(req, res);
            });
            app.delete(route.path, async (req, res) => {
                route.func.delete(req, res);
            });
        });
    } catch (err) {
        console.error(err);
    }
}

init();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

