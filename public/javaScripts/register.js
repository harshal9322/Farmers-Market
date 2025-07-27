
document.getElementById("sendOTP").addEventListener("click", async () => {
   
    const email = document.querySelector("input[name='email']").value;
    const res = await fetch("/send-otp",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    });
    const data = await res.json();
    document.getElementById("msg").style.display = "block";
    document.getElementById("msg").innerText = data;
    setTimeout(() => {
        document.getElementById("msg").innerText = "";
        document.getElementById("msg").style.display = "none";
    }, 1500);
});

document.querySelector(".verify-otp").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.querySelector("input[name='email']").value;
    const OTP = document.querySelector("input[name='otp']").value;
    const res = await fetch("/verify-otp",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, OTP})
    });
    const data = await res.json();
    document.getElementById("msg").style.display = "block";
    document.getElementById("msg").innerText = data;
    setTimeout(() => {
        document.getElementById("msg").innerText = "";
        document.getElementById("msg").style.display = "none";
    }, 1500);
});

document.querySelector(".signbtn").addEventListener("click", async (e) => {
    e.preventDefault();

    const username = document.querySelector("input[name='username']").value;
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    const confirmPassword = document.querySelector("input[name='confirmPassword']").value;

    const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, confirmPassword })
    });

    const data = await res.json();

    const msg = document.getElementById("msg");
    msg.innerText = data.message;
    msg.style.display = "block";

        setTimeout(() => {
            msg.innerText = "";
            msg.style.display = "none";
        }, 1500);

        if(data === "Registration Successful."){
          setTimeout(() => {
            window.location.href="/user";
           }, 1000); 
        }
});