#a)
awk -F, 'NR > 1 { system("redis-cli GEOADD bataxi " $6 " " $7 " " $1) }' bataxi.csv