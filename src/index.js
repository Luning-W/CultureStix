import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    document.getElementById("button0").addEventListener("click",async function() {
        let path = "./images/Baozi.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });

    document.getElementById("button1").addEventListener("click",async function() {
        let path = "./images/Fan.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button2").addEventListener("click",async function() {
        let path = "./images/Fu(Gold).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button3").addEventListener("click",async function() {
        let path = "./images/FuRed.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button4").addEventListener("click",async function() {
        let path = "./images/GoldFrame.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button5").addEventListener("click",async function() {
        let path = "./images/Gourd.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button6").addEventListener("click",async function() {
        let path = "./images/KoiFish(Navy).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button7").addEventListener("click",async function() {
        let path = "./images/KoiFish(Red).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button8").addEventListener("click",async function() {
        let path = "./images/Lantern.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button9").addEventListener("click",async function() {
        let path = "./images/LuckyCat.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button10").addEventListener("click",async function() {
        let path = "./images/Mask.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button11").addEventListener("click",async function() {
        let path = "./images/MoonBunny.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button12").addEventListener("click",async function() {
        let path = "./images/Moon.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button13").addEventListener("click",async function() {
        let path = "./images/Peach.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button14").addEventListener("click",async function() {
        let path = "./images/SoySauce.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button15").addEventListener("click",async function() {
        let path = "./images/Tea.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button16").addEventListener("click",async function() {
        let path = "./images/Teapot(Curly Handle).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button17").addEventListener("click",async function() {
        let path = "./images/Teapot(Thick Handle).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button18").addEventListener("click",async function() {
        let path = "./images/Teapot(Thin Handle).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button19").addEventListener("click",async function() {
        let path = "./images/ThinGoldBorder.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button20").addEventListener("click",async function() {
        let path = "./images/Tian(Blue).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button21").addEventListener("click",async function() {
        let path = "./images/Tian(Gold).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button22").addEventListener("click",async function() {
        let path = "./images/WhiteRabbitCandy.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button23").addEventListener("click",async function() {
        let path = "./images/Xin(Gold).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button24").addEventListener("click",async function() {
        let path = "./images/Xin(Red).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button25").addEventListener("click",async function() {
        let path = "./images/Yin-Yang(Flaming).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button26").addEventListener("click",async function() {
        let path = "./images/Yin-Yang.PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button27").addEventListener("click",async function() {
        let path = "./images/You(Blue).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button28").addEventListener("click",async function() {
        let path = "./images/You(Gold).PNG";
        fetch(path).then(response => response.blob()).then(blob  => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button29").addEventListener("click",async function() {
        let path = "./images/Yuanbao(1).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button30").addEventListener("click",async function() {
        let path = "./images/Yuanbao(2).PNG";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button31").addEventListener("click",async function() {
        let path = "./images/Thin Gold Border.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
});
