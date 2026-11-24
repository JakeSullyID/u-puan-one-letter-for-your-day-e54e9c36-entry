import * as fs from 'fs';
import * as path from 'path';

// The letter G represents being gobsmacked by a wildly astonishing day.
const TARGET_LETTER = 'G';

function main() {
    // Ensure the output satisfies the strict one-character rule without exception.
    if (typeof TARGET_LETTER !== 'string' || !/^[A-Z]$/.test(TARGET_LETTER)) {
        process.stderr.write('Error: TARGET_LETTER must be a single uppercase ASCII letter from A to Z.\n');
        process.exit(1);
    }

    const outputDir = '/output';
    const outputPath = path.join(outputDir, 'entry.txt');

    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputPath, TARGET_LETTER, { encoding: 'utf-8' });
}

main();
