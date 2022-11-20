const {DateTime} = require('luxon')
module.exports = function(eleventyConfig){
    //passing through styles and assets
    eleventyConfig.addPassthroughCopy('./src/styles')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addFilter("postDate", (dateObj)=>{
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    return{
        dir:{
            input: "src",
            output: "public"
        }
    }
}