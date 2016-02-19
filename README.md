# Expedição Liberdade

[Jekyll](http://jekyllrb.com) source files for [expedicaoliberdade.com.br](http://expedicaoliberdade.com.br).

## Installation

First install the required [Ruby](http://ruby-lang.org) gems:

```console
$ gem install bundler
$ bundle install
```

Then move [Bourbon](http://bourbon.io), [Neat](http://neat.bourbon.io) & [Bitter](http://bitters.bourbon.io/) to the `css` folder:

```console
$ bourbon install && mv bourbon/ css/bourbon/
$ neat install && mv neat/ css/neat/
$ bitters install && mv base/ css/base/
```

Change the site URL at `_config.yml` if needed.

And finally build the site:

```console
$ jekyll b
```

Optionally use set `ENV` variable to build the site with the production server settings:

```console
$ JEKYLL_ENV=production jekyll b
```

To view the site after building it just open `_site/index.html` with your favorite browser.

```console
$ open _site/index.html
```

## License

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).