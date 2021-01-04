class HomeController {
  index(req, res) {
    res.status(200).json({
      messagen: 'Home index',
    });
  }
}

export default new HomeController();
