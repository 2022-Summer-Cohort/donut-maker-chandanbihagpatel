let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;

  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;

}

// let buttons = Array.from(document.querySelectorAll("button"));

// buttons.forEach(_button => {
//   buttons.addEventListener("mouseover", () => {
//     innerCursor.classList.add("grow");
//   });
//   buttons.addEventListener("mouseleave", () => {
//     innerCursor.classList.remove("grow");
//   });

  
// });