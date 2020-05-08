const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const setMPA = (ext) => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, `./src/*/index.${ext}`))
  Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index]
    const match = entryFile && entryFile.match(/src\/(.*)\/index.[tj]s$/)
    const pageName = match && match[1]
    entry[pageName] = entryFile
    htmlWebpackPlugins.push(new HtmlWebpackPlugin({
      template: path.join(__dirname, `./pages/${pageName}.html`),
      filename: `${pageName}.html`,
      chunks: [`${pageName}`],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }))
  })
  return {
    entry, htmlWebpackPlugins
  }
}



module.exports = (env) => {
  const { production, ext } = env || {}
  const { entry, htmlWebpackPlugins } = setMPA(ext)
  return {
    entry: entry,
    output: {
      filename: 'js/[name].js',
      path: path.join(__dirname, './dist'),
      publicPath: ''
    },
    mode: production ? 'production' : 'development',
    devtool: production ? 'none' : 'source-map',
    devServer: {
      host: 'localhost',
      port: 3000,
      quiet: true
    },
    module: {
      rules: [
        {
          test: /\.(?:ts|js)$/,
          include:path.join(__dirname,'./src'),
          use: [
            'babel-loader',
            'ts-loader'
          ]
        }
      ]
    },
    devServer: {
      quiet: true,
      port: 3000
    },
    plugins: [
      // new CleanWebpackPlugin()
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: ['You application is running here http://localhost:3000'],
          notes: ['compilation success.................🍎🍎'],
          clearConsole: false,
        },
      })
    ].concat(htmlWebpackPlugins)
  }
}




