#!/bin/bash

# slite3 command
# create table REPOS (repo VARCHAR(500), developers VARCHAR(700));
# insert into REPOS values ("dsp-tc-pmp", "teal.yao allen.yao");
# update REPOS set developers="teal.yao" where repo="dsp-tc-pmp";
 
repo=$1
commitMsg=$2
db=/data/books/book.slite3

cd /data/$repo
developers=`sqlite3 $db "select content from repos where name=\"$repo\""`

payload=`git diff HEAD HEAD^`
echo $payload | mail -s `UAT: $commitMsg` $developers






