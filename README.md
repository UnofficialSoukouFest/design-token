# design-token

このプロジェクトで使用されるデザイントークンを管理するレポジトリです。

## Installation

パッケージをインストールするには、以下の手順に従ってください。
```shell
# For npm
npm install @latimeria/design-token --save
# For pnpm
pnpm add @latimeria/design-token
```

## Development

このレポジトリでは[`pnpm`](https://pnpm.io/)を使用しています。

```shell
pnpm install
# design tokenを変換する
pnpm run build
# Lintを実行する
pnpm run lint
```
### Publishするとき
publishする際は`vX.X.X`の形式でバージョンを指定してください。
```shell
git tag vX.X.X
```
そしてそのタグのついたcommitをpushしてください。