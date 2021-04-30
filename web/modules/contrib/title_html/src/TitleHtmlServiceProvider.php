<?php

namespace Drupal\title_html;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;

/**
 * Defines a service provider for the Title HTML module.
 */
class TitleHtmlServiceProvider extends ServiceProviderBase {

  /**
   * {@inheritdoc}
   */
  public function alter(ContainerBuilder $container) {
    $container->getDefinition('maintenance_mode_subscriber')
      ->setClass('Drupal\title_html\EventSubscriber\TitleHtmlMaintenanceModeSubscriber');
  }

}
