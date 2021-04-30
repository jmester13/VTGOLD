<?php

namespace Drupal\title_html\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\Component\Plugin\PluginBase;
use Drupal\editor\Entity\Editor;
use Drupal\ckeditor\CKEditorPluginInterface;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\ckeditor\CKEditorPluginConfigurableInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Defines the "Do Nothing" plugin.
 *
 * @CKEditorPlugin(
 *   id = "title_html",
 *   label = @Translation("Title HTML")
 * )
 */
class TitleHTML extends PluginBase implements CKEditorPluginContextualInterface, CKEditorPluginConfigurableInterface {

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    $config = $this->getConfig($editor);
    return (bool) $config['title_html_enable'];
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return base_path() . drupal_get_path('module', 'title_html') . '/plugin/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    $config = [
      'title_html_enable' => FALSE,
      'disable_enter_key' => FALSE,
      'disable_shift_enter_key' => FALSE,
      'disable_elementspath' => FALSE,
      'autoGrow_minHeight' => '',
    ];
    $settings = $editor->getSettings();

    if (isset($settings['plugins']['title_html'])) {
      $config = $settings['plugins']['title_html'] + $config;

      $config['title_html_enable'] = (bool) $config['title_html_enable'];
      $config['disable_enter_key'] = (bool) $config['disable_enter_key'];
      $config['disable_shift_enter_key'] = (bool) $config['disable_shift_enter_key'];
      $config['disable_elementspath'] = (bool) $config['disable_elementspath'];

      if (empty($config['autoGrow_minHeight'])) {
        unset($config['autoGrow_minHeight']);
      }
    }

    return $config;
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state, Editor $editor) {
    // Defaults.
    $config = $this->getConfig($editor);

    $form['title_html_enable'] = [
      '#type' => 'checkbox',
      '#title' => t('Enable plugin'),
      '#description' => t('All settings below will work only if it is enabled. You may keep plugin disable if none feature listed below are needed.'),
      '#default_value' => $config['title_html_enable'],
    ];

    $form['disable_enter_key'] = [
      '#type' => 'checkbox',
      '#title' => t('Disable enter key'),
      '#description' => t('Prevents adding &lt;p&gt; tags.'),
      '#default_value' => $config['disable_enter_key'],
    ];

    $form['disable_shift_enter_key'] = [
      '#type' => 'checkbox',
      '#title' => t('Disable shift + enter key'),
      '#description' => t('Prevents adding &lt;br&gt; tags.'),
      '#default_value' => $config['disable_shift_enter_key'],
    ];
    
    $form['disable_elementspath'] = [
      '#type' => 'checkbox',
      '#title' => t('Disable elements path plugin'),
      '#description' => t('Hides element paths at bottom of editor.'),
      '#default_value' => $config['disable_elementspath'],
    ];
    $form['autoGrow_minHeight'] = [
      '#type' => 'textfield',
      '#title' => t('AutoGrow Minimum Height'),
      '#description' => t('Minimum Height for Automatic Editor Height'),
      '#default_value' => $config['autoGrow_minHeight'],
    ];

    return $form;
  }

}
