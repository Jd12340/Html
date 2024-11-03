document.getElementById("smsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;
    const message = document.getElementById("message").value;

    fetch("https://textbelt.com/text", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            phone: phoneNumber,
            message: message,
            key: "textbelt"  // TextBelt's free API key
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("response").innerText = "SMS sent successfully!";
        } else {
            document.getElementById("response").innerText = "Error: " + data.error;
        }
    })
    .catch(error => {
        document.getElementById("response").innerText = "Error: " + error.message;
    });
});
