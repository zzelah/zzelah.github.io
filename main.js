$(document).ready( () => {
    
    // UPDATES PROGRESS BAR ON SCROLL
    $(window).on('scroll resize', () => {
        let scrollOffset = document.body.getBoundingClientRect().top || document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = -Math.ceil( (scrollOffset / scrollHeight * 100 )) + "%";
        
        $('.nav__progress').css('width', progress);
    });

    // TOGGLES LIGHT MODE AND DARK MODE
    $('.theme__switch').click( () => {
        $('.slider').toggleClass('dark');
        $('body').toggleClass('dark');
    });

    // TOGGLES NAVIGATION MENU
    function toggleMenu() {
        $('.nav__window').toggle();
        $('.nav__bar').toggleClass('active');
        $('.sun').toggleClass('nav__active');
        $('.moon').toggleClass('nav__active');
        $('body, html').toggleClass('nav__active');
    }
    
    $('.menu__button, .nav__link').click( () => { toggleMenu(); });

    // PORTFOLIO ARROWS
    let portfolio = $('.portfolio .container');

    $('.portfolio__arrows .left').on('click', () => { $(portfolio).animate({ scrollLeft: '-=' + 290 }, 300); });
    $('.portfolio__arrows .right').on('click', () => { $(portfolio).animate({ scrollLeft: '+=' + 290 }, 300); });

    $(portfolio).on('scroll', () => {    
        let pWidth = $(portfolio).width(),
            pScrollLeft = $(portfolio).scrollLeft(),
            pScrollWidth = $(portfolio)[0].scrollWidth;
        
        if( pScrollLeft <= 0 ) { 
            $('.portfolio__arrows .left').hide() 
        } else ( $('.portfolio__arrows .left').show() );
        if( pWidth + pScrollLeft >= pScrollWidth ) { 
            $('.portfolio__arrows .right').hide() 
        } else ( $('.portfolio__arrows .right').show() );
    })

    

    // MODAL ACTIONS
    let modalImages = [
        `<img src="./images/portfolio/hs-1.jpg">`,
        `<img src="./images/portfolio/bh-2.jpg">`,
        `<img src="./images/portfolio/bh-1.jpg">`,
        `<img src="./images/portfolio/dev-2.jpg">`,
        `<img src="./images/portfolio/dev-1.jpg">`,
        `<img src="./images/portfolio/idol-2.jpg">`,
        `<img src="./images/portfolio/idol-1.jpg">`,
        `<img src="./images/portfolio/improv-1.jpg">`,
        `<img src="./images/portfolio/personal-2.jpg">`,
        `<img src="./images/portfolio/personal-1.jpg">`,
        `<img src="./images/portfolio/sonder-2.jpg">`,
        `<img src="./images/portfolio/sonder-1.jpg">`,
        `<img src="./images/portfolio/te-2.jpg">`,
        `<img src="./images/portfolio/te-1.jpg">`,
        `<img src="./images/portfolio/ux-2.jpg">`,
        `<img src="./images/portfolio/ux-1.jpg">`,
        `<img src="./images/portfolio/wildcard-1.jpg">`,
        `<img src="./images/portfolio/talk-1.jpg">`,
        `<img src="./images/portfolio/bn-1.jpg">`,
        `<img src="./images/portfolio/hf-2.jpg">`,
        `<img src="./images/portfolio/hf-1.jpg">`,
    ];

    let descs = {
        sonder: `For CompSAt’s COA Recruitment Week 2021, our theme was Sonder! It was a packed week for recruiting potential members of the organization
                by enticing them with an exciting adventure with the organization’s official mascot, 
                Corgear!<br/><br/>As the then VP for Communications, I created all of the assets together with most 
                of the promotional materials as a one-person department at the time.`,
        te: `Tech Everywhere 2021 was an online conference-camp by GDSC-L that educated students on the latest technologies in 
            the Philippines. Its branding was festive and quirky with the Philippines’s red, blue, and yellow.`,
        bn: `Buddy Nights is CompSAt’s recurring project where members hangout and get to know one another. 
            As its Creatives Head, I created promotional materials highlighting the wide range of activities 
            for the night in theme with our Halloween and Valentines celebration.`,
        improv: `The Improv Workshop is a collaboration project between the Computer Society of the Ateneo and the 
                Blue Bird Improv. It’s a 3-hour workshop filled with improvisation games. The branding for the event is more 
                quirky and free with the grunge brush strokes and cartoonish mascots to tie with the chill activities.`,
        idol: `As part of Ateneo’s online Orientation Seminar, O-idol is an initiative that showcases the talent of the 
              incoming college freshmen. As a Documentations and Publication volunteer, I layouted some publication materials while 
              following a brand manual and using a given set of assets. The branding for the event had a Y2K and kid-core aesthetic.`,
        dev: `Re<dev>fined was the title for GDSC-L Recruitment Week 2021. The branding for the event 
             highlighted the warmth, comfort, and interaction within the tech organization to invite potential members of the organization. 
             As the then Creatives and Branding Lead, I created some of the publication materials and design assets.`,
        personal: `Aside from creating publication materials, I do like to paint digitally too! On my free time, I also experiment 
                  with acrylic and gouache paints. I mainly draw portraits with a rough and painterly style in contrast to the 
                  vectors of my other promotional works.`,
        hf: `HackFest 2023 is GDSC-L’s 2 week event with a 48-hour
            hackathon. As GDSC-L’s Chief Communications Officer, I
            oversaw the creations and release of all publication materials
            from digital posters and printed tarpaulins to documentation.`,
    }

    $('.portfolio__card').on('click', e => {
        let card = e.target.closest('.portfolio__card');
        let cardId = $(card).attr('id');
        let cardTitle = $(card).find('.captions h3').html();
        let filtered = modalImages.filter( element => element.includes(cardId));
        
        $('#modal__title').html(cardTitle);
        $('#modal__description').html( descs[String(cardId)] );
        filtered.forEach(element => { $('#modal__images').prepend(element); });
        $('.overlay, .modal').show();
    });

    $('.close, .overlay').on('click', () => {
        $('.overlay, .modal').hide();
        $('#modal__images').empty();

    });
});
