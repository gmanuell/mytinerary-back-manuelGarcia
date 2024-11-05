import Itinerary from "../../models/Itinerary.js";

let allItinerary = async(req,res,next) => {
    try {
      let {name} = req.query
      console.log(name);
       let query = {}

       if (name) {
          query.name = {$regex: '^'+name, $options: 'i'}
       }
      let all = await Itinerary.find(query)
      return res.status(200).json({
          response: all
      })
    } catch (error) {
      next(error)
    }  
  }

  
  let itinerariesByCityId = async(req,res,next) => {
    try {
    let cityQuery = req.params.x
    let all = await Itinerary.find({city:cityQuery} )
    return res.status(200).json({
      response: all
    })
  } catch (error) {
    next(error)
    }
  }  

  let itinerariesById = async(req,res,next) => {
    try {
    let idQuery = req.params.id
    let all = await Itinerary.findById(idQuery)
    return res.status(200).json({
      response: all
    })
  } catch (error) {
    next(error)
    }
  }

export {allItinerary,itinerariesById,itinerariesByCityId} 