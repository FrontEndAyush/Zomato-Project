const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


 window.addEventListener("mousemove", (details) =>{
    let circle = document.querySelector(".circle")
    circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
     })




const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {

        let now = new Date().getTime();


        console.log(now - prev, delay);

const windowWidth = window.innerWidth;

if (windowWidth < 480) {
   
    return;
}

        if (now - prev > delay) {
            prev = now;


            return func(...args);
        }
    }
}
document.body.addEventListener("mousemove", throttleFunction((details) => {
    let main = document.querySelector('#main')
    let div = document.createElement("div")
    div.style.left = details.clientX + "px"
    div.style.top = details.clientY + "px"
    let img = document.createElement("img")
    let arrOfImages = ["imageF/1.jpg", "imageF/2.jpg", "imageF/3.jpg", "imageF/4.jpg", "imageF/5.jpg"]
    let randomImage = arrOfImages[Math.floor(Math.random() * arrOfImages.length)]
    img.setAttribute("src",randomImage)
    div.append(img)
    div.classList.add("imageFile")
    document.body.append(div)

    setTimeout(() =>{
        div.remove()
    },700)
}, 100));



let currentIndexForHeader = 0
let currentIndex = 0

function automaticCustomerReviewChanger() {
    let paragraph = document.getElementById("paragraph")
    let imagefile = document.getElementById('imagefile')
    let name = document.getElementById("name")
    let profession = document.getElementById("profession")

    let arrOfImages = ["secondpageImg/2.png", "secondpageImg/3.png", "secondpageImg/1.png"]
    let arrOfParagraph = ["Earlier, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.", "Later, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.", "Getter, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato .",]
    let arrOfNames = ["Jasmeet Singh", "Raghudeep Singh", "Pardeep Singh"]
    let arrOfProfession = ["Owner - Pick and Move, Udaipur", "Owner - Run and Eat, Udaipur", "Owner - Lyrically and Musically, Udaipur"]

    if (currentIndex >= 2) {
        currentIndex = 0
    }
    else {
        currentIndex++
    }
    imagefile.src = arrOfImages[currentIndex]
    paragraph.textContent = arrOfParagraph[currentIndex]
    name.textContent = arrOfNames[currentIndex]
    profession.textContent = arrOfProfession[currentIndex]
}
setInterval(() => { automaticCustomerReviewChanger() }, 3000)


function rightarrow() {
    automaticCustomerReviewChanger()
}
function leftarrow() {
    let paragraph = document.getElementById("paragraph")
    let imagefile = document.getElementById('imagefile')
    let name = document.getElementById("name")
    let profession = document.getElementById("profession")

    let arrOfImages = ["secondpageImg/2.png", "secondpageImg/3.png", "secondpageImg/1.png"]
    let arrOfParagraph = ["Earlier, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.", "Later, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.", "Getter, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato .",]
    let arrOfNames = ["Jasmeet Singh", "Raghudeep Singh", "Pardeep Singh"]
    let arrOfProfession = ["Owner - Pick and Move, Udaipur", "Owner - Run and Eat, Udaipur", "Owner - Lyrically and Musically, Udaipur"]


    if (currentIndex == 0) {
        currentIndex = 2
    }
    else {
        currentIndex--
    }
    imagefile.src = arrOfImages[currentIndex]
    paragraph.textContent = arrOfParagraph[currentIndex]
    name.textContent = arrOfNames[currentIndex]
    profession.textContent = arrOfProfession[currentIndex]
}

function coloringHeader() {
    let selectingHeader = document.querySelectorAll("#confessing #confessinginfo #details h2")


    if (currentIndexForHeader > selectingHeader.length - 1) {
        currentIndexForHeader = 0
    }
    else {
        currentIndexForHeader++
    }
    selectingHeader[currentIndexForHeader].style.color = "blue"
    setTimeout(() => {
        selectingHeader[currentIndexForHeader].style.color = "black"
    }, 1000)

}


function imageMove() {
    let imageLaptop = document.getElementById("imageLaptop")
    let arrOfImages = ["secondpageImg/laptop1.png", "secondpageImg/laptop2.png"]


    if (currentIndex > arrOfImages.length - 1) {
        currentIndex = 0
    }
    else {
        currentIndex++
    }
    imageLaptop.setAttribute("src", arrOfImages[currentIndex])
}

function showNavIcons() {
    let menu = document.getElementById("menu")
    let selectingNav = document.querySelector("#backimg nav")
    let selectingItags = document.querySelectorAll("#backimg nav i")
    let close = document.getElementById("close")

    let anchorNav = document.querySelectorAll("nav a")
    anchorNav.forEach((elem) => {
        elem.style.display = "block"

    })


    selectingNav.style.height = "100vh"
    selectingNav.style.flexDirection = "column"
    selectingNav.style.backgroundColor = "black"
    selectingNav.style.position = "absolute"
    menu.style.display = "none"
    close.style.display = "block"
}
function hidEverything() {
    let menu = document.getElementById("menu")
    let selectingNav = document.querySelector("#backimg nav")
    let anchorNav = document.querySelectorAll("nav a")
    let close = document.getElementById("close")
    anchorNav.forEach((elem) => {
        elem.style.display = "none"
    })
    selectingNav.style.height = "0vh"
    selectingNav.style.flexDirection = "row"
    selectingNav.style.backgroundColor = "transparent"
    selectingNav.style.position = "relative"
    close.style.display = "none"
    menu.style.display = "block"

}











setInterval(() => {
    coloringHeader()
}, 2000)

setInterval(() => {
    imageMove()
}, 2000)
setInterval(() => {

    automaticCustomerReviewChanger()

}, 3000)

