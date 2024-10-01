document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const jobType = document.getElementById('jobType').value;
    const salary = document.getElementById('salary').value;
    const skills = document.getElementById('skills').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const education = document.getElementById('education').value;
    const benefits = document.getElementById('benefits').value;
    const applyLink = document.getElementById('applyLink').value;

    // Create a job object
    const job = {
        jobTitle: jobTitle,
        companyName: companyName,
        location: location,
        experience: experience,
        jobType: jobType,
        salary: salary,
        skills: skills,
        jobDescription: jobDescription,
        education: education,
        benefits: benefits,
        applyLink: applyLink
    };

    // For now, log the job object to the console
    console.log('Job Posted:', job);

    // You can add code here to send the job data to a server or API

    alert('Job posted successfully!');

    // Clear the form after submission
    document.getElementById('jobForm').reset();
});
