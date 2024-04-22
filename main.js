const path = require('node:path')
const fsPromises = require('node:fs/promises')


// Створити папку "baseFolder". В ній створити 5 папок, в кожній з яких створити по 5 файлів
// з розширенням txt.
// Вивести в консоль шляхи до кожного файлу чи папки, також вивести поряд інформацію
// про те, чи є це файл чи папка.



const createFoldersAndFiles = async () => {
    try {
        const baseFolder = path.join(__dirname, 'baseFolder')
        await fsPromises.mkdir(baseFolder)
        console.log(path.dirname(baseFolder))
        for (let i = 1; i <= 5; i++) {
            await fsPromises.mkdir(path.join(baseFolder, `folder${i}`), {recursive: true})
            console.log(path.dirname(path.join(baseFolder, `folder${i}`)))
            console.log(path.dirname(baseFolder))
            for (let j = 1; j <= 5; j++) {
                await fsPromises.writeFile(path.join(baseFolder, `folder${i}`, `txtFile${j}.txt`), `File: ${j}`)
                console.log(path.dirname(path.join(baseFolder, `folder${i}`, `txtFile${j}.txt`)))
            }
        }
    } catch (e) {
        console.log('Error:', e)
    }
}

createFoldersAndFiles()
