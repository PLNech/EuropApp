#!/bin/sh
cd app && ionic build android --release && cd ..
# Uncomment to create a new keystore
#keytool -genkey -v -keystore release.keystore -alias PLNech -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release.keystore /Users/pln/Work/Perso/EuropApp/app/platforms/android/build/outputs/apk/android-release-unsigned.apk PLNech
rm -f EuropApp.apk.old; mv EuropApp.apk EurpApp.apk.old
zipalign -v 4 app/platforms/android/build/outputs/apk/android-release-unsigned.apk EuropApp.apk
