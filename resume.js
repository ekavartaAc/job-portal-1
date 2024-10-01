// script.js

// Function to generate the resume
document.getElementById('generate-resume-btn').addEventListener('click', function() {
    const template = document.getElementById('template-selection').value;
    const background = document.getElementById('background-selection').value;
    const photo = document.getElementById('photo-upload').files[0];
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('job-title').value;
    const contactInfo = document.getElementById('contact-info').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    // Create a div to display the resume preview
    const resumePreview = document.getElementById('resume-preview');
    resumePreview.innerHTML = '';

    // Set the background color
    resumePreview.style.backgroundColor = background;

    // Create the resume content
    const resumeContent = `
        <div style="text-align: center;">
            ${photo ? `<img src="${URL.createObjectURL(photo)}" alt="Your Photo" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;">` : ''}
            <h2>${name}</h2>
            <h3>${jobTitle}</h3>
        </div>
        <div style="margin-top: 30px;">
            <h4>Contact Information</h4>
            <p>${contactInfo}</p>

            <h4>Experience</h4>
            <p>${experience}</p>

            <h4>Education</h4>
            <p>${education}</p>

            <h4>Skills</h4>
            <p>${skills}</p>
        </div>
    `;

    // Apply the selected template (e.g., different fonts or layout styles based on the template)
    resumePreview.innerHTML = resumeContent;

    if (template === 'template1') {
        resumePreview.style.fontFamily = 'Arial, sans-serif';
    } else if (template === 'template2') {
        resumePreview.style.fontFamily = 'Georgia, serif';
    } else if (template === 'template3') {
        resumePreview.style.fontFamily = 'Courier New, monospace';
    }
});

// Function to download the resume as a PDF
document.getElementById('download-resume-btn').addEventListener('click', function() {
    const resumePreview = document.getElementById('resume-preview');
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Convert the resume preview to a PDF and download it
    html2pdf().from(resumePreview).set(opt).save();
});
