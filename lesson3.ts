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

// ４０- allowJs、checkJs、jsx、declaration、declarationMapの設定
// declaration、declarationMapはtsファイルを共有する際にtrue化

// ４１- SourceMapを使用して、ブラウザでTypeScriptを操作する方法
// ブラウザ内デベロッパーツール等でtsファイルを操作する際に、ソースマップを使用してtsファイルを操作する
// 要はjs => ts へ逆算可能になる

// ４２-outDirとrootDir、removeComments、noEmit、downlevelIteration設定方法
// "outDir": "./dist" と書けば tsc 実行で ./dist フォルダと一緒にjsファイルが作成される
// ※無駄フォルダができないように作成される

// "rootDir": "./src" と書けば 厳密に./src フォルダと一緒にtsファイルが作成される
// ※ただし全ファイルを srcフォルダに格納する必要がある、しないとエラーになる

// "removeComments": true と書けば コンパイル後jsファイル内にコメントを残さない

// "noEmit": true と書けば コンパイル後jsファイルを作成しない、型チェックだけする

// "downlevelIteration": true と書けば ES3,ES5限定で for of（繰り返し処理） を使用できる
