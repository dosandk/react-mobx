var INDENT = 2;

module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        '@eleks/eleks',
        'plugin:react/recommended'
    ],

    env: {
        browser: true,
        es6: true
    },

    globals: {
        ENV: false,
        BUILD_INFO : false
    },

    plugins: [
        'react'
    ],

    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },

    rules: {
        'indent': [2, INDENT, {'SwitchCase': 1}],
        'newline-after-var': 0,
        'one-var': 0,
        'curly': [2, 'multi-line', 'consistent'],
        'no-magic-numbers': [1, {'ignore': [0, 1, 100]}],
        // 'linebreak-style': [2, 'unix'],
        'quotes': [1, 'single'],
        'semi': [2, 'always'],
        'object-curly-spacing': [2, 'never'],
        'no-extra-parens': [1, 'all', {ignoreJSX: 'all'}],
        'no-shadow': 0,

        // React Specifics
        'react/display-name': 0,
        'react/no-array-index-key': 1,
        // 'react/no-children-prop:': 2, // temporary disable, eslint can't find definition
        'react/no-danger': 1,
        'react/no-deprecated': 1,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-find-dom-node': 1,
        'react/no-is-mounted': 1,
        'react/no-multi-comp': [1, {'ignoreStateless': true}],
        'react/no-render-return-value': 1,
        'react/no-string-refs': 2,

        'react/no-unescaped-entities': 1,
        'react/no-unknown-property': 1,
        'react/no-unused-prop-types': 1,
        'react/no-will-update-set-state': 1,
        'react/prefer-es6-class': [2, 'always'],
        'react/prefer-stateless-function': [1, {'ignorePureComponents': true}],
        'react/prop-types': [1, {ignore: ['children']}],
        'react/react-in-jsx-scope': 2,
        'react/require-default-props': 1,
        'react/require-optimization': 0,
        'react/require-render-return': 2,
        'react/self-closing-comp': [2, {'component': true, 'html': true}],
        'react/sort-comp': [1, {
            order: [
                'static-methods',
                'lifecycle',
                '/^on.+$/',
                'everything-else',
                'render'
            ]
        }],
        'react/sort-prop-types': 0,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 1,

        // JSX
        'react/jsx-boolean-value': 1,
        'react/jsx-closing-bracket-location': [1, {
            selfClosing: 'after-props',
            nonEmpty: 'after-props'
        }],
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx']}],
        'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
        'react/jsx-handler-names': [1, {
            'eventHandlerPrefix': 'on',
            'eventHandlerPropPrefix': 'on'
        }],
        'react/jsx-indent': [2, INDENT],
        'react/jsx-indent-props': [2, INDENT],
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': [1, {when: 'multiline'}],
        'react/jsx-no-bind': 1,
        'react/jsx-no-comment-textnodes': 1,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0,
        'react/jsx-no-target-blank': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-sort-props': 0,
        'react/jsx-tag-spacing': [2, {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never'
        }],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2
    }
};
