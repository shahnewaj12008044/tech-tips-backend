import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(process.cwd(),'.env')})

export default{
    port : process.env.PORT,
    db_url : process.env.DB_URL,
    node_env: process.env.NODE_ENV,
    jwt_access_secret_expires_in: process.env.JWT_ACCESS_SECRET_EXPIRE,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
}