import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY="sk_test_51RGymCD5Qoj5DwN5beflCakvlVJ2l25Whj9xbpGllQyrJpSHQopCiNuG6Xgbg0Fs5aIRQ5vNN7xpmV0WOreyMAZn00bVBz5WnK"

export default {
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD,
    STRIPE_SECRET_KEY
}