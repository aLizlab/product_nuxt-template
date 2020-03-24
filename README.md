# Nuxt Template

[![Actions Status](https://github.com/aLizlab/product_nuxt-template/workflows/PUSH_CI/badge.svg)](https://github.com/aLizlab/product_nuxt-template/actions)

> このリポジトリは、aLizの **Nuxt Template** です。


## Introduction

初心者から中級者の学習のためのNuxtのテンプレートです。
実務でも使用は可能ですが、必要に応じてα版パッケージを取り込んでいるため十分に動かないことがあります。

基本的な使い方としては、設定ファイルは操作せずに _app_ フォルダー内で開発をしていくことをお勧めします。
設定ファイルを操作するのは、上級者以上または勉強のためのみをお勧めします。

改善点や要望などは、ぜひ **Issue** を作ってください。
なるはやで対応します！

簡単に使えるパッケージ
- Nuxt
- Firebase
- Storybook
- Jest
- Dayjs
- Axios


## Commands

> 基本的なコマンドの一覧

``` bash
# Ready
## install dependencies
$ npm install


# Nuxt.js
## serve with hot reload at localhost:3000
$ npm run dev

## build for production and launch server
$ npm run build
$ npm run start

## generate static project
$ npm run generate


# lint
## check lint error
$ npm run lint

## fix lint error
$ npm run lint:fix


# storybook
## serve with hot reload at localhost:6006
$ npm run storybook

## generate static project
$ npm run build:storybook


# jest
## check file error
$ npm run test
```


## Firebase

> firebaseを使うためにやらないといけないこと

_.config/.env.dev_ と _.config/.env.pred_ にfirebaseの情報を入力してください。

_.config/.env.dev_ は開発環境用の環境変数を設定するファイルです。
`npm run dev` をした時は、自動的にこちらを使用します。

_.config/.env.pred_ は本番環境用の環境変数を設定するファイルです。
`npm run generate` をした時は、自動的にこちらを使用します。



## Members

> 関係者の紹介

**責任者**
- alizlab-nancy (_aLiz_)
