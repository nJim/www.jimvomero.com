<?php

namespace Drupal\custom_homepage\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class HomepageController.
 *
 * Returns the contents of a custom homepage. The page is rendered using the
 * 'custom_homepage' template in the site's theme. Since this is a simple site,
 * all of the features of this template are simply hardcoded.
 */
class HomepageController extends ControllerBase {

  /**
   * Homepage content.
   *
   * @return array
   *   Return the rendered homepage content.
   */
  public function content() {
    return [
      '#theme' => 'custom_homepage',
    ];
  }

}
