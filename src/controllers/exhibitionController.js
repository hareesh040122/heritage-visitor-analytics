let { exhibitions } = require("../data/sampleData");

// @desc    Get all exhibitions
// @route   GET /api/exhibitions
// @access  Public
const getAllExhibitions = (req, res) => {
  res.status(200).json({
    success: true,
    count: exhibitions.length,
    data: exhibitions
  });
};

// @desc    Get exhibition by ID
// @route   GET /api/exhibitions/:id
// @access  Public
const getExhibitionById = (req, res) => {
  const exhibition = exhibitions.find(e => e.id === req.params.id);

  if (!exhibition) {
    return res.status(404).json({
      success: false,
      message: `Exhibition with id '${req.params.id}' not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: exhibition
  });
};

// @desc    Create new exhibition
// @route   POST /api/exhibitions
// @access  Public
const createExhibition = (req, res) => {
  const { name, wing, category, capacity, avgDwellMinutes } = req.body;

  if (!name || !wing) {
    return res.status(400).json({
      success: false,
      message: "Please provide exhibition name and wing."
    });
  }

  const newExhibition = {
    id: `exh-${Date.now()}`,
    name,
    wing,
    category: category || "General Exhibition",
    capacity: Number(capacity) || 150,
    currentOccupancy: 0,
    avgDwellMinutes: Number(avgDwellMinutes) || 15,
    educationalRating: 75,
    status: "Active"
  };

  exhibitions.push(newExhibition);

  res.status(201).json({
    success: true,
    message: "Exhibition added successfully",
    data: newExhibition
  });
};

module.exports = {
  getAllExhibitions,
  getExhibitionById,
  createExhibition
};
