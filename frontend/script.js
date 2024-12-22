document.getElementById("toggle-link").addEventListener("click", function (e) {
    e.preventDefault();
  
    const formTitle = document.getElementById("form-title");
    const submitButton = document.getElementById("submit-btn");
    const signupFields = document.getElementById("signup-fields");
    const toggleText = document.getElementById("toggle-text");
  
    if (formTitle.textContent === "Login") {
      formTitle.textContent = "Sign Up";
      submitButton.textContent = "Sign Up";
      signupFields.style.display = "block";
      toggleText.innerHTML = 'Already have an account? <a href="#">Login</a>';
    } else {
      formTitle.textContent = "Login";
      submitButton.textContent = "Login";
      signupFields.style.display = "none";
      toggleText.innerHTML = 'Don\'t have an account? <a href="#">Sign up</a>';
    }
  });
  