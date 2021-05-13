const db = require("../configs/config-connection");

module.exports = class DbContent {

    constructor(dataInfo) {
        this.videoId = dataInfo?.videoId
        this.contentId = dataInfo?.contentId
        this.contentData = dataInfo?.contentData
        this.contentTimestamp = dataInfo?.contentTimestamp
    }

    static findByword(keyword) {
        keyword = '%' + keyword + '%';

        return db.query(`
        SELECT      *
        FROM        content 
        WHERE       contentData LIKE ? `,
            [keyword])
    }


}