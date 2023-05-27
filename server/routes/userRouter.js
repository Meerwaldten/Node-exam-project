import express from "express";
import bcrypt from "bcrypt";
import { userModel } from "../models/users.js";
import { characterModel } from "../models/characters.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv/config.js";


const router = express.Router();

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_MAIL, 
      pass: process.env.NODEMAILER_PASSWORD, 
    },
});

router.get("/users", (req, res) => {
    console.log("Username from session: " + req.session.username);
    res.send({ data: { username: req.session.username }});
});

router.get("/findcharacters", async (req, res) => {
    const username = req.body;
    const characters = await characterModel.find({ username: username})
    res.json(characters);
})


router.post("/createcharacter", async (req, res) => {
    const { name, race, classl, level, username} = req.body; 
    const newCharacter = new characterModel({ name: name, race: race, class: classl, level: level, username: username });
    console.log(newCharacter)
    await newCharacter.save();
})

router.post("/signup", async (req, res) => {
    const {username, email, password} = req.body;
    
    const user = await userModel.findOne({ username });
    if (user){
        return res.status(404).send({ message: "username already exist"})
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({email: email, username: username, password: hashPassword, isAdmin: false});
    console.log("New user created with: " + newUser)
    await newUser.save();
    
    const mailOptions = {
        from: process.env.NODEMAILER_MAIL,
        to: email,
        subject: "Congrats on signing up with us",
        text: `You've been registered, ${username}, with the email: ${email}`
    };

    transporter.sendMail(mailOptions, function (err) {
        if(err){
            console.log("error sending email, " + err);
        } else {
            res.send({ message: "User created and mail sent"})
        }
    })
});


router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.findOne({username});
    if(!user){
        return res.status(404).send({ message: "Username not found"});
    }

    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword){
        res.status(404).json({ message: "Wrong password"});
    } else {

    req.session.username = username;

    console.log("Username from session: " + req.session.username);
    console.log(user)
    return res.status(201).json({ user: user, username: req.session.username })
}});



router.post("/logout", (req, res) => {
    const usernameTest = req.session.username;
    console.log("Test før destroy " + usernameTest);
    req.session.destroy(() => {
        res.send({ message: usernameTest +  " has been logged out."})
    })
    console.log("Test efter destroy " + usernameTest);
});


export default router;