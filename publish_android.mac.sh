#!/bin/sh

keytool -genkey -v -keystore release.keystore -alias PLNech -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release.keystore /Users/pln/Work/Perso/EuropApp/app/platforms/android/build/outputs/apk/android-release-unsigned.apk PLNech
zipalign -v 4 app/platforms/android/build/outputs/apk/android-release-unsigned.apk EuropApp.apk
