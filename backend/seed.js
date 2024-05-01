const mongoose = require('mongoose');
const Student = require('./models/students');

mongoose.connect('mongodb://127.0.0.1:27017/sms')
    .then(() => {
        console.log('MongoDB Connected Succesfully')
    })
    .catch (err => {
        console.log('MongoDB Connection Failed')
        console.log(err);
    })

const seedStudent = [
    {
        name: 'Marcus Aurelius',
        rollno: 'R001',
        class: 'FE',
        dept: 'IT',
        dob: '121-04-26',
        gender: 'Male',
        email: 'marcusaurelius@gmail.com',
        mobile: '1234567890',
        attendance: '95%'
    },
    {
        name: 'Epictetus',
        rollno: 'R002',
        class: 'SE',
        dept: 'CSE',
        dob: '55-00-00',
        gender: 'Male',
        email: 'epictetus@gmail.com',
        mobile: '9876543210',
        attendance: '88%'
    },
    {
        name: 'Socrates',
        rollno: 'R003',
        class: 'TE',
        dept: 'ENTC',
        dob: '470-00-00',
        gender: 'Male',
        email: 'socrates@gmail.com',
        mobile: '1112223333',
        attendance: '92%'
    },
    {
        name: 'Robert Greene',
        rollno: 'R004',
        class: 'BE',
        dept: 'IT',
        dob: '1959-05-14',
        gender: 'Male',
        email: 'robertgreene@gmail.com',
        mobile: '9998887777',
        attendance: '87%'
    },
    {
        name: 'Napoleon Hill',
        rollno: 'R005',
        class: 'FE',
        dept: 'CSE',
        dob: '1883-10-26',
        gender: 'Male',
        email: 'napoleonhill@gmail.com',
        mobile: '7778889999',
        attendance: '91%'
    },
    {
        name: 'Siddhartha Gautama',
        rollno: 'R006',
        class: 'SE',
        dept: 'IT',
        dob: '563-00-00',
        gender: 'Male',
        email: 'buddha@gmail.com',
        mobile: '5554443333',
        attendance: '85%'
    },
    {
        name: 'Confucius',
        rollno: 'R007',
        class: 'TE',
        dept: 'ENTC',
        dob: '551-00-00',
        gender: 'Male',
        email: 'confucius@gmail.com',
        mobile: '4445556666',
        attendance: '90%'
    },
    {
        name: 'Rumi',
        rollno: 'R008',
        class: 'BE',
        dept: 'CSE',
        dob: '1207-09-30',
        gender: 'Male',
        email: 'rumi@gmail.com',
        mobile: '3336669999',
        attendance: '94%'
    },
    {
        name: 'Maimonides',
        rollno: 'R009',
        class: 'FE',
        dept: 'IT',
        dob: '1135-03-30',
        gender: 'Male',
        email: 'maimonides@gmail.com',
        mobile: '2227778888',
        attendance: '89%'
    },
    {
        name: 'Avicenna',
        rollno: 'R010',
        class: 'SE',
        dept: 'ENTC',
        dob: '980-08-22',
        gender: 'Male',
        email: 'avicenna@gmail.com',
        mobile: '1113335555',
        attendance: '93%'
    },
    {
        name: 'John Locke',
        rollno: 'R011',
        class: 'TE',
        dept: 'CSE',
        dob: '1632-08-29',
        gender: 'Male',
        email: 'johnlocke@gmail.com',
        mobile: '2223334444',
        attendance: '86%'
    },
    {
        name: 'Rene Descartes',
        rollno: 'R012',
        class: 'BE',
        dept: 'IT',
        dob: '1596-03-31',
        gender: 'Male',
        email: 'renedescartes@gmail.com',
        mobile: '3334445555',
        attendance: '92%'
    },
    {
        name: 'Immanuel Kant',
        rollno: 'R013',
        class: 'FE',
        dept: 'ENTC',
        dob: '1724-04-22',
        gender: 'Male',
        email: 'immanuelkant@gmail.com',
        mobile: '4445556666',
        attendance: '87%'
    },
    {
        name: 'Albert Camus',
        rollno: 'R014',
        class: 'SE',
        dept: 'CSE',
        dob: '1913-11-07',
        gender: 'Male',
        email: 'albertcamus@gmail.com',
        mobile: '5556667777',
        attendance: '90%'
    },
    {
        name: 'Aristotle',
        rollno: 'R015',
        class: 'TE',
        dept: 'IT',
        dob: '384-07-01',
        gender: 'Male',
        email: 'aristotle@gmail.com',
        mobile: '6667778888',
        attendance: '94%'
    },
    {
        name: 'Plato',
        rollno: 'R016',
        class: 'BE',
        dept: 'ENTC',
        dob: '428-05-21',
        gender: 'Male',
        email: 'plato@gmail.com',
        mobile: '7778889999',
        attendance: '88%'
    },
    {
        name: 'Thomas Aquinas',
        rollno: 'R017',
        class: 'FE',
        dept: 'CSE',
        dob: '1225-01-28',
        gender: 'Male',
        email: 'thomasaquinas@gmail.com',
        mobile: '8889990000',
        attendance: '91%'
    },
    {
        name: 'René Magritte',
        rollno: 'R018',
        class: 'SE',
        dept: 'IT',
        dob: '1898-11-21',
        gender: 'Male',
        email: 'renemagritte@gmail.com',
        mobile: '9990001111',
        attendance: '95%'
    },
    {
        name: 'Friedrich Nietzsche',
        rollno: 'R019',
        class: 'TE',
        dept: 'ENTC',
        dob: '1844-10-15',
        gender: 'Male',
        email: 'friedrichnietzsche@gmail.com',
        mobile: '0001112222',
        attendance: '89%'
    },
    {
        name: 'David Hume',
        rollno: 'R020',
        class: 'BE',
        dept: 'CSE',
        dob: '1711-05-07',
        gender: 'Male',
        email: 'davidhume@gmail.com',
        mobile: '1112223333',
        attendance: '92%'
    },
    {
        name: 'Martin Heidegger',
        rollno: 'R021',
        class: 'FE',
        dept: 'IT',
        dob: '1889-09-26',
        gender: 'Male',
        email: 'martinheidegger@gmail.com',
        mobile: '2223334444',
        attendance: '88%'
    },
    {
        name: 'Ludwig Wittgenstein',
        rollno: 'R022',
        class: 'SE',
        dept: 'ENTC',
        dob: '1889-04-26',
        gender: 'Male',
        email: 'ludwigwittgenstein@gmail.com',
        mobile: '3334445555',
        attendance: '93%'
    },
    {
        name: 'Jean-Paul Sartre',
        rollno: 'R023',
        class: 'TE',
        dept: 'CSE',
        dob: '1905-06-21',
        gender: 'Male',
        email: 'jeanpaulsartre@gmail.com',
        mobile: '4445556666',
        attendance: '90%'
    },
    {
        name: 'Bertrand Russell',
        rollno: 'R024',
        class: 'BE',
        dept: 'IT',
        dob: '1872-05-18',
        gender: 'Male',
        email: 'bertrandrussell@gmail.com',
        mobile: '5556667777',
        attendance: '91%'
    },
    {
        name: 'Michel Foucault',
        rollno: 'R025',
        class: 'FE',
        dept: 'ENTC',
        dob: '1926-10-15',
        gender: 'Male',
        email: 'michelfoucault@gmail.com',
        mobile: '6667778888',
        attendance: '87%'
    }
];

Student.insertMany(seedStudent)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err)
})


