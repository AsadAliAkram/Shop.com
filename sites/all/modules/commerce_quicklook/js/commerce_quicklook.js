/**
 * @file
 * Defines functionality to handle Commerce QuickLook operations.
 */

(function ($) {
  'use strict';

  Drupal.quicklook = Drupal.quicklook || {};

  /**
   * Custom jQuery plug for Commerce QuickLook.
   *
   * @param {string} operation
   *   The operation to perform.
   * @param {Object} args
   *   Any arguments to pass with the operation.
   */
  $.fn.quickLook = function (operation, args) {
    // AJAX callback for opening the QuickLook view.
    // Arguments include the "form" variable, containing the HTML for the quick
    // look form.
    if (operation === 'popup') {
      $.magnificPopup.open({
        items: {
          // The extra <div> tag fixes a bug where the close button is lost when
          // the form's AJAX is invoked.
          src: '<div class="product-quick-view-popup"><div class="mfp-close"></div>' + args.form + '</div>'
        },
        type: 'inline',
        callbacks: {
          open: function () {
            // We have to attach the behaviors ourselves because the QuickLook
            // is not part of an AJAX-ified form.
            Drupal.attachBehaviors(this.content);
          }
        }
      });
    }

  };

})(jQuery);
