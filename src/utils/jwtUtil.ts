import jwt from "jsonwebtoken";

// Please change config on env and in this file also
const config = {
    jwtAccessTokenSecret: process.env.JWT_ACCESS_SECRET || "e15b8c9c96fec4f32f56",
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_SECRET || "17f08d2daf724a9fc77a"
}
function generateAccessToken(payload: any) {
    return jwt.sign(payload, config.jwtAccessTokenSecret, {
        expiresIn: '10m'
    })
}

function generateRefreshToken(payload: any) {
    return jwt.sign(payload, config.jwtRefreshTokenSecret, {
        expiresIn: '4h'
    })
}

export function generateToken(payload: any) {
    const access_token = generateAccessToken(payload)
    const refresh_token = generateRefreshToken(payload);

    return {
        access_token,
        refresh_token
    }
}