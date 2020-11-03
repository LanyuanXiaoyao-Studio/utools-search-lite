#!/bin/bash

mkdir -p ./build
rm -rf ./build/*

file_name_list=(
  utils
  css.js
  logo.png
  preload.js
  README.md
  settings.js
  sites.js
)
for name in "${file_name_list[@]}" ; do
  cp -r "${name}" ./build
done

cp -r node_modules_build ./build/node_modules

# 复杂操作交给 js 脚本
node ./build.js

file_name_list=(
  icon
  plugin.json
)
for name in "${file_name_list[@]}" ; do
  cp -r "${name}" ./build
done
