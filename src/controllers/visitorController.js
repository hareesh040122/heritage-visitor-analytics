let { visitors } = require("../data/sampleData");

// @desc    Get all visitor sessions
// @route   GET /api/visitors
// @access  Public
const getAllVisitors = (req, res) => {
  const { wing, groupType } = req.query;
  let filtered = [...visitors];

  if (wing) {
    filtered = filtered.filter(v => v.wingVisited.toLowerCase().includes(wing.toLowerCase()));
  }

  if (groupType) {
    filtered = filtered.filter(v => v.groupType.toLowerCase() === groupType.toLowerCase());
  }

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered
  });
};

// @desc    Get single visitor by ID
// @route   GET /api/visitors/:id
// @access  Public
const getVisitorById = (req, res) => {
  const visitor = visitors.find(v => v.id === req.params.id);

  if (!visitor) {
    return res.status(404).json({
      success: false,
      message: `Visitor session with id '${req.params.id}' not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: visitor
  });
};

// @desc    Create new visitor session
// @route   POST /api/visitors
// @access  Public
const createVisitor = (req, res) => {
  const { visitorName, groupType, groupSize, wingVisited, exhibitId, dwellTimeMinutes, tourType, educationalQuizScore, satisfactionRating } = req.body;

  if (!visitorName || !groupType || !wingVisited) {
    return res.status(400).json({
      success: false,
      message: "Please provide visitorName, groupType, and wingVisited."
    });
  }

  const newVisitor = {
    id: `vis-${Date.now()}`,
    visitorName,
    groupType,
    groupSize: Number(groupSize) || 1,
    wingVisited,
    exhibitId: exhibitId || "exh-101",
    dwellTimeMinutes: Number(dwellTimeMinutes) || 30,
    tourType: tourType || "Self-Guided",
    educationalQuizScore: Number(educationalQuizScore) || 75,
    satisfactionRating: Number(satisfactionRating) || 4.5,
    timestamp: new Date().toISOString()
  };

  visitors.push(newVisitor);

  res.status(201).json({
    success: true,
    message: "Visitor record created successfully",
    data: newVisitor
  });
};

// @desc    Update visitor session
// @route   PUT /api/visitors/:id
// @access  Public
const updateVisitor = (req, res) => {
  const index = visitors.findIndex(v => v.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Visitor session with id '${req.params.id}' not found.`
    });
  }

  visitors[index] = {
    ...visitors[index],
    ...req.body,
    id: visitors[index].id
  };

  res.status(200).json({
    success: true,
    message: "Visitor record updated successfully",
    data: visitors[index]
  });
};

// @desc    Delete visitor session
// @route   DELETE /api/visitors/:id
// @access  Public
const deleteVisitor = (req, res) => {
  const index = visitors.findIndex(v => v.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Visitor session with id '${req.params.id}' not found.`
    });
  }

  const deleted = visitors.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Visitor record deleted successfully",
    data: deleted[0]
  });
};

module.exports = {
  getAllVisitors,
  getVisitorById,
  createVisitor,
  updateVisitor,
  deleteVisitor
};
