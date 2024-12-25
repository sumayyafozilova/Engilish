// Musiqa va harflarni tanlash
const audio = document.getElementById('music');
const playButton = document.querySelector('.playButton');
const letters = document.querySelectorAll('.text .harf');

// Musiqa tugmasini bosganda musiqani o'ynatish
playButton.addEventListener('click', () => {
    audio.play();

    console.log('bosildi');
    
});
