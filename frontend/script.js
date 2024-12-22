// Function to navigate between pages
function navigateTo(page) {
    window.location.href = page;
  }
  
  // Handle Login Submission
  function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const role = new URLSearchParams(window.location.search).get("role");
  
    if (role === "student") {
      navigateTo("student-homepage.html");
    } else if (role === "teacher") {
      navigateTo("teacher-homepage.html");
    } else {
      alert("Invalid role. Please return to the welcome page.");
    }
  }
  
  // Handle Signup Submission
  function handleSignup(event, role) {
    event.preventDefault();
    alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully!`);
    navigateTo("login.html");
  }
  
  // Handle Query Posting (Student)
  function postQuery(event) {
    event.preventDefault();
    const queryContent = document.getElementById("query-input").value;
  
    if (queryContent.trim() !== "") {
      alert("Query posted successfully!");
      document.getElementById("query-input").value = "";
    } else {
      alert("Please enter a valid query.");
    }
  }
  
  // Handle Challenge Assignment (Teacher)
  function assignChallenge(event) {
    event.preventDefault();
    const challengeContent = document.getElementById("challenge-input").value;
  
    if (challengeContent.trim() !== "") {
      alert("Challenge assigned successfully!");
      document.getElementById("challenge-input").value = "";
    } else {
      alert("Please describe the challenge before assigning.");
    }
  }
  
  // Handle Feedback Submission
  function submitFeedback(event) {
    event.preventDefault();
    const feedbackContent = document.getElementById("feedback-input").value;
  
    if (feedbackContent.trim() !== "") {
      alert("Thank you for your feedback!");
      document.getElementById("feedback-input").value = "";
    } else {
      alert("Please write your feedback before submitting.");
    }
  }
  