const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
  // be sure to include its associated Products

router.get('/', async (req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll({
      include: [{model:Product}]
    });
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const selectedCategoryData = await Category.findByPk(req.params.id,{
      include:[{model:Product}]
    });
    res.status(200).json(selectedCategoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const category = await Category.create(req.body);
    res.status(200).json(category);
  }catch(err){
    res.status(500).json(err);
  }
  
});
// update a category by its `id` value
 
router.put('/:id', async (req, res) => {
  try{
     const category = await Category.update({category_name : req.body.category_name },
    {where:{id:req.params.id}});

    res.status(200).json(category);
  }catch(err){
    res.status(500).json(err);XMLDocument
  }

  
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try{
    const category = Category.destroy({
      where:{
        id : req.params.id
      }
    });
    res.status(200).json(category);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
