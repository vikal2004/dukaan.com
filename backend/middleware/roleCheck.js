
export const roleCheck=(...roles)=>{
    return (req, res, next)=>{
        console.log(req.user.role)
        if(!roles.includes(req.user.role.name)){
            return res.status(403).json({message:`Role (${req.user.role.name}) is not allowed to access this resource` })
        }
        next();
    }
}
    

