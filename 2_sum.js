let sum = 0;

process.argv.slice(2).map((item) => sum += Number(item));

console.log(sum);
