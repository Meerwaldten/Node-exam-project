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
    console.log(req.session)
    res.send({ data: { username: req.session.username, isAdmin: req.session.isAdmin }});
});

router.get("/findcharacters", async (req, res) => {
    const username = req.session.username;
    const characters = await characterModel.find({ username: username})
    res.json(characters);
})


router.post("/createcharacter", async (req, res) => {
    console.log(req.session);
    const { characterName, characterRace, characterClass} = req.body; 
    const currentUsername = req.session.username;
    console.log("current username is: " + currentUsername);
    const newCharacter = new characterModel({ name: characterName, race: characterRace, class: characterClass, username: currentUsername });
    console.log(newCharacter)


    
    const characterMailOptions = {
        from: process.env.NODEMAILER_MAIL,
        to: req.session.email,
        subject: "You've created a new character!",
        text: `You've created a new character on our website.
        Character name: ${characterName}
        Character race: ${characterRace}
        Character class: ${characterClass}`
    };

    transporter.sendMail(characterMailOptions, function (err) {
        if(err){
            console.log("error sending email, " + err);
        }else {
            res.send({ message: "Mail sent"})
        }
    })

    await newCharacter.save();
})

router.post('/deletecharacter', async (req, res) => {
    try {
      const { name, race, class: characterClass, username } = req.body;
      console.log("Req.body fra deleteChar : " + req.body.name)
      console.log("Req.body fra deleteChar : " + req.body.race)
      console.log("Req.body fra deleteChar : " + req.body.class)
      console.log("Req.body fra deleteChar : " + req.body.username)

      const deletedCharacter = await characterModel.findOneAndDelete({
        name,
        race,
        class: characterClass,
        username
      });
      console.log("Character to delete: " + deletedCharacter)

      if (!deletedCharacter) {
        // If no character was found, send a response indicating that the character was not found
        return res.status(404).json({ message: 'Character not found' });
      }
  
      // Character successfully deleted
      res.status(200).json({ message: 'Character deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
/*
router.post("/deletecharacter", async (req, res) => {
    try {
        const { characterId } = req.body;
    
        // Validate the characterId
        if (!characterId) {
          return res.status(400).json({ error: 'Invalid characterId' });
        }
    
        // Delete the character from the database
        await Character.findByIdAndDelete(characterId);
    
        // Return a success response
        res.status(200).json({ message: 'Character deleted successfully' });
      } catch (error) {
        console.error('Error deleting character:', error);
        res.status(500).json({ error: 'An error occurred while deleting the character' });
      }
});
*/

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
    req.session.email = user.email;
    console.log("Session email is: " + req.session.email);
    console.log("Session username is: " + req.session.username);

    if(user.isAdmin){
        req.session.isAdmin = true
    } else {
        req.session.isAdmin = false
    }

    return res.status(201).json({ user: user, username: req.session.username, isAdmin: req.session.isAdmin })
}});



router.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.send({ message: "You've been logged out."})
    })
});


export default router;