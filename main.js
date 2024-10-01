document.addEventListener("DOMContentLoaded", function () {
    // Accessing the notification icon element by its specific ID
    const notificationIcon = document.getElementById('nav-notification');
    const notificationCount = document.getElementById('notification-count');
  
    // Sample functionality to handle notifications (updating count)
    notificationIcon.addEventListener('click', function () {
      alert('You have ' + notificationCount.textContent + ' new notifications!');
      
      // Reset notification count after clicking
      notificationCount.textContent = '0';
    });
  });
  