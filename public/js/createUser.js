const createUserForm = async (event) => {
    event.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const response = await fetch('/api/user/create', {
        method: "POST",
        body: JSON.stringify({ fname, lname, email, password }),
        headers: { "Content-Type": "application/json" },
    });

    console.log(fname, lname, email, password);
}












// event listeners
document.getElementById("submitbtn").addEventListener('click', createUserForm)