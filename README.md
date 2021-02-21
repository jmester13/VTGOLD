# Starter Drops 8

This repository is a start state for a Composer-based Drupal workflow with Pantheon. Based on Pantheon's [example-drops-8-composer](https://github.com/pantheon-systems/example-drops-8-composer) repository.


## Installation

### Prerequisites

* [A Pantheon account](https://dashboard.pantheon.io/register)
* [Terminus, the Pantheon command line tool](https://pantheon.io/docs/terminus/install/)
* An account with [Bitbucket]('https://bitbucket.org') and an authentication token capable of creating new repos.

### Creating the Panteon Site

This information can be referenced on [Pantheon](https://pantheon.io/docs/guides/drupal-8-composer-no-ci/).

To begin, we will want to start a brand new Drupal 8 site on Pantheon from our empty upstream. This upstream is different from the Drupal 8 upstream in that it does not come with any Drupal files. As such, you must use Composer to download Drupal.

Before we begin choose a machine-friendly site name. It should be all lower case with dashes instead of spaces. I'll use `d8-composer-no-ci` but choose your own. Once you have a site name export it to a variable for re-use.

`export PANTHEON_SITE_NAME="d8-composer-no-ci"`

You should also be authenticated with Terminus. See the [Authenticate into Terminus](https://pantheon.io/docs/machine-tokens/#authenticate-into-terminus) section of the [machine tokens documentation](https://pantheon.io/docs/machine-tokens) for details.

Create a new Pantheon site with an empty upstream.

`terminus site:create $PANTHEON_SITE_NAME 'My D8 Composer Site' empty --org hark`

Note you can also add the `--org` argument to `terminus site:create` if you would like the site to be part of an organization. See `terminus site:create -h` for details and help.

### Cloning starter-drops-8 locally

Instead of setting up `composer.json` manually it is easier to start with the starter-drops-8 repository.

First, clone the starter-drops-8 repository locally.

`git clone git@bitbucket.org:nick_christensen/starter-drops-8.git $PANTHEON_SITE_NAME`

Change into the cloned directory.

`cd $PANTHEON_SITE_NAME`

### Updating the git remote URL

Store the git URL for the Pantheon site created earlier in a variable.

`export PANTHEON_SITE_GIT_URL="$(terminus connection:info $PANTHEON_SITE_NAME.dev --field=git_url)"`

Update the git remote to use the Pantheon site git URL returned rather than the `starter-drops-8` GitHub URL.

`git remote set-url origin $PANTHEON_SITE_GIT_URL`

### Managing Drupal with Composer

Normally the next step would be going through the standard Drupal installation. But since we are using Composer, none of the core files exist yet. Let us use Composer to download Drupal core.

Since we modified `composer.json` we will need to update Composer. This will also download the defined dependencies.

`composer update`

This may take a while as all of Drupal core and its dependencies will be downloaded. Subsequent updates should take less time.

Let's take a look at the changes.

`git status`

Set the site to git mode.

`terminus connection:set $PANTHEON_SITE_NAME.dev git`

Add and commit the code files. A git force push is necessary because we are writing over the empty repository on Pantheon with our new history that was started on the local machine. Subsequent pushes after this initial one should not use `--force`.

`git add .`

`git commit -m 'Drupal 8 and dependencies'`

`git push --force`

### Installing Drupal

Now that the code for Drupal core exists on our Pantheon site, we need to actually install Drupal. This can be done one of two ways:

* in the command line using terminus commands
* opening up the site in browser and running through the installation process

## Important files and directories

### `/web`

Pantheon will serve the site from the `/web` subdirectory due to the configuration in `pantheon.yml`, facilitating a Composer based workflow. Having your website in this subdirectory also allows for tests, scripts, and other files related to your project to be stored in your repo without polluting your web document root.

### `/config`

One of the directories moved to the git root is `/config`. This directory holds Drupal's `.yml` configuration files. In more traditional repo structure these files would live at `/sites/default/config/`. Thanks to [this line in `settings.php`](https://github.com/pantheon-systems/example-drops-8-composer/blob/54c84275cafa66c86992e5232b5e1019954e98f3/web/sites/default/settings.php#L19), the config is moved entirely outside of the web root.

### `composer.json`

If you are just browsing this repository on GitHub, you may notice that the files of Drupal core itself are not included in this repo.  That is because Drupal core and contrib modules are installed via Composer and ignored in the `.gitignore` file. Specific contrib modules are added to the project via `composer.json` and `composer.lock` keeps track of the exact version of each modules (or other dependency). Modules, and themes are placed in the correct directories thanks to the `"installer-paths"` section of `composer.json`. `composer.json` also includes instructions for `drupal-scaffold` which takes care of placing some individual files in the correct places like `settings.pantheon.php`.


## Updating your site

When using this repository to manage your Drupal site, you will no longer use the Pantheon dashboard to update your Drupal version. Instead, you will manage your updates using Composer. Ensure your site is in Git mode, clone it locally, and then run composer commands from there.  Commit and push your files back up to Pantheon as usual.

Update all site code:

`composer update`

Update only Drupal core:

`composer update drupal/core --with-dependencies`