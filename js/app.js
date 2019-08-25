$( () => {
    console.log( 'DOM SIT ON CHAIR' );
 
    
    const prevSlideButton = $('#prevSlide');
    const nextSlideButton = $('#nextSlide');
    const imagesContainer = $('.slider__article-images');
    const imagesList = imagesContainer.find('li');
    let indeks = 0;
     
    prevSlideButton.on('click', () => {
        imagesList[indeks].classList.add('hidden');
        indeks--;
        if ( indeks === -1 ) {
            indeks = imagesList.length-1;
        }
        imagesList[indeks].classList.add('animation');
        imagesList[indeks].classList.remove('hidden');
    })

     nextSlideButton.on('click', () => {
        imagesList[indeks].classList.add('hidden');
        indeks++;
        if ( indeks === imagesList.length ) {
            indeks = 0;
        }
        imagesList[indeks].classList.add('animation');
        imagesList[indeks].classList.remove('hidden');
    })

 })
 