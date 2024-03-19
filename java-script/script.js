
let currentImageIndex = 0;
const centralImage = document.getElementById("centralImage");

// Add paths to your images here
const images = [
    "images/cameraman_and_speakerman.png",
    "images/oip_2.jpg",
    "images/da_rock.jpg",
    "images/skibidi.jpg",
    "images/eeee.jpg",
    "images/oo.jpg",
    "images/obamaprism.jpg",

    "images/download.jpg",
    "images/download2.jpg",
    "images/kalm.jpg",
    "images/panik.jpg",
    "images/catinthearpy.jpg",
    "images/R.jpg",
    "images/1234.jpg",
    "images/fnaf.jpg",
    "images/maxresdefault.jpg",
"images/e.jpg",
"images/doge.jpg",
"images/fat-doge.jpg",
"images/another-one.jpg",
"images/discord.jpg",
];

// Initialize the slideshow with the first image
window.onload = () => {
  centralImage.src = images[currentImageIndex];
};

// Show the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  centralImage.src = images[currentImageIndex];
}

// Show the previous image
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  centralImage.src = images[currentImageIndex];
}