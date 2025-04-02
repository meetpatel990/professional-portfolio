 // Project Data Array
 const projects = [
    { title: "Campushire", image: "campushire.png", link: "https://campushire.vercel.app/" },
    { title: "Eyewear", image: "eyewear.png", link: "https://eyewear5.vercel.app/" },
    { title: "Bus Booking", image: "pho17.png", link: "https://meet287.github.io/redbus/" },
    { title: "Hotel Booking", image: "bluestay1.png", link: "https://githubmalay.github.io/bluestay/" },
    { title: "Template", image: "pho14.png", link: "https://githubmalay.github.io/Toranto/" },
    { title: "Food Hub", image: "pho12.png", link: "https://githubmalay.github.io/template2/" },
    { title: "To Do List", image: "pho7.png", link: "https://githubmalay.github.io/To-Do-list/" },
    { title: "Tic Tac Toe", image: "pho9.png", link: "https://githubmalay.github.io/ox-game/" }
];

// Function to Load Slides Dynamically
function loadProjects() {
    const swiperWrapper = document.getElementById("swiper-wrapper");
    projects.forEach(project => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img src="${project.image}" alt="${project.title}" class="img-fluid">
                    <h4 class="card-title mt-3">${project.title}</h4>
                    <a href="${project.link}" class="btn btn-dark btn-lg" target="_blank">Live Demo</a>
                </div>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
    // Swiper initialization
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
        },
    });
}

window.onload = loadProjects;
