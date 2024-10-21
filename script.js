function getFormvalue(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the form element
        let form = document.getElementById("form1");

        // Create a new FormData object
        let formData = new FormData(form);

        // Get the values from the form
        let fname = formData.get("fname");
        let lname = formData.get("lname");

        // Display the values using alert
        alert(fname + " " + lname);

        // Return false to stop form submission
        return false;
}