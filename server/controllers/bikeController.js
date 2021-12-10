require("../models/database");
const Mountainbike = require("../models/Bike");

/**
 * Get /
 * Bike
*/
 exports.bike = async (req, res) => {
  try {
    // find all documents
    const bike = await Mountainbike.find({});
      res.render('./layouts/index', {bike});
  
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};


 