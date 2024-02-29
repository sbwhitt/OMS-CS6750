echo "BUILD STARTED FROM SHELL SCRIPT"

rm -rf ./docs

ng build --output-path docs --base-href '//OMS-CS6750\'

mv ./docs/browser/* ./docs
rm -rf ./docs/browser
cp ./docs/index.html ./docs/404.html
