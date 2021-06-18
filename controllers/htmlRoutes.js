const router = require('express').Router();
const path = require('path');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    let pageTitle = 'home';
    res.render('index', { pageTitle });
});

router.get('/search/:search', async(req, res) => {
    let pageTitle = 'home';
    res.render('index', { pageTitle });
});

router.get('/item/:id', async(req, res) => {
    let pageTitle = 'item';
    res.render('item', { pageTitle });
});

router.get('/cart', withAuth, async(req, res) => {
    let pageTitle = 'cart';
    res.render('cart', { pageTitle });
});

router.get('/login', async(req, res) => {
    let pageTitle = 'login';
    res.render('login', { pageTitle });
});

router.get('/signup', async(req, res) => {
    let pageTitle = 'signup';
    res.render('signup', { pageTitle });
});

router.get('/contact', async(req, res) => {
    let pageTitle = 'contact';
    res.render('contact', { pageTitle });
});

module.exports = router;