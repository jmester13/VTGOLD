<?php

/**
 * @file
 * The PHP page that serves all page requests on a Drupal installation.
 *
 * All Drupal code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt files in the "core" directory.
 */

use Drupal\Core\DrupalKernel;
use Symfony\Component\HttpFoundation\Request;

$autoloader = require_once 'autoload.php';

$kernel = new DrupalKernel('prod', $autoloader);

$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();

$kernel->terminate($request, $response);

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    $response = new Response(200);
    $response->headers->set('Access-Control-Allow-Origin', '*');
    $response->headers->set('Access-Control-Allow-Methods',
   'POST, GET, OPTIONS, PATCH, DELETE');
    $response->headers->set('Access-Control-Allow-Headers',
   'Authorization');
    $response->send();
    exit;
  }
  $response = $kernel
      ->handle($request)
      // Handle the response object.
      ->prepare($request);

  // Enable CORS requests, Change '*' for any specific domain or ip address
  $response->headers->set('Access-Control-Allow-Origin', '*');
  $response->headers->set('Access-Control-Allow-Methods', 
  'POST, GET, OPTIONS, PATCH, DELETE');
  $response->headers->set('Access-Control-Allow-Headers', 
  'Authorization');