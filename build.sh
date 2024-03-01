echo "BUILD STARTED FROM SHELL SCRIPT"

# clear old build folder
rm -rf ./docs

# thanks git bash...
# https://stackoverflow.com/questions/59341718/not-allowed-to-load-local-resource-error-on-chrome-angular-app-is-not-running
# https://stackoverflow.com/questions/42292761/angular-cli-build-with-base-href-also-return-programs-folder-when-using-git-bash
ng build --output-path docs --base-href '//OMS-CS6750\'

# rearrange the build files.....
mv ./docs/browser/* ./docs
rm -rf ./docs/browser
cp ./docs/index.html ./docs/404.html
