<script>
    let currentIndex = 0;
    const images = document.querySelectorAll('.hero-image');
    const totalImages = images.length;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
        const offset = -currentIndex * 100; // Calculate offset
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
</script>