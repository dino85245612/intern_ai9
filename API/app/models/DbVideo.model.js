const db = require("../configs/config-connection");

//TODO ตั้งชื่อเหมือนกัน
module.exports = class DbVideo {

    constructor(dataInfo) {
        this.videoId = dataInfo?.videoId
        this.videoTitle = dataInfo?.videoTitle
        this.videoCreatedDate = dataInfo?.videoCreatedDate
        this.videoUpdatedDate = dataInfo?.videoUpdatedDate
        this.videoPathAudio = dataInfo?.videoPathAudio
        this.videoPathVideo = dataInfo?.videoPathVideo
        this.videoPathImage = dataInfo?.videoPathImage
        this.videoStatus = dataInfo?.videoStatus
    }

    static seeAll() {
        return db.query(`
            SELECT  *
            FROM    video`
        )
    }

    static searchVideo(keyword) {
        keyword = '%' + keyword + '%';
        return db.query(`
            SELECT      *
            FROM        video 
            LEFT JOIN   content ON 
                        video.videoId = content.videoId 
            WHERE       videoTitle LIKE ? OR 
                        content.contentData LIKE ?`,
            [keyword, keyword]);
    }

    static searchById(videoId) {
        return db.query(`
            SELECT    *
            FROM      video
            WHERE     video.videoId = ?`,
            [videoId])
    }

    static searchByTitle(videoTitle) {
        return db.query(`
            SELECT    *
            FROM      video
            WHERE     videoTitle = ?`,
            [videoTitle])
    }

    //TODO ใส่เป็น %
    static searchByCreatedDate(videoCreatedDate) {
        videoCreatedDate = '%' + videoCreatedDate + '%'
        return db.query(`
            SELECT    *
            FROM      video
            WHERE     videoCreatedDate = ?`,
            [videoCreatedDate])
    }

    //TODO ใส่เป็น %
    static searchByUpdatedDate(videoUpdatedDate) {
        videoUpdatedDate = '%' + videoUpdatedDate + '%'
        return db.query(`
            SELECT    *
            FROM      video
            WHERE     videoUpdatedDate = ?`,
            [videoUpdatedDate])
    }

    static upload(dataInfo) {
        return db.query(`
            INSERT INTO     video 
            SET             ?`,
            [dataInfo])
    }

    static delete(videoId) {
        return db.query(`
            DELETE      video.*
            FROM        video
            WHERE       video.videoId = ?`,
            [videoId])
    }

    //!ยังไม่ทำ
    static update(dataInfo) {
        return db.query(`
            UPDATE     video
            SET        videoTitle = ?,
                    videoUpdatedDate = ?,
                    videoPathAudio = ?,
                    videoPathVideo = ?,
                    videoPathImage = ?,
                    videoStatus = ?,
            WHERE      videoId = ?`,
            [
                dataInfo.videoTitle,
                dataInfo.videoUpdatedDate,
                dataInfo.videoPathAudio,
                dataInfo.videoPathVideo,
                dataInfo.videoPathImage,
                dataInfo.videoStatus,
                dataInfo.videoId,
            ])
    }
}
