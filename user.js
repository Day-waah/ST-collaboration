const express = require('express');
const bcrypt = require('bcryptjs');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { role, name, email, college, password, ...additionalData } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === 'student') {
      const newStudent = new Student({
        name,
        email,
        college,
        password: hashedPassword,
        branch: additionalData.branch,
        year: additionalData.year,
      });

      await newStudent.save();
      return res.status(201).json({ message: 'Student registered successfully' });
    }

    if (role === 'teacher') {
      const newTeacher = new Teacher({
        name,
        email,
        college,
        password: hashedPassword,
        experience: additionalData.experience,
        specialization: additionalData.specialization,
      });

      await newTeacher.save();
      return res.status(201).json({ message: 'Teacher registered successfully' });
    }

    res.status(400).json({ message: 'Invalid role specified' });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up', error });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { role, email, password } = req.body;

  try {
    const user =
      role === 'student'
        ? await Student.findOne({ email })
        : await Teacher.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

module.exports = router;