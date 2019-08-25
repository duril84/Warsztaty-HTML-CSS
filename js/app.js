$(() => {
    console.log('DOM SIT ON CHAIR');

    // SLIDER
    const prevSlideButton = $('#prevSlide');
    const nextSlideButton = $('#nextSlide');
    const imagesContainer = $('.slider__article-images');
    const imagesList = imagesContainer.find('li');
    let indeks = 0;

    prevSlideButton.on('click', () => {
        imagesList[indeks].classList.add('hidden');
        indeks--;
        if (indeks === -1) {
            indeks = imagesList.length - 1;
        }
        imagesList[indeks].classList.add('animation');
        imagesList[indeks].classList.remove('hidden');
    })

    nextSlideButton.on('click', () => {
        imagesList[indeks].classList.add('hidden');
        indeks++;
        if (indeks === imagesList.length) {
            indeks = 0;
        }
        imagesList[indeks].classList.add('animation');
        imagesList[indeks].classList.remove('hidden');
    })

    // CONTACT FORM
    const form = $('form.action');
    const name = $('#name');
    const email = $('#email');
    const textarea = $('#textarea');
    const agreement = $('#agreement');

    form.find('button').on('click', e => {
        e.preventDefault();
        sendMessage(name.val(), email.val(), textarea.val(), agreement.is(':checked'));
        name.val('');
        email.val('');
        textarea.val('');
    })

    const sendMessage = (name, email, textarea, transport) => {
        console.log(name);
        console.log(email);
        console.log(textarea);
        console.log(transport);
        // to implement
    }

    // APPLICATION
    const app = $('.application');
    const listArrow = app.find('.list_arrow');
    const summaryPanel = $('.summary_panel');
    const transportLabel = app.find('label');
    const transport = app.find('#transport');
    const order = $('.green_button');
   
    listArrow.eq(0).on('click', e => {
        $(e.target).next().slideToggle();
    })

    listArrow.eq(0).next().on('click', 'li', e => {
        listArrow.eq(0).prev().text( $(e.target).text() );
        listArrow.eq(0).prev().css( "color", "black" );
        summaryPanel.find('.panel_left').find('.title').text( $(e.target).text() );
        summaryPanel.find('.panel_right').find('.title').text( $(e.target).data('chair-price') );
        recalculateSummary();
        listArrow.eq(0).next().slideToggle();
    })

    listArrow.eq(1).on('click', e => {
        $(e.target).next().slideToggle();
    })

    listArrow.eq(1).next().on('click', 'li', e => {
        listArrow.eq(1).prev().text( $(e.target).text() );
        listArrow.eq(1).prev().css( "color", "black" );
        summaryPanel.find('.panel_left').find('.color').text( $(e.target).text() );
        summaryPanel.find('.panel_right').find('.color').text( $(e.target).data('color-price') );
        recalculateSummary();
        listArrow.eq(1).next().slideToggle();
    })
    listArrow.eq(2).on('click', e => {
        $(e.target).next().slideToggle();
    })

    listArrow.eq(2).next().on('click', 'li', e => {
        listArrow.eq(2).prev().text( $(e.target).text() );
        listArrow.eq(2).prev().css( "color", "black" );
        summaryPanel.find('.panel_left').find('.pattern').text( $(e.target).text() );
        summaryPanel.find('.panel_right').find('.pattern').text( $(e.target).data('pattern-price') );
        recalculateSummary();
        listArrow.eq(2).next().slideToggle();
    })

    transportLabel.on('click', () => {
        if ( !transport.is(':checked') ) {
            summaryPanel.find('.panel_left').find('.transport').text( 'Transport' );
           summaryPanel.find('.panel_right').find('.transport').text( app.find('#transport').data('transport-price') );
        } else {
            summaryPanel.find('.panel_left').find('.transport').text('');
            summaryPanel.find('.panel_right').find('.transport').text('');
        }
        recalculateSummary();
    })

    order.on('click', e => {
        e.preventDefault();
        const title = summaryPanel.find('.panel_left').find('.title').text();
        const color = summaryPanel.find('.panel_left').find('.color').text();
        const pattern = summaryPanel.find('.panel_left').find('.pattern').text();
        const transport = summaryPanel.find('.panel_left').find('.transport').is(':checked');
        orderChair(title, color, pattern, transport);
    });
     
    const orderChair = (title, color, pattern, transport) => {
        console.log(title);
        console.log(color);
        console.log(pattern);
        console.log(transport);
        // to implement
    }

    const recalculateSummary = () => {
        let chairPrice = parseInt( summaryPanel.find('.panel_right').find('.title').text() );
        let colorPrice = parseInt( summaryPanel.find('.panel_right').find('.color').text() );
        let patternPrice = parseInt( summaryPanel.find('.panel_right').find('.pattern').text() );
        let transportPrice = parseInt( summaryPanel.find('.panel_right').find('.transport').text() );
        if ( isNaN(chairPrice) ) {
            chairPrice = 0;
        }
        if ( isNaN(colorPrice) ) {
            colorPrice = 0;
        }
        if ( isNaN(patternPrice) ) {
            patternPrice = 0;
        }
        if ( isNaN(transportPrice) ) {
            transportPrice = 0;
        }
        summaryPanel.find('.sum strong').text( chairPrice + colorPrice + patternPrice + transportPrice );
    }

})
