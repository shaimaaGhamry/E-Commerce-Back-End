const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;

// try {
//   const category = await Category.update({ category_name: req.body.category_name },
//     { where: { id: req.params.id } });

//   res.status(200).json(category);
// } catch (err) {
//   res.status(500).json(err); XMLDocument
// }

