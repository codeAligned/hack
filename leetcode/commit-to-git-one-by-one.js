const fs = require('fs');
const os = require('os');
const path = require('path');
const childProcess = require('child_process');

const LEETCODE_DIR = __dirname;

const files = fs.readdirSync(LEETCODE_DIR);

const reformatString = str => str.split('-')
                                 .map(str => str.length > 0 ? str[0].toUpperCase() + str.substr(1) : '')
                                 .join(' ');

for (const file of files) {
    const fullPath = path.join(LEETCODE_DIR, file);

    if (fs.statSync(fullPath).isDirectory()) {
        let matches;

        if (matches = file.match(/([0-9]+)?-(.*)/)) {
            const number = parseInt(matches[1], 10);

            const name = reformatString(matches[2]);

            childProcess.execSync(`git add ${fullPath}`);
            childProcess.execSync(`git commit -m "+ LeetCode ${number} ${name}"`);
        }
    }
}
