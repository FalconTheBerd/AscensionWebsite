function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    // Validate input fields
    if (name === '' || title === '' || description === '') {
        alert('Please fill out all fields before sending the message.');
        return;
    }

    // Create a JSON object with the data
    var messageData = {
        content: `**Name:** ${name}}\n**Email:** ${email}\n**Title:** ${title}\n**Description:** ${description}`
    };

    // Send the JSON data to the provided webhook URL
    fetch('https://discord.com/api/webhooks/1171271218469548112/c8aspW3MZSOzpoOdSsIj0xqRU4loWUDhpuBol8BXzfoTfwfKrC8-DIBOi1x4jsSt_4eT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
    })
    .then(response => {
        if (response.ok) {
            console.log('Message sent successfully!');
            alert('Message sent successfully!');
            location.reload()
        } else {
            console.error('Error:', response.status);
            alert('Failed to send message.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
    });
    }

