const blocked = ["twitter.com", "eksisozluk.com"];

function main() {
  const { origin } = new URL(window.location.href);
  blocked.forEach((s) => {
    if (origin.includes(s)) {
      window.location.href = "about:blank";
    }
  });
}
main();
