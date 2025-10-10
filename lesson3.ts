// ３５- watchモードで保存時に自動的にTSからJSにコンパイルする方法
// tsc lesson3.ts --watch または --w  で保存時にコンパイル可能

// ３６- tsconfig.jsonを作り、全ファイルを一括コンパイルする方法
// tsc --init で tsconfig.json を作成可能
// "sourceMap",
// "declaration",
// "declarationMap",
// がtrue設定になってると.map,  .d.mapファイルも生成される

// ３７- excludeとincludeとfilesを使ってコンパイルするファイルを選ぶ方法
// ■exclude => デフォルトではルートディレクトリにある指定tsファイルだけをコンパイルから除外可能
// **(アスタリスクは階層１つ分)/ファイル名 でも指定可能
// 上記指定をする際は "node_modules" を書く

// ■include => なんのファイルをコンパイルするかを指定、デフォルトでは全ファイルをコンパイル設定
// include後にexcludeを書くと＋－０になるためエラーになる

// ■files => *使用不可、フォルダ指定不可（ファイル単体は可能）

// ３８- targetを指定して、特定のバージョンのJavaScriptに変換する方法
// コンパイルするjsバージョンを指定 => デフォルトでは ES5 が設定

// ３９- tsconfig.jsonでlibを指定して、TypeScriptが用意している型の定義を追加する
// デフォルトでは lib がコメントアウトされてる => target で指定されてる分で自動設定される
