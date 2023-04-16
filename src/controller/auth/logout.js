const logOutController = (req, res) => {
    res.clearCookie('token').redirect('/');
}
module.exports = logOutController;