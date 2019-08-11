document.addEventListener('DOMContentLoaded', function(){
    console.log( 'DOM SIT ON CHAIR' );
 
    
    var prevSlideButton = document.querySelector('.slider__article-back');
    var nextSlideButton = document.querySelector('.slider__article-next');
    var imagesContainer = document.querySelector('.slider__article-images');
    var imagesList = imagesContainer.querySelectorAll('li');
    var indeks = 0;
     
    prevSlideButton.addEventListener('click', function(){
        imagesList[indeks].classList.add('hidden');
        indeks--;
        if ( indeks === -1 ) {
            indeks = imagesList.length-1;
        }
        imagesList[indeks].classList.remove('hidden');
    })

     nextSlideButton.addEventListener('click', function(){
        imagesList[indeks].classList.add('hidden');
        indeks++;
        if ( indeks === imagesList.length ) {
            indeks = 0;
        }
        imagesList[indeks].classList.remove('hidden');
    })

 })