const fs = require('fs-extra'), concat = require('concat'), // FileSystem dependencies & utility method
    target = process.argv.slice(2) || 'es2015', // es module target (default is `es2015`)
    path = {
        demo_src: './src/assets/example/',
        demo_dest: './example/',
        elements_src: './dist/elements-build',
        elements_dest: './dist/'
    },
    package_name = 'Web-UI',
    elements_file = path.elements_dest + 'index.min.js',
    packages = [
      {
          name: package_name, src: path.elements_dest, description: 'HTML5 tags empowered as custom elements',
          // Concatenates ng-cli build files into a single index.min.js file as Javascript es15 customElement
          fn: () => concat(['polyfills', 'runtime', 'main'].map((str) => `${path.elements_src}/${str}-${target}.js`), elements_file)
      },
      {
          name:'demo project', src: path.demo_dest, description: 'VanillaJS demo project to demonstrate the main project',
          // Adds ./src/assets/example files to ./example repository to ease demonstrate project
          fn: () => { fs.readdirSync(path.demo_src).forEach(file => fs.copy(path.demo_src + file, path.demo_dest + file)) }
      }
    ]; // Packages to be indexed and generated in respective directory

/**
 * Generates, for each packages described above, distribution files.
 * If the package has a defined fn property, it wil be executed to generate files
 * If not, package is simply indexed to the final table that is displayed when script is complete
 */
(function build() {
    packages.forEach(el => fs.ensureDir(el.src) && el.fn())
    console.clear()
    console.log(`🎉 '${package_name}' package successfully built as ${target} module 🎉`)
    console.table(packages.map((pack, index) => ({name: pack.name, source: index === 0 ? elements_file  : pack.src , description: pack.description })))
})()
