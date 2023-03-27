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




  // update nav

  const navbars =document.querySelectorAll("nav a")

navbars.forEach(item =>{
  navbars[0].textContent = siteContent.nav["nav-item-1"]
   navbars[1].textContent = siteContent.nav["nav-item-2"]
   navbars[2].textContent = siteContent.nav["nav-item-3"]
   navbars[3].textContent = siteContent.nav["nav-item-4"]
   navbars[4].textContent = siteContent.nav["nav-item-5"]
   navbars[5].textContent = siteContent.nav["nav-item-6"]
   

})

  

// selection

const cta =document.querySelector(".cta h1")
const button =document.querySelector(".cta button")
const cta_img =document.getElementById("cta-img");


// add contant



cta.textContent = siteContent.cta["h1"]
button.textContent = siteContent.cta["button"]
cta_img.setAttribute("src", siteContent["cta"]["img-src"])


//selection

const mainContentTitle = document.querySelectorAll(".text-content h4")

const mainContent = document.querySelectorAll(".text-content p")


//add Content

mainContent.forEach(element  =>{
  mainContentTitle[0].textContent = siteContent["main-content"]["features-h4"]
  mainContentTitle[1].textContent = siteContent["main-content"]["about-h4"]
  mainContentTitle[2].textContent = siteContent["main-content"]["services-h4"]
  mainContentTitle[3].textContent = siteContent["main-content"]["product-h4"]
  mainContentTitle[4].textContent = siteContent["main-content"]["vision-h4"]
  
})
mainContent.forEach(element  =>{
  mainContent[0].textContent = siteContent["main-content"]["features-content"]
  mainContent[1].textContent = siteContent["main-content"]["about-content"]
  mainContent[2].textContent = siteContent["main-content"]["services-content"]
  mainContent[3].textContent = siteContent["main-content"]["product-content"]
  mainContent[4].textContent = siteContent["main-content"]["vision-content"]
  
})

// console.log(siteContent["main-content"])



//middle_img selection

const middle_img = document.querySelector("#middle-img")
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"])

console.log(middle_img)
//contact selection

 const contactTitle = document.querySelector(".contact h4")

 const contact = document.querySelectorAll(".contact p")


// add contact

contactTitle.textContent = siteContent["contact"]["contact-h4"]

contact.forEach(element =>{
  contact[0].textContent = siteContent["contact"]["address"]
  contact[1].textContent = siteContent["contact"]["phone"]
  contact[2].textContent = siteContent["contact"]["email"]
})



 const footer = document.querySelector("footer p")
 footer.textContent = siteContent["footer"]["copyright"]

// console.log(siteContent["main-content"]["middle-img-src"])

//   // console.log(navbars)

//   console.log(siteContent["cta"]["img-src"])
   