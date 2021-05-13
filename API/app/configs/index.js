module.exports = {
    secret:
        process.env.NODE_ENV === "production" ? process.env.SECRET : "S3cr3t@Ai9.c0.th",
    ROLEs: ["super admin", "admin", "staff"],
};
