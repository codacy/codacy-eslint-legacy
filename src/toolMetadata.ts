import packageJson from "../package.json"

export const dependencies = packageJson.dependencies

export const toolName = "eslint"

export const toolVersion = packageJson.dependencies.eslint.replace("^", "")
