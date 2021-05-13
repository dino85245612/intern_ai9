const uuid = require("uuid");

const DbVideo = require("../models/DbVideo.model.js");

exports.seeAll = async (req, res, next) => {
    try {
        let [allVideo] = await DbVideo.seeAll();
        res.status(200).json(allVideo);

        //!พี่จะเด็ดยกตัวอย่าง
        // let dataInfo = new DbVideo()
        // let dataInfo2 = new DbVideo(allVideo[0])
        // dataInfo2.videoCreatedDate = new Date(Date.now());
        // console.log(dataInfo);
        // console.log('dataInfo2 => ', dataInfo2);
        // let [book] = await DbBook.getById({ bookId, bookVersion });

    } catch (err) {
        console.log(err);
    }

}

exports.searchVideo = async (req, res, next) => {
    let { keyword } = req.body
    // console.log(keyword);
    try {
        let [allWord] = await DbVideo.searchVideo(keyword);
        res.status(200).json(allWord)
    } catch (err) {
        console.log(err);
    }
}

exports.searchById = async (req, res, next) => {
    let { videoId } = req.body;

    try {
        let [video] = await DbVideo.searchById(videoId);
        res.status(200).json(video)
    } catch (err) {
        console.log(err);
    }

}

exports.searchByTitle = async (req, res, next) => {
    let { videoTitle } = req.body;

    try {
        let [video] = await DbVideo.searchByTitle(videoTitle);
        res.status(200).json(video)
    } catch (err) {
        console.log(err);
    }
}

exports.searchByCreatedDate = async (req, res, next) => {
    let { videoCreatedDate } = req.body;

    try {
        let [video] = await DbVideo.searchByCreatedDate(videoCreatedDate);
        res.status(200).json(video)
    } catch (err) {
        console.log(err);
    }
}

exports.searchByUpdatedDate = async (req, res, next) => {
    let { videoUpdatedDate } = req.body;

    try {
        let [video] = await DbVideo.searchByUpdatedDate(videoUpdatedDate);
        res.status(200).json(video)
    } catch (err) {
        console.log(err);
    }
}


exports.uploadVideo = async (req, res, next) => {

    //!พี่จะเด็ดทำแบบตัวอย่าง
    //!ถามว่าเพราะอะไร
    // let video = JSON.parse(req.body["video"]);
    let { video, videoFile } = req.body;
    console.log(JSON.parse(video));


    try {
        let dataInfo = new DbVideo(video);

        //TODO มาจัดการ pathaudio,video,image,status
        dataInfo.videoId = uuid.v4();
        dataInfo.videoCreatedDate = new Date(Date.now());
        dataInfo.videoStatus = "New";

        DbVideo.upload(dataInfo);
        res.status(200).json(dataInfo)
        console.log("Created sucessful!");

    } catch (err) {
        console.log(err);
    }
}

exports.deleteVideo = async (req, res, next) => {
    let { videoId } = req.body;

    try {
        await DbVideo.delete(videoId);

        res.status(200)
        console.log(videoId);
        console.log("Delete sucessful!");

    } catch (err) {
        console.log(err);
    }

}

exports.convertVideo = async (req, res, next) => {
    let { videoFile } = req.body

    try {

    } catch (err) {
        console.log(err);
    }
}