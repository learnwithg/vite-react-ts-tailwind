module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=1',
    'jest --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc-files --noEmit'
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write']
}
