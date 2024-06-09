import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    const images = [
        { id: "image0", path: "./images/Yin-Yang.PNG" },
        { id: "image1", path: "./images/Yin-Yang (Flaming).PNG" },
        { id: "image2", path: "./images/Koi Fish (Navy).PNG" },
        { id: "image3", path: "./images/Koi Fish (Red).PNG" },
        { id: "image4", path: "./images/Moon.PNG" },
        { id: "image5", path: "./images/Moon Bunny.PNG" },
        { id: "image6", path: "./images/Yuanbao (1).PNG" },
        { id: "image7", path: "./images/Yuanbao (2).PNG" },
        { id: "image8", path: "./images/Lantern.PNG" },
        { id: "image9", path: "./images/Lucky Cat.PNG" },
        { id: "image10", path: "./images/Gourd.PNG" },
        { id: "image11", path: "./images/Fan.PNG" },
        { id: "image12", path: "./images/Baozi.PNG" },
        { id: "image13", path: "./images/Peach.PNG" },
        { id: "image14", path: "./images/White Rabbit Candy.PNG" },
        { id: "image15", path: "./images/Soy Sauce.PNG" },
        { id: "image16", path: "./images/Teapot (Curly Handle).PNG" },
        { id: "image17", path: "./images/Teapot (Thick Handle).PNG" },
        { id: "image18", path: "./images/Teapot (Thin Handle).PNG" },
        { id: "image19", path: "./images/Tea.PNG" },
        { id: "image20", path: "./images/Fu (Red).PNG" },
        { id: "image21", path: "./images/Fu (Gold).PNG" },
        { id: "image22", path: "./images/Tian (Blue).PNG" },
        { id: "image23", path: "./images/Tian (Gold).PNG" },
        { id: "image24", path: "./images/Xin (Red).PNG" },
        { id: "image25", path: "./images/Xin (Gold).PNG" },
        { id: "image26", path: "./images/You (Blue).PNG" },
        { id: "image27", path: "./images/You (Gold).PNG" },
        { id: "image28", path: "./images/Gold Frame.PNG" },
        { id: "image29", path: "./images/Thin Gold Border.png" }
    ];

    images.forEach(({ id, path }) => {
        document.getElementById(id).addEventListener("click", async function() {
            fetch(path).then(response => response.blob()).then(blob => {
                addOnUISdk.app.document.addImage(blob);
                console.log(`Added image: ${path}`);
            });
        });
    });
});
