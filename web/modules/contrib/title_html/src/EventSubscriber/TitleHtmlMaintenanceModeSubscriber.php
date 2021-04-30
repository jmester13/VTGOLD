<?php

namespace Drupal\title_html\EventSubscriber;

use Drupal\Component\Render\FormattableMarkup;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Drupal\Core\EventSubscriber\MaintenanceModeSubscriber;

/**
 * Maintenance mode subscriber for controller requests.
 */
class TitleHtmlMaintenanceModeSubscriber extends MaintenanceModeSubscriber implements EventSubscriberInterface {

  /**
   * Gets the site maintenance message.
   *
   * @return \Drupal\Component\Render\MarkupInterface
   *   The formatted site maintenance message.
   */
  protected function getSiteMaintenanceMessage() {
    return new FormattableMarkup($this->config->get('system.maintenance')->get('message'), [
      '@site' => html_entity_decode($this->config->get('system.site')->get('name')),
    ]);
  }

}
