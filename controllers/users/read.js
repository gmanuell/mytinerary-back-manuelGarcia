import User from "../../models/User.js";

let allUser = async (req,res,next) => {
    try {
        
        let name = req.query
        console.log(name);
        let query = {}
        if (name) {
            query.name = {$regex:'^'+name, $options: 'i'}
        }
        let all = await  User.find(query);

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}



let userById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

let validateToken = async (req, res, next) => {
    try {
        //El usuario autenticado esta en req.user, no en res.user        
        return res.status(200).json({
            success: true,
            response: req.user
        });
    } catch (error) {
        next(error);
    }
};


export {allUser,userById,validateToken} 