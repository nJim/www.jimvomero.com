(function ($, Drupal) {

  /**
   * Animate the headline and svg graphic in each headline-band.
   * @type {{attach: Drupal.behaviors.headlineBandBehaviors.attach}}
   */
  Drupal.behaviors.headlineBandBehaviors = {
    attach: function (context, settings) {

      $('.headline-band', context).once('headlineBandBehaviors').each(function () {

        let bandText = $('.headline-band-text', this);
        let bandIcon = $('.headline-band-icon', this);
        let bandIconPosition = bandIcon.offset();

        // Start animation once the user scrolls to the start of the band.
        // Trigger a click event to initiate the animation.
        $(document).scroll(function(){
          let visiblePosition = $(document).scrollTop() + $(window).height();
          if (visiblePosition > bandIconPosition.top) {
            bandIcon.click();
          }
        });

        // Fire the animations only once on click.
        // Use the third-party lazylinepainer javascript to draw the SVGs.
        // Add css classes to the text to start the animate.css events.
        bandIcon.one('click', function() {
          $('.svg-wrapper', this).lazylinepainter({
            "svgData": window.svgPaths,
            "strokeWidth": 8,
            "strokeColor": "#064771"
          }).lazylinepainter('paint');
          setTimeout(function () {
              bandText.addClass('animated flipInX show');
            }, 600
          );
        });

      });
    }
  };

})(jQuery, Drupal);
