const {app, BrowserWindow} = require ("electron");
const fs = require('fs'); 






let win0 =null;
let win1 =null;
let win2 =null; 
let win3 =null;
let win5 =null;

const createWindow = () => 
{
    

    win0 = new BrowserWindow({

        width: 1920,
        height: 1080,
        fullscreen: true,
        webPrefrences:{
            nodeIntegration: true,
        },
    });

    win0.loadFile("./src/JML.html");

    win1 = new BrowserWindow({

        width: 1920,
        height: 1080,
        fullscreen: true,
        webPrefrences:{
            nodeIntegration: true,
        },
    });

    win1.loadFile("./src/Al.html");

    win2 = new BrowserWindow({

        width: 1920,
        height: 1080,
        fullscreen: true,
        webPrefrences:{
            nodeIntegration: true,
        },
    });

    win2.loadFile("./src/Cu.html");

    win3 = new BrowserWindow({

        width: 1920,
        height: 1080,
        fullscreen: true,
        webPrefrences:{
            nodeIntegration: true,
        },
    });

    win3.loadFile("./src/BronzaIrZalvaris.html");

    win4 = new BrowserWindow({

        width: 1920,
        height: 1080,
        fullscreen: true,
        webPrefrences:{
            nodeIntegration: true,
        },
    });

    win4.loadFile("./src/PbIrKiti.html");


} 

Rodyti = (number) =>
{
    if (number == 0){win0.maximize()}
    if (number == 1){win1.maximize()}
    if (number == 2){win2.maximize()}
    if (number == 3){win3.maximize()}
    if (number == 4){win4.maximize()}
    if (number >=6 || number <=-1){alert("Įvyko klaida: Pabandykite perkrauti TV ir/arba Raspberry pi");}
}

app.whenReady().then(createWindow);




let mumber = 0;
setInterval(() => {
    mumber++;
    if(mumber >= 5){mumber=0;}
    Rodyti(mumber);
}, 3000);


