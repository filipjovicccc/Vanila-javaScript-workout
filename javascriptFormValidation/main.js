function validateForm() {
    const form = document.forms.myForm;
    const name = form.elements.name;
    const email = form.elements.email;
    
    if (name.value === "") {
      alert("Name is required.");
      name.focus();
      return false;
    }
    
    if (email.value === "") {
      alert("Email is required.");
      email.focus();
      return false;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      alert("Invalid email address.");
      email.focus();
      return false;
    }
    
    return true;
  }