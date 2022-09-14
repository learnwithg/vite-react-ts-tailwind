module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=2',
    'vitest --watch=false',
    () => 'tsc-files --noEmit'
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write']
}
