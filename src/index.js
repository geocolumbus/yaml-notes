const yaml = require("js-yaml")
const fs = require("fs")

try {
    const doc = yaml.safeLoad(fs.readFileSync(`${__dirname}/one.yaml`, "utf-8"))
    console.log(JSON.stringify(doc,null,2))
} catch (e) {
    console.log(e)
}