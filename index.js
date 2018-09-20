let ypos, image, text;
function parallex() {
    ypos = window.pageYOffset
    image = document.getElementById('image')
    text = document.getElementById('text')
    image.style.top = ypos * 0.5 + 'px'    
    text.style.top = ypos * 0.110 + 50 + '%'     
}
window.addEventListener('scroll',parallex)

// jquery
//let ypos;
//let $image = $('#image')

//const parallex = () => {
//   ypos = window.pageYOffset;       
//   $image.css('top',ypos * 0.5 + "px")    
//}  
//$(window).on('scroll',parallex)
