#!/usr/bin/env bash
# Copied from https://stackoverflow.com/a/8880633 except the nicks

## declare an array variable
declare -a arr=("janneone" "mbrsk" "mielipuoli" "nyos" "usvi" "vhautaka" "yaamboo" "lash-" "d200b" "talikka" "arimartti" "scoffa")

## now loop through the above array
for i in "${arr[@]}"; do
  echo "/msg GroupServ invite !ppfi-aktiivit $i"
  # or do whatever with individual element of the array
done

# You can access them using echo "${arr[0]}", "${arr[1]}" also
