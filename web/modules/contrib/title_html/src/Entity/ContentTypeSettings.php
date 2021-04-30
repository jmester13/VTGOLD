<?php

namespace Drupal\title_html\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Content Type settings entity.
 *
 * @ConfigEntityType(
 *   id = "content_type_settings",
 *   label = @Translation("Content Type Settings"),
 *   handlers = {},
 *   config_prefix = "content_type_settings",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *   },
 *   config_export = {
 *     "id",
 *     "html_title_field"
 *   },
 *   links = {}
 * )
 */
class ContentTypeSettings extends ConfigEntityBase {

  /**
   * Content Type settings id. It will be content type bundle name.
   *
   * @var string
   */
  public $id;

  /**
   * Field storing HTML title for the node.
   */
  public $html_title_field;

  public static function load($id) {
    $entity =  \Drupal::entityTypeManager()
      ->getStorage('content_type_settings')
      ->load($id);
    if (!$entity) {
      $entity = \Drupal::entityTypeManager()->getStorage('content_type_settings')
       ->create(['id' => $id, 'html_title_field' => NULL]);
    }
    return $entity;
  }

}
