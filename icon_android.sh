#!/bin/sh
RES=hdpi; cp app/resources/icon/drawable-$RES/icon.png app/resources/android/icon/drawable-$RES-icon.png
RES=mdpi; cp app/resources/icon/drawable-$RES/icon.png app/resources/android/icon/drawable-$RES-icon.png
RES=xhdpi; cp app/resources/icon/drawable-$RES/icon.png app/resources/android/icon/drawable-$RES-icon.png
RES=xxhdpi; cp app/resources/icon/drawable-$RES/icon.png app/resources/android/icon/drawable-$RES-icon.png
RES=xxxhdpi; cp app/resources/icon/drawable-$RES/icon.png app/resources/android/icon/drawable-$RES-icon.png
