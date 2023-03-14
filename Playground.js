const x = [9, 10, 1, 2, 12, 4, 4, 4, 2, 2, 12, 12, 12];

const ordered = [...new Set(x)].sort((a, b) => a - b);

console.log(ordered);
