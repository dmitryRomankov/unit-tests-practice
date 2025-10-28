export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '18',
        },
        modules: 'auto',
      },
    ],
  ],
  plugins: [],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' },
          },
        ],
      ],
    },
  },
};
