const { ImageKit } = require("@imagekit/nodejs");
const ImageKitClient=new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file) {
    const result=await ImageKitClient.upload({
        file,
        fileName: "Music_" + Date.now(),
        folder:"/spotify/music",
    });
    return result;
}

module.exports={uploadFile}