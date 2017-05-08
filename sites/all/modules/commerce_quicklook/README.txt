
CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Recommendations
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers
 * Credits


INTRODUCTION
------------

Commerce QuickLook adds a themable link to products that allows for a more
detailed display of the product when browsing. The preview display can be
customized in many ways, like adding a 'Add to Cart' form so customers can add
the product directly from the preview. These QuickLook links can be added to
any content type with the option for specific view modes.


REQUIREMENTS
------------

This module requires the following module:

  * Magnific Popup (https://www.drupal.org/project/magnific_popup)


RECOMMENDATIONS
-------------------

It is recommended you use the following for the best experience:

  * Commerce Kickstart (https://www.drupal.org/project/commerce_kickstart)


INSTALLATION
------------

1.  Install Magnific Popup by following all given instructions.

2.  Download/Install the QuickLook module and any other listed dependencies.

3.  The QuickLook configuration page can be found at
    admin/commerce/config/commerce_quicklook. This can be accessed through the
    module administration page.

4.  Select which content types the QuickLook link will display on. Optionally,
    you can also select which view modes it should display on.


CONFIGURATION
-------------

  * Customize QuickLook link

    - Finding the Administration Page

      The configuration page can be found at
      admin/commerce/config/commerce_quicklook (Can also be accessed through
      the module administration page).

    - Accessing the Administration Page

      Users in roles with the "administer site configuration" permission will
      be able to access this page.

    - Overriding the link template

      To override the QuickLook link template, create a new template file in
      your themes templates folder called commerce-quicklook-links.tpl.php.
      Content type specific templates can be created by using the name
      commerce-quicklook-links--[content type].tpl.php.

  * Customize QuickLook's preview display

    - Finding the customization page

      The preview display can be edited through the standard 'Manage display'
      page located at
      admin/structure/types/manage/[content-type]/display/commerce_quicklook.
      This page can be found by going to the 'Content Types' page, selecting a
      content type, selecting the 'Manage display' tab, and selecting the
      'QuickLook' view mode.


TROUBLESHOOTING
--------------

  * If the QuickLook link does not work when clicked on, check the following:

    - Inspect the page, if there is a "Cannot read property 'open' of
      undefined" error Magnific Popup's library was probably not installed
      correctly. Go back and reinstall Magnific Popup following all
      instructions on its module page.


FAQ
---

  Q:  My QuickLook's product preview is not showing any 'Add to cart' form.
      How do I fix this?

  A:  Under the 'QuickLook' view mode for your content type (see CONFIGURATION
      - Finding the customization page), make sure you have the Product
      Variation's Format field set to 'Add to Cart form'.

  Q:  I don't like the position or look of the QuickLook link. How do I change
      it?

  A:  To change the position of the link, you can either change the weight of
      the links in the administration page or edit the product display's
      template to display the link in another location (Like in the product's
      image). To change its look, use CSS or override the link's template file
      (See CONFIGURATION - Overriding the link template).


MAINTAINERS
-----------

* Tim Rutherford (TimRutherford) - https://www.drupal.org/u/timrutherford


CREDITS
-------

* Scott Robertson (Scott Robertson) - https://www.drupal.org/u/scott-robertson
* Shawn McCabe (smccabe) - https://www.drupal.org/u/smccabe

This project is sponsored by:
* Acro Media Inc
  Drupal solutions for limitless ecommerce & unrestricted development.
  Visit https://www.acromediainc.com/ for more information.
