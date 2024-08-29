import bcryptjs from "bcryptjs";

export function hashingPassword(password: string) {
    return bcryptjs.hashSync(password, 10)
}

export async function decodePassword(password: string, hash: string) {
    return await bcryptjs.compare(password, hash)
}