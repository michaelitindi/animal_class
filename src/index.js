
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const akan = document.getElementById("akan");
akan.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const birthday = document.getElementById('birthday').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
})
