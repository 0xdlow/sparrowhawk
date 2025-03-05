module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/strongly-recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 不加分号
    "semi": [0],
    // 不能有未定义的变量
    "no-undef": 1,
    // 不能有声明后未被使用的变量或参数
    "no-unused-vars":[2, {
      "vars": "local",
      "args": "none"
    }],
    // 禁止修改const声明的变量
    "no-const-assign": 2,
    // 函数参数不能重复
    "no-dupe-args": 2,
    // 如果if语句里面有return,后面不能跟else语句
    "no-else-return": 2,
    // 块语句中的内容不能为空
    "no-empty": 2,
    // 禁止对null使用==或!=运算符
    "no-eq-null": 2,
    // 禁止扩展native对象
    "no-extend-native": 2,
    // 禁止不必要的函数绑定
    "no-extra-bind": 2,
    // 禁止非必要的括号
    "no-extra-parens": 2,
    // 禁止多余的冒号
    "no-extra-semi":2,
    // 禁止省略浮点数中的0 .5 3.
    "no-floating-decimal": 2,
    // 禁止行内备注
    "no-inline-comments": 0,
    // 不能有不规则的空格
    "no-irregular-whitespace": 2,
    // 不能用多余的空格
    "no-multi-spaces": 1,
    // 禁止重复声明变量
    "no-redeclare": 2,
    // 禁止使用javascript:void(0)
    "no-script-url": 0,
    // 禁止稀疏数组， [0,,2]
    "no-sparse-arrays": 2,
    // 禁止使用三目运算符
    "no-ternary": 0,
    // 一行结束后面不要有空格
    "no-trailing-spaces": 1,
    // 标识符不能以_开头或结尾
    "no-underscore-dangle": 1,
    // 是否允许非空数组里面有多余的空格
    "array-bracket-spacing": [2, "never"],
    // 箭头函数用小括号括起来
    "arrow-parens": 0,
    // =>的前/后括号
    "arrow-spacing": 0,
    // 块语句中使用var
    "block-scoped-var": 0,
    // 逗号风格，换行时在行首还是行尾
    "comma-style": [2, "last"],
    // 避免不必要的方括号
    "dot-notation": [0, { "allowKeywords": true }],
    // 必须使用全等
    "eqeqeq": 2,
    // 对象字面量中冒号的前后空格
    "key-spacing": [0, {
      "beforeColon": false,
      "afterColon": true
    }],
    // 变量声明后是否需要空一行
    "newline-after-var": 0,
    // 引号类型 `` "" ''
    "quotes": [1, "single"],
    // 变量声明时排序
    "sort-vars": 0,
    // 禁止比较时使用NaN，只能用isNaN()
    "use-isnan": 2,
    //jsx中使用单引号
    "jsx-quotes": ["error", "prefer-single"],
    // 单个组件无内容自结尾
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    // 设置html缩进
    "vue/html-indent": ["error", 2, {
      "attribute": 2,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": false,
      "ignores": []
    }],
    // 属性顺序
    "vue/attributes-order": 1,
    // 注释前面需要添加空格
    "spaced-comment": ["error", "always", { "exceptions": ["-", "+"] }],
    // html属性赋值等号左右不能有空格
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    // 强制prop以驼峰命名
    "vue/prop-name-casing": ["error", "camelCase"],
    // 移除多余不使用的空格
    "vue/no-multi-spaces": ["error", {
      "ignoreProperties": false
    }],
    // html结尾 >
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    // 属性每行数量
    "vue/max-attributes-per-line": ["error", {
      // 一行最多3个属性
     "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    // 单行html元素内容是否换行
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": [
        "pre",
        "textarea",
        "span",
        "i",
        "label",
        "el-button",
        "el-radio",
        "el-checkbox",
        "el-link",
        "el-tab-pane",
        "el-dropdown-item",
        "el-step",
        "el-table-column",
        "el-option"
      ]
    }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}; 