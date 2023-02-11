const sParseInt = (str: string) => parseInt(str, 10);

function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map(sParseInt);
  const data = input.slice(1, M + 1);
  console.log(data);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
