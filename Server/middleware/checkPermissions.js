const chekPermissions = (req, res, next) => {
    const userRole = req.user && req.user.role;
    if(!userRole ==='student'){
        if(!userRole === 'teacher'){
            if(!userRole === 'admin'){
                return res.status(401).json({message: 'You are not authorized to access this resource'});
            }
        }
    }
    next();
}

module.exports = chekPermissions;