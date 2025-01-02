require("dotenv").config();

const appConfig={
    PORT:process.env.PORT || 5000,
    ALLOWED_ORIGIN:process.env.ALLOWED_ORIGIN,
    DB:{
        MONGODB_URI:process.env.MONGODB_URI
    }
}

module.exports = appConfig;