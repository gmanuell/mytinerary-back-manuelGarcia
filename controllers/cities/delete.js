import City from "../../models/City.js";

let deleteOne = async (req,res,next) =>{
 try {
    let deleteCity = await City.deleteOne({
    //    _id: req.body._id,
        name: req.body.name
    })
    return res.status(200).json({
        response: deleteCity
    })
 } catch (error) {
    next(error)
 }
}

export {deleteOne}