const express = require("express");

const router = express.Router();

router.post("/feedback", async (req, res, next) => {
	const feedback = req.body.feedback;
	console.log(feedback);
	if (!feedback) {
		res.status(403);
		res.json({ message: "Feedback is required" });
		return;
	}
	res.json({ message: "Feedback added" });
});

module.exports = router;
