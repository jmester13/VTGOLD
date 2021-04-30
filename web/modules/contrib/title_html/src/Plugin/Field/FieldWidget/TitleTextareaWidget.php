<?php

namespace Drupal\title_html\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldWidget\StringTextareaWidget;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\Validator\ConstraintViolationInterface;
use Drupal\text\Plugin\Field\FieldWidget\TextareaWidget;

/**
 * Plugin implementation of the 'title_text_textarea' widget.
 *
 * @FieldWidget(
 *   id = "title_text_textarea",
 *   label = @Translation("Text area for node titles"),
 *   field_types = {
 *     "string"
 *   }
 * )
 */
class TitleTextareaWidget extends TextareaWidget {


  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element = parent::formElement($items, $delta, $element, $form, $form_state);

    $text_format_id = \Drupal::config('title_html.settings')
      ->get('title_text_format');
    // $element = $main_widget['value'];
    // $element['#type'] = 'text_format';
    // $element['#format'] = $items[$delta]->format;
    // $element['#base_type'] = $main_widget['value']['#type'];
    $element['#format'] = $text_format_id;
    $element['#allowed_formats'] = [$text_format_id];
    return $element;
  }

}
