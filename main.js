// let image = document.querySelectorAll('.round__box-image');
// let text = document.querySelectorAll(".round__box-text");


// for (let i = 0; i < text.length; i++) {
//     const el = text[i];

//   for (let k = 0; k < image.length; k++) {
//       const ele = image[k];

//       ele.addEventListener('mouseover', () => {
//         el.classList.add('active')
//       })
//       ele.addEventListener('mouseout', () => {
//         el.classList.remove('active')
//       })
      
//   }
    
// }


/* nav menu burger start */

const menuBtn = document.querySelector(".menu-btn");
const menuContent = document.querySelector(".menu__content");
const menuBurger = document.querySelector(".menu-burger");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuContent.classList.add("active");
        menuBurger.classList.add("fixed");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuContent.classList.remove("active");
        menuBurger.classList.remove("fixed");
        menuOpen = false;
    }
});

/* nav menu burger end */

// aylanish 


let card = document.querySelectorAll('.card__box')

card.forEach(cards => {
    cards.addEventListener('mousemove', rotate)
    cards.addEventListener('mouseout', rotateUnset)
});

function rotate(e) { 
    const item = this.querySelector('.projects__box')
    const halfHeight = item.offsetHeight / 2;
    // item.innerHTML = halfHeight - e.offsetY
    // console.log(`rotateX(${(halfHeight - e.offsetY) / 5}deg) rotateY(${-(halfHeight - e.offsetX) / 5} deg)`);
    item.style.transform = `rotateX(${(halfHeight - e.offsetY) / 5}deg) rotateY(${-(halfHeight - e.offsetX) / 5}deg)`   
 }

function rotateUnset(a) { 
    const item = this.querySelector('.projects__box')
    // const halfHeight = item.offsetHeight / 2;
    // item.innerHTML = halfHeight - e.offsetY
    // console.log(`rotateX(${(halfHeight - e.offsetY) / 5}deg) rotateY(${-(halfHeight - e.offsetX) / 5} deg)`);
    // item.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`  
    item.style.transform = `rotate(0)` 
 }

// 1212121212121211


// let card = document.querySelectorAll('.card')

// card.forEach(cards => {
//     cards.addEventListener('mousemove', rotate)
//     cards.addEventListener('mouseout', rotateUnset)
// });

// function rotate(e) { 
//     const item = this.querySelector('.more__box')
//     const halfHeight = item.offsetHeight / 2;
//     // item.innerHTML = halfHeight - e.offsetY
//     // console.log(`rotateX(${(halfHeight - e.offsetY) / 5}deg) rotateY(${-(halfHeight - e.offsetX) / 5} deg)`);
//     item.style.transform = `rotateX(${(halfHeight - e.offsetY) / 5}deg) rotateY(${-(halfHeight - e.offsetX) / 5}deg)`   
//  }

// function rotateUnset(a) { 
//     const item = this.querySelector('.more__box')
//     // const halfHeight = item.offsetHeight / 2;
//     // item.innerHTML = halfHeight - e.offsetY
//     // console.log(`rotateX(${(halfHeight - e.offsetY) / 5}deg) rotateY(${-(halfHeight - e.offsetX) / 5} deg)`);
//     // item.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`  
//     item.style.transform = `rotate(0)` 
//  }