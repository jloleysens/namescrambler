let
  i = process.argv[2],
  r = '';
while (i) {
  const c = Math.floor(Math.random() * i.length);
  r += i[c];
  i = i.replace(i[c], '');
}
process.stdout.write(r);
process.stdout.write('\n');
process.exit(0);

// node main.js "hello world"
// echo "echo "\"hello world\"" | xargs node main.mjs"