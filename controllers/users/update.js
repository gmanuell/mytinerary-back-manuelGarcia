import User from "../../models/User.js";

const update = async (req, res, next) => {
    try {
        let user = req.body

        validarAuto(user.auto)

        let upd = await User.findOneAndUpdate(
            { _id: user._id }, 
            {  name: user.name, email: user.email, password: user.password, phone: user.phone  } 
        )

    

        return res.status(200).json({
            response: upd
        })

    } catch (error) {
        next(error)
    }
}

export { update }