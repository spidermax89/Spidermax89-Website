async function sendContact(ev) {
    ev.preventDefault();

    const sendusername = document.getElementById('username').value;
    const sendercontent = document.getElementById('feedback').value;

    const webhookBody = {
        embeds: [{
            title: 'Feedback!',
            color: 741568,
            fields: [
                {name: 'Username:', value: sendusername},
                {name: 'Feedback:', value: sendercontent},
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1035642810277298227/kEkkRexMkFuHzILAEy8aHpe2KN4I-7BKm01JpAJ0L8dPnaDunstZNliajqaM-pMIaX58';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('Feedback sent! Thanks.');
    } else {
        alert('There was an error submitting Feedback!');
    }
}