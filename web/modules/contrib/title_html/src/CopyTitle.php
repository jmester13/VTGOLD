<?php

namespace Drupal\title_html;

// use Drupal\node\Entity\Node;
use Drupal\field\Entity\FieldStorageConfig;
use Drupal\field\Entity\FieldConfig;

/**
 * Class having static funtions to use in batch process to copy title values to "Title - HTML" field when enabled.
 */
class CopyTitle {

  /**
   * @param $number
   *  Number of times to execute.
   * @param $context
   *  An array of contextual key/value information for rebuild batch process.
   */
  public static function copyTitles($entity_type, $type, $format, &$context) {
    if ($type) {
      if (empty($context['sandbox'])) {
        $context['sandbox']['progress'] = 0;
        $context['sandbox']['max'] = \Drupal::entityQuery($entity_type)->condition('type', $type)->count()->execute();
        // $context['sandbox']['max'] = 1;
      }
      $batch_size = 10;
      $nids = \Drupal::entityQuery($entity_type)
        ->condition('type', $type)
        ->range($context['sandbox']['progress'] , $batch_size)
        ->execute();

      foreach ($nids as $nid) {
        // $entity = Node::load($nid);
        $entity = \Drupal::entityTypeManager()->getStorage($entity_type)->load($nid);
        $title = $entity->label();
        $entity->title_html->value = $title;
        $entity->title_html->format = 'title';
        $entity->save();
        $context['sandbox']['progress']++;
      }
      $context['results']['completed'] = $context['sandbox']['progress'];

      if ($context['sandbox']['progress'] != $context['sandbox']['max']) {
        $context['finished'] = $context['sandbox']['progress'] / $context['sandbox']['max'];
      }
    }
  }

  public static function finishedCopying($success, $results, $operations) {
    $message = \Drupal::translation()
        ->formatPlural($results['completed'] , 'Copied title for one entity', 'Copied titles for @count entities.');
    drupal_set_message($message);
  }

  public static function createTitleHtmlField($entity_type_id, $bundle, &$field) {
    $field_storage = FieldStorageConfig::loadByName($entity_type_id, 'title_html');
    $field = FieldConfig::loadByName($entity_type_id, $bundle, 'title_html');
    if (empty($field)) {
      $field = FieldConfig::create([
        'field_storage' => $field_storage,
        'bundle' => $bundle,
        'label' => 'Title - HTML',
        'settings' => [],
        'required' => TRUE,
        'third_party_settings' => [
          'allowed_formats' => [
            'title' => 'title'
          ],
        ],
      ]);
      $field->save();

      // Created the field, thus return TRUE
      return TRUE;
    }
    // Field alredy existing, thus return FALSE
    return FALSE;
  }

  public static function deleteTitleHtmlField($entity_type_id, $bundle) {
    if ($field_config = \Drupal\field\Entity\FieldConfig::loadByName($entity_type_id, $bundle, 'title_html')) {
      $field_config->delete();
    }
  }
  
}