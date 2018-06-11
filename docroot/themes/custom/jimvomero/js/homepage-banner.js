(function($) {
  $(document).scroll(function(){

    /**
     * Visual Effects on Homepage Banner Text
     *
     * Measures the scroll position of the document. As the user scrolls down,
     * the opacity of the image decreases (fading) and the position of the text
     * changes to proportional to the user's scroll.
     */
    let scrollPosition = $(this).scrollTop();
    let bannerText = $('.banner-text');
    if (bannerText.length) {
      if (scrollPosition < 200) {
        let pc = 1-((scrollPosition/2)/100);
        let yPos = 100 - (pc * 100);
        bannerText.css({
          opacity: pc,
          transform: 'translateY(-'+yPos+'px)',
        });
      }
      else {
        bannerText.css({
          opacity: 0,
          transform: 'translateY(-100px)',
        });
      }
    }
  });

})(jQuery);
