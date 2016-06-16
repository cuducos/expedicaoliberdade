echo '\n==> Switching to master branch'
git checkout master

echo '\n==> Cleaning system created files'
find . -iname '.DS_Store' -delete

echo '\n==> Cleaning _site/'
bundle exec jekyll clean

echo '\n==> Instaling gems'
bundle install

echo '\n==> Generating the site at _site/'
JEKYLL_ENV=production bundle exec jekyll build

echo '\n==> Optimizing images'
open -a /Applications/ImageOptim.app _site/images
