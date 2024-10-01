// Function to handle form submission and display profile details
document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name-input").value;
    const title = document.getElementById("title").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    
    document.querySelector(".name").textContent = name;
    document.querySelector(".title").textContent = title;
    
    alert("Profile Updated!");
  });
  
  // Handle image upload and preview
  document.getElementById("image-upload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function() {
      document.getElementById("profile-pic").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });
  
  // Save custom work descriptions in "What I Do" section
  document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const work1 = document.getElementById("work-1").value;
    const work2 = document.getElementById("work-2").value;
    const work3 = document.getElementById("work-3").value;
    const work4 = document.getElementById("work-4").value;
    
    document.querySelectorAll('.service input[type="text"]').forEach((input, index) => {
      input.placeholder = input.value || `Work ${index + 1}`;
    });
    
    alert("Profile Updated!");
  });









  // Existing JavaScript code for handling form submission and image upload is unchanged

// Placeholder function for Create Resume button
document.getElementById("create-resume").addEventListener("click", function() {
    alert("Resume generation feature is not yet implemented!");
  });
  
  