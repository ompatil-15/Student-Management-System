
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');

const Student = require('./models/students')

const server = express();
server.use(cors());
server.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/sms')
    .then(() => {
        console.log('MongoDB Connected Succesfully')
    })
    .catch(err => {
        console.log('MongoDB Connection Failed:', err)
        console.log(err);
    })

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.urlencoded({ extended: true }));
server.use(methodOverride('__method'));


server.post('/students', async (req, res) => {
    try {
        console.log(req.body); 
        const newStudent =  new Student(req.body);
        await newStudent.save();
    } catch (error) {
      console.error('Error adding student');
      res.status(500).json({ error: 'Failed to add student' });
    }
});


server.get('/students', async (req, res) => {
    const { dept } = req.query;
    if (dept) {
        const students = await Student.find({ dept });
        res.json(students);
    } else {
        const students = await Student.find({});
        // console.log(students);
        res.json(students);
    }
})

server.get('/students/:id', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json(student);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  server.delete('/students/:id', async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) {
        return res.status(404).send('Student not found');
      }
      res.send('Student deleted successfully');
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).send('Internal Server Error');
    }
  });


  server.put('/students/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { attendance } = req.body;
  
      // Find the student by ID
      const student = await Student.findById(id);
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      // Update the attendance
      student.attendance = attendance;
  
      // Save the updated student
      await student.save();
  
      res.status(200).json(student);
    } catch (error) {
      console.error('Error updating student attendance:', error);
      res.status(500).json({ message: 'Failed to update student attendance' });
    }
  });

server.listen(3001, () => {
    console.log('Server Listening on PORT 3001')
})
