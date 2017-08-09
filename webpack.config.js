var path = require("path");

module.exports = {
    entry : "./app/main.js" ,
    output : {
        path : path.resolve(__dirname , "./dist") ,
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.js$/ ,
                include : [
                    path.resolve(__dirname , "./app")
                ],
                exclude : [
                    path.resolve(__dirname , "node_modules")
                ],
                loader : "babel-loader" ,
                options : {
                    presets: ["es2015" , "react" , "stage-3"],
                    plugins : [
                        "syntax-object-rest-spread",
                        "transform-object-rest-spread",
                        [
                            "transform-runtime", {
                              "helpers": false, // defaults to true
                              "polyfill": false, // defaults to true
                              "regenerator": true, // defaults to true
                              "moduleName": "babel-runtime" // defaults to "babel-runtime"
                            }
                        ]
                    ]
                }
            }
        ]
    },
    watch: true
}