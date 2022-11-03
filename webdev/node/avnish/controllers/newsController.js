
const News= require('../model/News');

// Get All products
const news_all = async (req, res) => {
    try {
        const newss = await News.find();
        res.json(newss);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single news
const news_details = async (req, res) => {
    try {
        const news = await News.findById(req.params.newsId);
        res.json(news);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New news
const news_create = async (req, res) => {
    const news = new News({
        title: req.body.title,
        article: req.body.article,
        image: req.body.image,
        details: req.body.details
      });
    
      try {
        const savedNews = await news.save();
        res.send(savedNews);
        console.log("presenting the address");
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update news
const news_update = async (req, res) => {
    try {
        const news = {
          title: req.body.title,
          article: req.body.article,
          image: req.body.image,
          details: req.body.details
        };
    
        const updatedNews = await News.findByIdAndUpdate(
          { _id: req.params.newsId },
          news
        );
        res.json(updatedNews);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete news
const news_delete = async (req, res) => {
    try {
        const removeNews = await News.findByIdAndDelete(req.params.newsId);
        res.json(removeNews);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    news_all, 
    news_details, 
    news_create, 
    news_update, 
    news_delete
  }
