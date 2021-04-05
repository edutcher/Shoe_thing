const router = require('express').Router();
const path = require('path');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    let pageTitle = 'Home';
    res.render('index', { pageTitle });
    // res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('/search/:search', async(req, res) => {
    let pageTitle = 'Home';
    res.render('index', { pageTitle });
    // res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('/item/:id', async(req, res) => {
    let pageTitle = 'Item';
    res.render('item', { pageTitle });
    // res.sendFile(path.join(__dirname, '../public/item.html'));
});

router.get('/cart', withAuth, async(req, res) => {
    let pageTitle = 'Cart';
    res.render('cart', { pageTitle });
    // res.sendFile(path.join(__dirname, '../public/cart.html'));
});

router.get('/login', async(req, res) => {
    let pageTitle = 'Login';
    res.render('login', { pageTitle });
    // res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.get('/signup', async(req, res) => {
    let pageTitle = 'Sign-Up';
    res.render('signup', { pageTitle });
    // res.sendFile(path.join(__dirname, '../public/signup.html'));
});

router.get('/contact', async(req, res) => {
    let pageTitle = 'Contact';
    res.render('contact', { pageTitle });
    // res.sendFile(path.join(__dirname, '../public/contact.html'));
});

module.exports = router;