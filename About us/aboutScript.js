document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.rightbox');

    function isInViewport(element){
        const rect = element.getBoundingClientRect();
        return(
            rect.top >= 0 &&
            rect.left >=0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll',() => {
        boxes.forEach(box => {
            if(isInViewport(box)){
                box.classList.add('animate');
            }
        });
    });
});