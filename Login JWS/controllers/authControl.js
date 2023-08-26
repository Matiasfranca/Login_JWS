import jsonwebtoken from "jsonwebtoken";

export function auth (req,res,next) {
    const token = req.header("authorization-token");
    if (!token) return res.status(401).send("Acess Denied")

    try {
        const userVerified = jsonwebtoken.verify(token, process.env.SECRET_TOKEN)
        req.user = userVerified;
        next()
    } catch (error) {
        return res.status(401).send("Acess Denied");
    }
}