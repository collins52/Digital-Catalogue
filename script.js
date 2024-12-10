//display drop down
const categoryItems = document.getElementById('categoryItems')
const category = document.getElementById('category');
const body = document.body
const navBar = document.getElementById('nav')

body.addEventListener('click', function(evt){
    const event = evt.target;

    // Menu Button
    if(event.className.includes('menu-bar')){
        if(navBar.style.width == ''){
            navBar.style.width = '64vw'
        }
        
    }else if(event.id.includes('close')){
        console.log('click detected')
        navBar.style.width = '';
    }else if(navBar.style.width == '64vw'){
        console.log('width = 64vw')
        if(!event.id.includes('nav')){
            navBar.style.width = ''
        }
    }
})
