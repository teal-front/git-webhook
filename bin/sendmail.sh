#!/bin/bash

repo=$1
commitMsg=$2
db=/data/books/book.slite3

cd /data/$repo
developers=`sqlite3 $db "select content from repos where name=\"$repo\""`

payload=`git diff HEAD HEAD^`
echo $payload | mail -s `UAT: $commitMsg` $developers






