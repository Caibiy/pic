#!/bin/bash
piclist=`ls ~/camera/`
pic_list=""
for pic in $piclist
do
	pic_list="$pic,$pic_list"
done

pic_list=`echo $pic_list | sed 's/\(.*\),/\1/'`

echo "{\"piclists\":\"$pic_list\"}"
