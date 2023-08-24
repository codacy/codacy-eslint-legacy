const blacklistRegexes: RegExp[] = [
  /angular\/service-name/,
  /babel\/.+/,
  /ember\/no-restricted-property-modifications/,
  /import\/.+/,
  /node\/no-missing-require/,
  /promise\/no-native/,
  /react\/jsx-sort-default-props/,
  /react\/jsx-space-before-closing/,
  /unicorn\/import-index/,
  /unicorn\/no-array-instanceof/,
  /unicorn\/no-fn-reference-in-iterator/,
  /unicorn\/no-reduce/,
  /unicorn\/prefer-dataset/,
  /unicorn\/prefer-node-append/,
  /unicorn\/prefer-starts-ends-with/,
  /unicorn\/prefer-event-key/,
  /unicorn\/prefer-node-remove/,
  /unicorn\/prefer-object-has-own/,
  /unicorn\/prefer-replace-all/,
  /unicorn\/prefer-flat-map/,
  /unicorn\/prefer-exponentiation-operator/,
  /unicorn\/prefer-text-content/,
  /unicorn\/prefer-trim-start-end/,
  /unicorn\/regex-shorthand/,
]

const documentationBlacklistRegexes: RegExp[] = []

function testRegex(regexes: RegExp[], value: string): boolean {
  return regexes.some((regex) => regex.test(value))
}

export function isBlacklisted(ruleId: string): boolean {
  return testRegex(blacklistRegexes, ruleId)
}

// Removes a pattern from the documentation
// but still supports it with eslint config file
export function isBlacklistedOnlyFromDocumentation(ruleId: string): boolean {
  return testRegex(documentationBlacklistRegexes, ruleId)
}
