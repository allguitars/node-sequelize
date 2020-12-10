// const User = require('./models/user.model');
// const Course = require('./models/course.model');
const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db-init')();

// getCourses();

// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

/**
 * Get all courses
 */
async function getCourses() {
  const courses = await Course.findAll();

  if (courses.every(course => course instanceof Course)) {
    console.log('All rows are valid.');
  }

  console.log('All courses:', JSON.stringify(courses, null, 2));
}



/**
 * Adding a course
 */
// async function addCourse() {
//   try {
//     const course = await db.Course.create({
//       name: 'Web Development',
//       courseIndex: 'CS101'
//     });
//     console.log('A course has been added:', course);

//   } catch (error) {
//     console.error('Unable to add the course:', error);
//   }
// }

/**
 * Adding an API key
 */
// async function addApiKey() {
//   try {
//     const apiKey = await db.ApiKey.create({
//       key: '123456',
//       description: 'This is a test',
//       username: 'dave.lee'
//     });
//     console.log('A key has been added:', apiKey);

//   } catch (error) {
//     console.error('Unable to add the key:', error);
//   }
// }

module.exports = server;
