# ChatHPC's Main Website

This repository contains the source for a Jekyll powered website for ChatHPC hosted at <https://ornl.github.io/ChatHPC/>. If you have any questions about the source please contact Aaron Young at [youngar@ornl.gov](mailto:youngar@ornl.gov).

## Quick start with dev container.

1. Open in VSCode, `Dev Containers: Reopen in Container`.
2. Run `./0_bundle_install.sh` install the gem dependencies in the lockfile.
3. Run `./1_serve.sh` to build and serve the website for local testing.
4. Run `./2_deploy.sh` to deploy the website to github. (Make sure your changes are commited to git before running.)

## Prerequisites

[Jekyll](https://jekyllrb.com/docs/installation/) must be install first before building the website.

Here are the steps for Ubuntu from the above link:

### Jekyll on Ubuntu

#### Install dependencies

Install Ruby and other prerequisites:

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

Avoid installing RubyGems packages (called gems) as the root user.
Instead, set up a gem installation directory for your user account. The following commands will add environment variables to your ~/.bashrc file to configure the gem installation path:

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Finally, install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

That’s it! You’re ready to start using Jekyll.

### Install Prerequisites for project.

Next the gems used by the site must be installed with

    bundle install

## Serving the website locally for testing

In order to serve the website locally on a test server, with draft posts
included, and with live reloading, use the command:

    bundle exec jekyll serve --drafts --livereload

    or

    ./1_serve.sh

## Deploying the website

In order to deploy the website, use the helper script `2_deploy.sh`.

## Updating Jekyll

In order to update Jekyll use `bundle update`

## Tools

- A create-thumbnails script is found in tools/create-thumbnails. It
  can be used to create lower resolution thumbnails for use in a Jekyll
  gallery.
