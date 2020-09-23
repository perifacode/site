source "https://rubygems.org"

gem "jekyll", "~> 3.8.5"

group :jekyll_plugins do
  gem 'jemoji'
  gem 'jekyll-paginate'
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
  gem 'jekyll-feed'
  gem 'jekyll-gist'
  gem 'jekyll-redirect-from'
  gem 'jekyll-compose', group: [:jekyll_plugins]
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

group :build do
    gem 'rake'
end

group :styles do
    gem 'rouge'
end