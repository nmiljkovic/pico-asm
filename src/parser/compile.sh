#!/usr/bin/env bash

VERSION="4.7.1"
FILENAME="antlr-$VERSION-complete.jar"

if [ ! -f "$FILENAME" ]; then
  curl "http://www.antlr.org/download/$FILENAME" --output "$FILENAME"
fi

java -jar "$FILENAME" -Dlanguage=JavaScript -visitor Pico.g4
