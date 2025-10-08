// ３５-watchモードで保存時に自動的にTSからJSにコンパイルする方法
// tsc lesson3.ts --watch または --w  で保存時にコンパイル可能

// ３６-tsconfig.jsonを作り、全ファイルを一括コンパイルする方法
// tsc --init で tsconfig.json を作成可能
// "sourceMap",
// "declaration",
// "declarationMap",
// がtrue設定になってると.map,  .d.mapファイルも生成される
