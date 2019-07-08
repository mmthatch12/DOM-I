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
logo.alt = 'The Great Idea Company Logo'

// forEach to set up nav
let navStuff = document.querySelectorAll('nav a')
console.log(navStuff)
navStuff.forEach((item, i) => {item.textContent = siteContent.nav[`nav-item-${i+1}`];
})

//cta section
let h1Stuff = document.querySelector('.cta-text h1')
console.log(h1Stuff)
h1Stuff.textContent = siteContent.cta['h1']

let buttonStuff = document.querySelector('.cta-text button')
console.log(buttonStuff)
buttonStuff.textContent = siteContent.cta['button']

let headerImg = document.querySelector('#cta-img')
console.log(headerImg)
headerImg.src = siteContent.cta['img-src']
headerImg.alt = 'Unbeleivable image of a code block on a black background'

//main content section

let textContenth4 = document.querySelectorAll('.text-content h4')
console.log(textContenth4)
textContenth4[0].textContent = siteContent["main-content"]['features-h4']
textContenth4[1].textContent = siteContent["main-content"]["about-h4"]
textContenth4[2].textContent = siteContent["main-content"]["services-h4"]
textContenth4[3].textContent = siteContent["main-content"]["product-h4"]
textContenth4[4].textContent = siteContent["main-content"]["vision-h4"]

let textContentp = document.querySelectorAll('.text-content p')
console.log(textContentp)
textContentp[0].textContent = siteContent["main-content"]["features-content"]
textContentp[1].textContent = siteContent["main-content"]["about-content"]
textContentp[2].textContent = siteContent["main-content"]["services-content"]
textContentp[3].textContent = siteContent["main-content"]["product-content"]
textContentp[4].textContent = siteContent["main-content"]["vision-content"]




