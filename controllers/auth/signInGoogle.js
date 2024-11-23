import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        console.log(req);
        
        // return res.status(200).json({
        //     success: true,
        //     message : "signed In",
        //     user:{
        //         firstName: req.user.firstName,
        //         lastName: req.user.lastName,
        //         email: req.user.email,
        //         photo: req.user.photo
        //     },
        //     token: req.token
        // })
        return res.redirect('http://localhost:5173/home?token=' +  req.token + '')

    } catch (error) {
       next(error) 
    }
}