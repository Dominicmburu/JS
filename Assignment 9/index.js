const myProm = new Promise((resolve, reject) => {
    console.log('I am running, please wait....');

    const skills = []; // Simulate fetching empty data from an API

    setTimeout(() => {
        if (skills.length > 0) {
            // Resolve the promise if there are skills
            resolve(skills);
        } else {
            // Reject the promise if the skills array is empty
            reject('Something went wrong: No skills found');
        }
    }, 3000); // Simulate a 3-second delay
});

// Consuming the promise
myProm
    .then((result) => {
        console.log('Skills:', result); // If resolved, log the skills
    })
    .catch((error) => {
        console.log('Error:', error); // If rejected, log the error
    });
