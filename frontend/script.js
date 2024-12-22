// Navigate to login page with role-based information
function navigateTo(role) {
    localStorage.setItem("userRole", role);
    window.location.href = "login.html";
  }
  
  // Handle login submission
  function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = localStorage.getItem("userRole");
  
    // Assuming authentication is successful, we store user data in localStorage
    if (role === "student") {
      localStorage.setItem('studentName', 'xyz');
      localStorage.setItem('studentCollege', 'ABC University');
      localStorage.setItem('studentPoints', '0');
      localStorage.setItem('studentYear', '0');
      localStorage.setItem('studentBranch', 'Computer Science');
      localStorage.setItem('studentRanking', '0');
      localStorage.setItem('studentQueriesSolved', '0');
      localStorage.setItem('studentQueriesPosted', '0');
      window.location.href = "student-profile.html";
    } else if (role === "teacher") {
      localStorage.setItem('teacherName', 'mnb');
      localStorage.setItem('teacherCollege', 'ABC University');
      localStorage.setItem('teacherPoints', '0');
      localStorage.setItem('teacherSubject', 'qwerty');
      localStorage.setItem('teacherRanking', '0');
      localStorage.setItem('teacherQueriesSolved', '0');
      localStorage.setItem('teacherQueriesPosted', '0');
      window.location.href = "teacher-profile.html";
    } else {
      alert("Role not defined. Please go back to the landing page.");
    }
  }
  