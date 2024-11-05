import Itinerary from "../../models/Itinerary.js"

let deleteOne = async (req,res,next) =>{
 try {
    let deleteItinerary = await Itinerary.deleteOne({
    //    _id: req.body._id,
        name: req.body.name
    })
    return res.status(200).json({
        response: deleteItinerary
    })
 } catch (error) {
    next(error)
 }
}

export {deleteOne}