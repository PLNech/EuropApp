#!/bin/sh
function sign() {
if [ ! -z "$KEYSTORE_PASS" ]; then
    echo "Running $JARSIGNER with password $KEYSTORE_PASS."
    $JARSIGNER -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release.keystore -storepass "$KEYSTORE_PASS" $UNSIGNED_APK PLNech
else
    echo "No pass: $KEYSTORE_PASS..."
    $JARSIGNER -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release.keystore $UNSIGNED_APK PLNech
fi

}

if [ "$(uname)" == "Darwin" ]; then
    KEYTOOL=keytool
    JARSIGNER=jarsigner
    ZIPALIGN=zipalign
    UNSIGNED_APK="`pwd`/app/platforms/android/build/outputs/apk/android-release-unsigned.apk"
else
    KEYTOOL=/cygdrive/c/Program\ Files/Java/jre1.8.0_73/bin/keytool.exe
    JARSIGNER=/cygdrive/c/Program\ Files/Java/jdk1.8.0_05/bin/jarsigner.exe
    ZIPALIGN=/cygdrive/c/Android\ SDK/sdk/build-tools/23.0.2/zipalign.exe
    UNSIGNED_APK="C:/Users/PLN/Work/iGEM/EuropApp/app/platforms/android/build/outputs/apk/android-release-unsigned.apk"
fi

# Uncomment to create a new keystore
#$KEYTOOL -genkey -v -keystore release.keystore -alias PLNech -keyalg RSA -keysize 2048 -validity 10000

rm -f EuropApp.apk.old; mv EuropApp.apk EuropApp.old.apk

cd app && ionic build android --release && cd .. && \
    sign && \
    $ZIPALIGN -v 4 app/platforms/android/build/outputs/apk/android-release-unsigned.apk EuropApp.apk
