<?php

/**
 * @file
 * Defines all page callbacks for Commerce QuickLook.
 */

/**
 * AJAX callback for the QuickLook view.
 *
 * This can't directly be a form callback because we have to return the output
 * as an AJAX commands array.
 *
 * @param object $node
 *   The current node object to display.
 */
function commerce_quicklook_js($node) {
  $view = node_view($node, 'commerce_quicklook');

  $commands = array();
  $commands[] = ajax_command_invoke(NULL, 'quickLook', array(
    'popup',
    array(
      'form' => render($view),
    ),
  ));

  ajax_deliver(array('#type' => 'ajax', '#commands' => $commands));
}
