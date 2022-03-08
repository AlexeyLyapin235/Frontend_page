function calc(){
    let num1,result
    num1 = document.getElementById('inp1').value
    result = 500 / num1
    document.getElementById('out').innerHTML = Math.floor(result);
}

const anchors = document.querySelectorAll('a[href*="#"]')
for(let anchor of anchors){
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block:'start'
        })
    })
}