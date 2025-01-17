
const section = document.querySelector("section")
// const fields = { // I tried doing some loops, but I cannot map it, and i cannot foreach so I just hard coded it instead
//     name,
//     email,
//     phone,
//     reason,
//     message,
// }
function renderSubmit(submission) {
    // const section = document.querySelector("section")
    const head = document.createElement("h2");
    head.textContent = "Submission Confirmation";
    
    const name = document.createElement("p");
    name.textContent = submission.name;
    
    const email = document.createElement("p");
    email.textContent = submission.email;
    
    const phone = document.createElement("p");
    phone.textContent = submission.phone;
    
    const reason = document.createElement("p");
    reason.textContent = submission.reason;
    
    const message = document.createElement("p");
    message.textContent = submission.message;
    
    section.appendChild(head);
    section.appendChild(name);
    
    section.append(head,name,email,phone,reason,message); // add elements
}

const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const submission = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            reason: e.target.reason.value,
            message: e.target.message.value,
        }
        
        // console.log(submission);
        section.innerHTML = ""; // clear
        renderSubmit(submission);
    }
)
