# locales.lst [![Build Status](https://travis-ci.org/pqx/locales.lst.svg)](https://travis-ci.org/pqx/locales.lst)
Generate locale json files from a single list file
### Installation
``` sh
npm install locales.lst
```
### Usage
#### A sample input list file (sample.lst)
```
# this is comment

en zh

hello
- Hello
- 你好

world
- World
- 世界
```
#### Run locales.lst
``` sh
./node_modules/locales.lst/cli.js sample.lst locales # local installation
locales.lst sample.lst locales # npm install locales.lst -g
```
#### Output json files
locales/en.json
``` json
{"hello":"Hello","world":"World"}
```
locales/zh.json
``` json
{"hello":"你好","world":"世界"}
```
### License
ISC
