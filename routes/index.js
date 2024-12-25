const express = require('express');
const router = express.Router();
const connection = require('../config/connection').connection;

router.get("/", (req, res) => {
    res.render("index");
});
router.get("/about", (req, res) => {
    res.render("about");
});
router.get("/safety", (req, res) => {
    res.render("safety");
});
router.get("/acts", (req, res) => {
    res.render("acts");
});
router.get("/complaint", (req, res) => {
    res.render("complaint");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});
router.get("/renewal", (req, res) => {
    res.render("renewal");
});
router.get("/register", (req, res) => {
    res.render("register");
});
router.get("/services", (req, res) => {
    res.render("services");
});
router.get("/licence1", (req, res) => {
    res.render("licence");
});
module.exports = router;