module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'deps',
        'assets',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'types',
        'revert',
        'perf',
        'eslint',
        'stories',
        'chromatic',
        'pages',
        'license',
        'vscode-settings',
        'vscode-extensions',
        'vercel',
        'ignore',
        'typescript',
        'nextjs',
        'config',
        'husky',
        'prisma',
        'api',
        'express',
        'heroku',
        'components'
      ]
    ]
  }
};
