// Function to navigate between pages
function navigateTo(page) {
    window.location.href = page;
  }
  
  // Handle Login Submission
  async function handleLogin(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = window.location.search.includes('role=student') ? 'student' : 'teacher';
  
    try {
      const response = await fetch('http://localhost:5501/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        alert('Login successful');
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
  
        // Redirect based on role
        if (role === 'student') {
          window.location.href = 'student-profile.html';
        } else {
          window.location.href = 'teacher-profile.html';
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
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
  