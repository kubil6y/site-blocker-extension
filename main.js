const blocked = ["twitter.com", "eksisozluk.com"];

function main() {
  const { origin } = new URL(window.location.href);
  blocked.forEach((s) => {
    if (origin.includes(s)) {
      window.location.replace("https://www.youtube.com/watch?v=waAlgFq9Xq8");
    }
  });
}
main();

// TODO
// this works after we receive a response.
// there must be a way to take action before.
// cba
