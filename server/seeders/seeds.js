const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 20; i++) {
        const firstName = "firstName" + i;
        const lastName = "lastName" + i;
        const email = firstName + "@gmail.com";
        const password = "password";

        userData.push({ firstName, lastName, email, password });
    }
    await User.collection.insertMany(userData);

    console.log('all done!');
    process.exit(0);
});