// WOW JS
const wow = new WOW({
    mobile: false
});
if (window.innerWidth >= 768) {
    wow.init();
}



// DOM ELEMENTS
const html = document.querySelector('html'),
    header = document.querySelector('header'),
    downBtn = document.querySelector('.down'),
    links = header.querySelectorAll('nav li a'),
    allSection = document.querySelectorAll('.section'),
    typeText = document.querySelector('.type-text'),
    hamburger = document.querySelector('header .hamburger'),
    helper = document.querySelector('header .helper'),
    closeBtn = document.querySelector('header .close'),
    goUp = document.querySelector('.go-up');

// TypeJS
if(window.innerWidth >= 768){
const typeEt = new TypeIt(typeText, {
    speed: 300,
    cursorSpeed: 500,
    loop: false,
    loopDelay: 1000,
    deleteSpeed: 100,
    nextStringDelay: 1000,
    waitUntilVisible: true
}).go();
}

//JS CODE
window.addEventListener('scroll', function () {
    handleHeader();
    handleActivMenu();
    hangleGoUp();
})

links.forEach(function (a) {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const id = a.getAttribute('href');

        if (id) {
            const block = document.querySelector(id);
            if (block) {
                if (window.innerWidth <= 991) {
                    handleSidebar();
                }
                scroller(block.offsetTop);
            }
        }
    })
})

downBtn.addEventListener('click', function () {
    const height = document.querySelector('.service-section').offsetTop;

    scroller(height);

})

goUp.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
hamburger.addEventListener('click', function () {
    handleSidebar();
})
helper.addEventListener('click', function () {
    handleSidebar();
})
closeBtn.addEventListener('click', function () {
    handleSidebar();
})


function handleSidebar() {
    html.classList.toggle('menu-active');
}

function handleActivMenu() {
    allSection.forEach(function (section) {
        const ch = Math.floor(document.documentElement.clientHeight / 2);
        const id = section.getAttribute('id');
        if (id) {
            const a = header.querySelector('[href="#' + id + '"]');
            if (a && (window.scrollY + ch > section.offsetTop)) {
                links.forEach((link) => {
                    link.classList.remove('active');
                })
                a.classList.add('active')
            } else {
                a.classList.remove('active')
            }
        }

    })
}

function hangleGoUp(){
    const height = document.documentElement.clientHeight;
    if(document.documentElement.scrollTop > height){
        goUp.classList.add('active')
    }else{
        goUp.classList.remove('active');
    }
}

function handleHeader() {
    if (window.innerWidth > 768) {
        if (document.documentElement.scrollTop > 150) {
            header.classList.add('js-active')
        } else {
            header.classList.remove('js-active')
        }
    }
}

function scroller(height = 0, removeHeight = true) {
    height = removeHeight ? height - header.offsetHeight : height;
    window.scrollTo({
        top: height,
        behavior: "smooth"
    })
}


ymaps.ready(init);
function init() {
    const center = [40.768810,72.236280];
    const myMap = new ymaps.Map("map", {
        center,
        zoom: 10
    });

    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        myMap.setCenter([position.coords.latitude, position.coords.longitude]);
    });
    }

    const placemark = new ymaps.Placemark(center, {
        balloonContent: '',
        iconContent: "Karshi, Uzbekistan"
     }, {
        preset: "islands#circleDotIcon",
        iconColor: '#0000ff'
    });
    myMap.geoObjects.add(placemark);
}