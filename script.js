document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const inviteWrapper = document.getElementById('invite-wrapper');
    const container = document.querySelector('.container');

    envelope.addEventListener('click', () => {
        container.classList.add('invite-active');
    });
});