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
  const nav1=document.querySelector("nav .one")
  nav1.textContent=siteContent["nav"]["nav-item-1"]
  const nav2=document.querySelector("nav .two")
  nav2.textContent=siteContent["nav"]["nav-item-2"]
  const nav3=document.querySelector("nav .three")
  nav3.textContent=siteContent["nav"]["nav-item-3"]
  const nav4=document.querySelector("nav .four")
  nav4.textContent=siteContent["nav"]["nav-item-4"]
  const nav5=document.querySelector("nav .five")
  nav5.textContent=siteContent["nav"]["nav-item-5"]
  const nav6=document.querySelector("nav .six")
  nav6.textContent=siteContent["nav"]["nav-item-6"]

  const BigTitle=document.querySelector(".cta-text h1")
  BigTitle.textContent = siteContent["cta"]["h1"]

  const BigImage=document.querySelector("#cta-img")
  BigImage.src=siteContent['cta']["img-src"]

  const BigButton=document.querySelector(".cta-text button")
  BigButton.textContent = siteContent["cta"]["button"]

  const SecondImage=document.querySelector("#middle-img")
  SecondImage.src=siteContent["main-content"]["middle-img-src"]

  const FeaturesTitle=document.querySelector(".text-content1 h4")
  FeaturesTitle.textContent = siteContent["main-content"]["features-h4"]

  const FeaturesContent=document.querySelector(".text-content1 p")
  FeaturesContent.textContent = siteContent["main-content"]["features-content"]

  const AboutTitle=document.querySelector(".text-content2 h4")
  AboutTitle.textContent = siteContent["main-content"]["about-h4"]

  const AboutContent=document.querySelector(".text-content2 p")
  AboutContent.textContent = siteContent["main-content"]["about-content"]

  const ServicesTitle=document.querySelector(".text-content3 h4")
  ServicesTitle.textContent = siteContent["main-content"]["services-h4"]

  const serviceContent=document.querySelector(".text-content3 p")
  serviceContent.textContent = siteContent["main-content"]["services-content"]

  const ProductTitle=document.querySelector(".text-content4 h4")
  ProductTitle.textContent = siteContent["main-content"]["product-h4"]

  const ProductContent=document.querySelector(".text-content4 p")
  ProductContent.textContent = siteContent["main-content"]["product-content"]

  const VisionTitle=document.querySelector(".text-content5 h4")
  VisionTitle.textContent = siteContent["main-content"]["vision-h4"]

  const visionContent=document.querySelector(".text-content5 p")
  visionContent.textContent = siteContent["main-content"]["vision-content"]

  const ContactTitle=document.querySelector(".contact h4")
  ContactTitle.textContent=siteContent["contact"]["contact-h4"]

  const ContactAddress=document.querySelector(".contact .p1")
  ContactAddress.textContent=siteContent["contact"]["address"]

  const ContactPhone=document.querySelector(".contact .p2")
  ContactPhone.textContent=siteContent["contact"]["phone"]

  const ContactEmail=document.querySelector(".contact .p3")
  ContactEmail.textContent=siteContent["contact"]["email"]


  const FooterTitle=document.querySelector("footer")
  FooterTitle.textContent=siteContent["footer"]["copyright"]