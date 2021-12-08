### [Design Samsung] 클론 코딩

- 클래스 네이밍은 BEM 방식을 따릅니다.

- breakpoints
  - pc - ~ 1280px
  - mo - 767px ~

- 작업 환경 설정
  
  ````bash
  $ npm install
  $ sass --watch scss:css
  ````
  
- IDE 설정
  
  ````json
  {
    "folders": [
      {
        "path": "D:\\git\\github\\HL0409.github.io\\samsung_design"
      }
    ],
    "settings": {
      "[scss]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "HookyQR.beautify"
      },
      "[html]": {
        // "editor.formatOnSave": true,
        "editor.defaultFormatter": "vscode.html-language-features",
      },
      "[javascript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "editor.tabSize": 4,
      "prettier.tabWidth": 4,
      "prettier.useEditorConfig": false,
      "prettier.singleQuote": true,
      "prettier.trailingComma": "none",
      "prettier.jsxSingleQuote": true,
      "prettier.arrowParens": "avoid",
      "prettier.bracketSpacing": true,
      "beautify.config": {
        "space_around_combinator": true,
        "indent_size": 4
      },
        "html.format.wrapLineLength": 0,
      "html.format.wrapAttributes": "auto"
      }
  }
  ````