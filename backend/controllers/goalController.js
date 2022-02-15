// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoal = (req, res) => {
  res.status(200).json({ name: `get goal` });
};

// @desc    set goals
// @route   post /api/goals
// @access  Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("please enter text");
  }
  res.status(200).json({ name: `set goal` });
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ name: `update goals ${req.params.id}` });
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ name: `delete goals ${req.params.id}` });
};

module.exports = {
  getGoal,
  updateGoal,
  deleteGoal,
  setGoal,
};
