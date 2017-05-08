<?php

/**
 * @file
 * Default theme implementation to present the QuickLook link for a product.
 *
 * Available variables:
 * - $link_attributes: All attributes the link should render with.
 * - $link_title: The title/label for the QuickLook link.
 * - $link_url: The url for the QuickLook link.
 *
 * Helper variables:
 * - $link: An array that contains all information on the link.
 */
?>
<div<?php print $attributes; ?>>
  <a href="<?php print $link_url; ?>" <?php print $link_attributes; ?>><?php print $link_title; ?></a>
</div>
