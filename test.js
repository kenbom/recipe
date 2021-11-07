console.log("hello")
require("dotenv").config(/*{
  path: `.env.${process.env.NODE_ENV}`,
}*/)
console.log(process.env.CONTENTFUL_ACCESS_TOKEN)
console.log(process.env.PATH)
console.log(process.env)
