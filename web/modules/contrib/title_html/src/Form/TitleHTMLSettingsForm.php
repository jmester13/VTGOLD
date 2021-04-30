<?php

namespace Drupal\title_html\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class TitleHTMLSettingsForm.
 *
 * @package Drupal\title_html\Form
 *
 * @ingroup title_html
 */
class TitleHTMLSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['title_html.settings'];
  }

  /**
   * Returns a unique string identifying the form.
   *
   * @return string
   *   The unique string identifying the form.
   */
  public function getFormId() {
    return 'title_html_settings';
  }

  /**
   * Defines the settings form for Font entities.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return array
   *   Form definition array.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $filter_formats = filter_formats();
    $text_format_options = [];
    foreach ($filter_formats as $format_id => $filter_format) {
      $text_format_options[$format_id] = $filter_format->label();
    }
    $config = $this->config('title_html.settings');
    $form['title_text_format'] = [
      '#type' => 'select',
      '#title' => $this->t('Text format'),
      '#default_value' => $config->get('title_text_format'),
      '#options' => $text_format_options,
      '#description' => $this->t('Text format to be used for node titles.'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * Form submission handler.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('title_html.settings');
    $config->set('title_text_format', $form_state->getValue('title_text_format'));
    $config->save();

    parent::submitForm($form, $form_state);
  }
}
