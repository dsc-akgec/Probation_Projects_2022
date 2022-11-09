const router = require("express").Router();
const {
    news_all, 
    news_details, 
    news_create, 
    news_update, 
    news_delete
  } = require('../controllers/newsController');

router.post("/", news_create);
router.get("/", news_all);
router.get("/:newsId",news_details);
router.put("/:newsId", news_update);
router.delete("/:newsId", news_delete);

module.exports = router;