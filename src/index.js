import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    const images = [
        "Yin-Yang.PNG", "Yin-Yang (Flaming).PNG", "Koi Fish (Navy).PNG", "Koi Fish (Red).PNG",
        "Moon.PNG", "Moon Bunny.PNG", "Yuanbao (1).PNG", "Yuanbao (2).PNG",
        "Lantern.PNG", "Lucky Cat.PNG", "Gourd.PNG", "Fan.PNG",
        "Baozi.PNG", "Peach.PNG", "White Rabbit Candy.PNG", "Soy Sauce.PNG",
        "Teapot (Curly Handle).PNG", "Teapot (Thick Handle).PNG", "Teapot (Thin Handle).PNG", "Tea.PNG",
        "Fu (Red).PNG", "Fu (Gold).PNG", "Tian (Blue).PNG", "Tian (Gold).PNG",
        "Xin (Red).PNG", "Xin (Gold).PNG", "You (Blue).PNG", "You (Gold).PNG",
        "Gold Frame.PNG", "Thin Gold Border.png"
    ];

    images.forEach((image, index) => {
        document.getElementById(`button${index}`).addEventListener("click", async function() {
            let path = `./images/${image}`;
            fetch(path).then(response => response.blob()).then(blob => {
                addOnUISdk.app.document.addImage(blob);
                console.log(`Added image: ${image}`);
            });
        });
    });
});
