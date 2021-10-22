import dotenv from 'dotenv';

dotenv.config();



export default {
    PORT:process.env.PORT,
    MONGO_INGRESS: process.env.MONGO,
    FACEBOOK_APP_ID: process.env.FACEBOOK_ID,
    FACEBOOK_APP_SECRET: process.env.SECRET_FACEBOOK
}
