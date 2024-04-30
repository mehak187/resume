document.addEventListener('DOMContentLoaded', function () {
    var popImage = document.getElementById('popImage');
    var popoverContent = `
        <div class="custom-popover">
            <h5 class="custom-heading">Want to get in touch?</h5>
            <p class="custom-paragraph">We're always looking for ways to improve Pro and add more value to you and your career.If you have any feedback or you'd like to get in touch, we'd love to hear from you.</p>
        </div>
    `;
    var popover = new bootstrap.Popover(popImage, {
        content: popoverContent,
        html: true
    });
});
