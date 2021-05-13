--------------------- ! Video Table ---------------------

.
-- * searchMain with parameter (keyword)
keyword = '%' + keyword + '%';
SELECT      *
FROM        video 
LEFT JOIN   content ON 
            video.id = content.videoId 
WHERE       title LIKE ? OR 
            content.contentData LIKE ?,
[keyword, keyword]


-- * searchAll
SELECT    *
FROM      video


-- * searchById
SELECT    *
FROM      video
WHERE     videoId = ?,
[video.videoId]


-- * searchByTitle
SELECT    *
FROM      video
WHERE     videoTitle = ?,
[video.videoTitle]


-- * searchByCreatedDate
SELECT    *
FROM      video
WHERE     videoCreatedDate = ?,
[video.videoCreatedDate]


-- * searchByUpdatedDate
SELECT    *
FROM      video
WHERE     videoUpdatedDate = ?,
[video.videoUpdatedDate]


-- * searchByStatus
SELECT    *
FROM      video
WHERE     videoStatus = ?,
[video.videoStatus]


-- ? create
INSERT INTO video SET ?,
[dataInfo]


-- ! delete
DELETE      video.*, content.*
FROM        video, content
WHERE       video.videoId = ?,
[video.videoId]


-- ? UPDATE
UPDATE     video
SET        videoTitle = ?,
           videoFilName = ?,
           videoUpdatedDate = ?,
           videoPathAudio = ?,
           videoPathVideo = ?,
           videoPathImage = ?,
           videoStatus = ?,
WHERE      videoId = ?,
[
    dataInfo.videoTitle,
    dataInfo.videoFilName,
    dataInfo.videoUpdatedDate,
    dataInfo.videoPathAudio,
    dataInfo.videoPathVideo,
    dataInfo.videoPathImage,
    dataInfo.videoStatus,
    dataInfo.videoId,
]