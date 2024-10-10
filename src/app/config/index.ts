import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(process.cwd(),'.env')})

export default{
    port : process.env.PORT,
    db_url : process.env.DB_URL,
    node_env: process.env.NODE_ENV,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_secret_expires_in: process.env.JWT_ACCESS_SECRET_EXPIRE,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
    email_user: process.env.EMAIL_USER,
    email_pass: process.env.EMAIL_PASS,
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    payment_url: process.env.PAYMENT_URL,
    payment_verify_url: process.env.PAYMENT_VERIFY_URL,
}