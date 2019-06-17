const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let topNav = document.querySelector("nav").children
topNav[0].textContent = siteContent["nav"]['nav-item-1']
topNav[1].textContent = siteContent["nav"]['nav-item-2']
topNav[2].textContent = siteContent["nav"]['nav-item-3']
topNav[3].textContent = siteContent["nav"]['nav-item-4']
topNav[4].textContent = siteContent["nav"]['nav-item-5']
topNav[5].textContent = siteContent["nav"]['nav-item-6']

let ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent["cta"]["h1"]

let ctaBut = document.querySelector('button')
ctaBut.textContent = siteContent["cta"]["button"]

let ctaImg = document.querySelector('.cta img')
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let mcTopCont = document.querySelectorAll('.main-content h4')
mcTopCont[0].textContent = siteContent["main-content"]["features-h4"]
mcTopCont[1].textContent = siteContent["main-content"]["about-h4"]
mcTopCont[2].textContent = siteContent["main-content"]["services-h4"]
mcTopCont[3].textContent = siteContent["main-content"]["product-h4"]
mcTopCont[4].textContent = siteContent["main-content"]["vision-h4"]



let midImg = document.querySelector('.middle-img')
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let mcBotCont = document.querySelectorAll('.main-content p')
mcBotCont[0].textContent = siteContent["main-content"]["features-content"]
mcBotCont[1].textContent = siteContent["main-content"]["about-content"]
mcBotCont[2].textContent = siteContent["main-content"]["services-content"]
mcBotCont[3].textContent = siteContent["main-content"]["product-content"]
mcBotCont[4].textContent = siteContent["main-content"]["vision-content"]










