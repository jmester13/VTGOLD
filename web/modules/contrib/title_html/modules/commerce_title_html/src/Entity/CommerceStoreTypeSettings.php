<?php

namespace Drupal\commerce_title_html\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Content Type settings entity.
 *
 * @ConfigEntityType(
 *   id = "store_type_settings",
 *   label = @Translation("Commerce Store Type Settings"),
 *   handlers = {},
 *   config_prefix = "store_type_settings",
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
class CommerceStoreTypeSettings extends ConfigEntityBase {

  /**
   * Product Type settings id. It will be product type bundle name.
   *
   * @var string
   */
  public $id;

  /**
   * Field storing HTML title for the product.
   */
  public $html_title_field;

  public static function load($id) {
    $entity =  \Drupal::entityTypeManager()
      ->getStorage('store_type_settings')
      ->load($id);
    if (!$entity) {
      $entity = \Drupal::entityTypeManager()->getStorage('store_type_settings')
       ->create(['id' => $id, 'html_title_field' => NULL]);
    }
    return $entity;
  }

}
