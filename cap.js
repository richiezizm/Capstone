function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == email) {
      alert("Thank you!");
      return true; } 
        else {
        alert("Please enter a valid email address");
      }
    
      };
  

  const firstName = "Rich";
  const lastName = "Senquis";
  const email = "rsenquis@gmail.com";

  function addItem() {
        document.getElementById("demo").innerHTML = "Hello World";
      };