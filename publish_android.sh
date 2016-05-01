#!/bin/sh

/cygdrive/c/Program\ Files/Java/jre1.8.0_73/bin/keytool.exe -genkey -v -keystore release.keystore -alias PLNech -keyalg RSA -keysize 2048 -validity 10000
/cygdrive/c/Program\ Files/Java/jdk1.8.0_05/bin/jarsigner.exe -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release.keystore C:/Users/PLN/Work/iGEM/EuropApp/app/platforms/android/build/outputs/apk/android-release-unsigned.apk PLNech
/cygdrive/c/Android\ SDK/sdk/build-tools/23.0.2/zipalign.exe -v 4 app/platforms/android/build/outputs/apk/android-release-unsigned.apk EuropApp.apk
