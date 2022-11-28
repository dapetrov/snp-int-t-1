let a = 450;

addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= a) {
    document.getElementById("H_C_S").className = "Header_Container_Scroll_ON";
  } else {
    document.getElementById("H_C_S").className = "Header_Container_Scroll";
  }
});
