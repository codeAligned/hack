const fs = require('fs');
const os = require('os');
const path = require('path');
const childProcess = require('child_process');

const options = {
    cwd: path.join(__dirname, '..'),
    maxBuffer: 1024 * 5000
};

childProcess
    .exec('find . \\( -name "*.cpp" -o -name "*.py" \\) ! -path "./hackerrank/"', options, function(err, stdout, stderr) {
        if (err) {
            process.stderr.write(`{stderr}\n`);
            process.exit(1);
        }

        // remove any trailing newline, otherwise last element will be "":
        stdout = stdout.replace(/\n$/, '');

        const files = stdout.split('\n');

        for (const file of files) {
            const name = file.replace('./', '+ ').replace(/\.(cpp|py)$/, '');

            childProcess.execSync(`git add ${file}`);
            childProcess.execSync(`git commit -m "${name}"`);
        }
    });
