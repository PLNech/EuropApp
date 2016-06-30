#!/usr/bin/env ksh
# ============================================================================ #
# UPDATE VERSION                                                               #
# ============================================================================ #
# SUMMARY
# -------
# Updates the version number in the sources.
# ============================================================================ #

set -eo pipefail

SELF_ROOT=$(cd $(dirname "$0") && pwd)
SELF_NAME=$(basename "$0")

function call_sed
{
    PATTERN="$1"
    FILENAME="$2"

    # Mac needs a space between sed's inplace flag and extension
    if [ "$(uname)" == "Darwin" ]; then
        sed -E -i '' "$PATTERN" "$FILENAME"
    else
        sed -E -i "$PATTERN" "$FILENAME"
    fi
}

function usage
{
    echo "Usage: $SELF_NAME <version_no>"
}

FILE_PACKAGE="$SELF_ROOT/app/package.json"
FILE_CONFIG="$SELF_ROOT/app/config.xml"

if [ $# -ne 1 ]; then
    usage 1>&2
    exit -1
fi

VERSION_CODE=$1

echo "Updating version number to $VERSION_CODE..."
call_sed "s/(\"version\": )\".*\",/\1\"$VERSION_CODE\"/" $FILE_CONFIG
call_sed "s/(europapp\" version=)\"[0-9.]*\"/\1\"$VERSION_CODE\"/" $FILE_CONFIG
