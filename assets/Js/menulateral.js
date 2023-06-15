// class MobileNavbar{
//     constructor(mobileMenu, listItens, navlinks){
//         this.mobileMenu = document.querySelector(mobileMenu);
//         this.listItens  = document.querySelector(listItens);
//         this.navlinks = document.querySelectorAll(navlinks);
//         this.activeClass = "active";
//     }

//     addClickEvent(){
//         this.mobileMenu.addEventListener("click", () => console.log ("hey❤️"));
//     }
//     init(){
//         if(this.mobileMenu){
//             this.addClickEvent();
//         }
//         return this;
//     }
// }

// const mobileNavbar = new MobileNavbar(
//     ".mobile-menu",
//     ".list-itens",
//     ".nav-list li"
// );

// mobileNavbar.init();


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();