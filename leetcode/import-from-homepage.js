const fs = require('fs');
const os = require('os');
const path = require('path');

const LEETCODE_DIR = path.join(os.homedir(), 'projects/homepage/src/pages/leetcode/');
const OUT_DIR = __dirname;

const files = fs.readdirSync(LEETCODE_DIR);

for (const file of files) {
    let matches;

    if (matches = file.match(/([0-9]+)?\-(.*?)\.md/)) {
        const number = matches[1].substr(1);

        const name = matches[2];

        const newDirectoryName = `${number}-${name}`;

        const assignmentOutputDirectory = path.join(OUT_DIR, newDirectoryName);

        if (!fs.existsSync(assignmentOutputDirectory)) {
            fs.mkdirSync(assignmentOutputDirectory);

            const newFileName = `${name}.js`;

            const inputMarkdownData = fs.readFileSync(path.join(LEETCODE_DIR, file), {
                encoding: 'UTF-8'
            });

            const start = inputMarkdownData.indexOf('```js');

            if (!~start) {
                continue;
            }

            let end = inputMarkdownData.lastIndexOf("```\n");

            if (end === -1) {
                end = inputMarkdownData.length - 1;
            }

            const data = inputMarkdownData.substring(start + 5, end);

            fs.writeFile(path.join(assignmentOutputDirectory, newFileName), data);
        }
    }
}
