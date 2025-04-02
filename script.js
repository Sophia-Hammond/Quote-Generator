
// array holding image file paths 

const images = [
        "quoteImages/Quote1.png",
        "quoteImages/Quote2.png",
        "quoteImages/Quote3.png",
        "quoteImages/Quote4.png",
        "quoteImages/Quote5.png",
        "quoteImages/Quote6.png",
        "quoteImages/Quote7.png",
        "quoteImages/Quote8.png",
        "quoteImages/Quote9.png",
        "quoteImages/Quote10.png",
        "quoteImages/Quote11.png",
        "quoteImages/Quote12.png",
        "quoteImages/Quote13.png",
        "quoteImages/Quote14.png",
        "quoteImages/Quote15.png",
        "quoteImages/Quote16.png",
        "quoteImages/Quote17.png",
        "quoteImages/Quote18.png",
        "quoteImages/Quote19.png",
        "quoteImages/Quote20.png",
        "quoteImages/Quote21.png",
        "quoteImages/Quote22.png",
        "quoteImages/Quote23.png",
        "quoteImages/Quote24.png",
        "quoteImages/Quote25.png",
        "quoteImages/Quote26.png",
        "quoteImages/Quote27.png",
        "quoteImages/Quote28.png",
        "quoteImages/Quote29.png",
        "quoteImages/Quote30.png",
        "quoteImages/Quote31.png",
        "quoteImages/Quote32.png",
        "quoteImages/Quote33.png",
        "quoteImages/Quote34.png",
        "quoteImages/Quote35.png",
        "quoteImages/Quote36.png",
        "quoteImages/Quote37.png",
        "quoteImages/Quote38.png",
        "quoteImages/Quote39.png",
        "quoteImages/Quote40.png",
        "quoteImages/Quote41.png",
        "quoteImages/Quote42.png"
];

// pre load images for faster loading 
images.forEach(src => {
    const img = new Image(); // creates new image object
    img.src = src; // Loads the image into memory
});

// Stops from getting the same image twice in a row
let lastIndex = -1

function generateImage() {
    let randomIndex

    // Keeps generating till it finds a image diffrent from the last
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    }while (randomIndex === lastIndex);

    lastIndex = randomIndex; // update lastIndex to the new one 
     
    // sets the selected img into the <img> element in the HTML
    document.getElementById("quote-image").src = images[randomIndex];
    
    // logs selected image
    console.log("Selected image:", images[randomIndex]);
}

    // Runs when page loads 
    window.onload = generateImage();


//Math.random- Generates a random index between 0-41
//document.getElementById("quote-image") finds the <img> element in the HTML
//.src = images[randomIndex] sets its src attribute to a randomly selected image from the images array