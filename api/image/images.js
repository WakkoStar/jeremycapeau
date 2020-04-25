const Images = require("./schemaImages.js");
const Gallery = require("../gallery/schemaGallery.js");
const Category = require("../category/schemaCategory.js");

const fs = require('fs');
//compressor
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminJpegtran = require('imagemin-jpegtran');

//////VIEW
const view = async(req, res) => {
//find images
const images = await Images.find({}).sort({index: 'desc'})

if(!images){
    return res.sendStatus(400)
}
//execute response
try {
    return res.status(200).json({
    images: images
    })
} catch (e) {
    console.log(e)
    return res.sendStatus(500);
}

}
//////ADD
const add = async(req, res) => {
    //data of a link
    let {link} = req.body
    if(link){
        //transform video to be shared
        if(link.includes('youtube')) link = link.replace('watch?v=', 'embed/')
        if(link.includes('vimeo')) link = link.replace('vimeo.com/', 'player.vimeo.com/video/')
    }
    //data of images
    let images = []
    if(req.files){
        //convert data into array
        if (!Array.isArray(req.files.datas)){
        images[0] = req.files.datas
        }else{
        images = req.files.datas
        }
    }

    if(!link && images.length === 0){
        return res.sendStatus(400)
    }

    //execute response
    try {
        const count = await Images.countDocuments({})
        //for each images
        images.map(
            async(data, index) => {
            //if image doesn't already exists
            const dataImages = await Images.findOne({picture_id: data.name})
            if (!dataImages){
                //create an object
                const img = {
                    picture_id: data.name,
                    link: link,
                    index: count + index
                };

                //move file
                data.mv('public/images/'+data.name, function(err) {
                if (err)
                    return res.sendStatus(500)
                });

                //compress files for site
                await imagemin(['public/images/' + data.name ], {
                    destination: 'public/images/',
                    plugins: [
                        imageminPngquant({
                        speed: 1,
                        quality: [0.95, 1]
                        }),
                        imageminMozjpeg({
                        quality: 90
                        }),
                        imageminJpegtran({
                        progressive: true
                        })
                    ]
                });

                //compress files for dashboard
                await imagemin(['public/images/' + data.name ], {
                    destination: 'public/preview/',
                    plugins: [
                        imageminPngquant({
                        speed: 1,
                        quality: [0.2, 0.4]
                        }),
                        imageminMozjpeg({
                        quality: 30
                        }),
                        imageminJpegtran({
                        progressive: true
                        })
                    ]
                });

                //save image in db
                const imageData = new Images(img);
                await imageData.save();
            }
        }
        )
        //redirect user
        return res.sendStatus(200)
    } catch (e) {
        console.log(e)
        return res.sendStatus(500)
    }
}
    /////DELETE
    const deleteC = async(req,res) => {
    //get id of request
    const {id} = req.body;
    if(!id){
        return res.sendStatus(400)
    }
    //execute response
    try {
        //delete previous image
        const imagePrevious = await Images.findOne({_id: id})
        //verify isn't a video
        const bIsLink = imagePrevious.picture_id.startsWith('http');
        if(!bIsLink){
        fs.unlink('public/images/'+ imagePrevious.picture_id, (err) => {
            //nothing
        })
        fs.unlink('public/preview/'+ imagePrevious.picture_id, (err) => {
            //nothing
        })
        }

        //delete imgs of galleries and category preview
        await Gallery.deleteMany({img_id: id});
        await Category.updateMany({preview_id: imagePrevious.picture_id}, {preview_id : "preview.png"})

        //delete in db
        await Images.deleteOne({_id: id});

        return res.status(200).json({msg: imagePrevious.picture_id + "à été supprimé"})

    } catch (e) {

        console.log(e)
        return res.sendStatus(500)

    }
}
//EXPORTS
exports.add = add;
exports.view = view;
exports.delete = deleteC
