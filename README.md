# Web User Interface 🎨

## What is WUI ? 📀

Web User Interface is a package providing angular elements for every HTML5 tag in order to ease build UI.

## Available commands 🕹

The command below will generate all necessary files to build a new version of the package.
<details>
<summary>Build 🏗</summary>

> `npm run build:elements` will export Components as Angular Elements in `dist/elements-build`.
> Then, `postbuild:elements` script, which is automatically called, will:
>  * concatenate the build files into a single vdmzr-player.js file in `dist/` directory.
>  * generate `demo` project under `dist/example`
> 
> More information in `src/environments/element/build-elements.js`

</details>
<details>
<summary>Development ⚙️</summary>

Install the project dependencies with `npm i`. Then, you can run the following commands:

```shell
ng serve        # launch development server (available at http://localhost:1337/)
npm run lint    # format project depending on tslint.json rules
npm run doc     # generate new './documentation' folder
```
</details>
<details>
<summary>Test 🧪</summary>

Install the project dependencies with `npm i`. Then, you can run the following commands:

```shell
npm run test    # karma unit tests
npm run e2e     # end to end test (UI)
```
</details>

## Contact ✉️

Feel free to contact `louis.godlewski@gmail.com` if you have any suggestions or wish to learn more about certain aspects of this project.
