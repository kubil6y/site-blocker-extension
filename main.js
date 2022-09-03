const blocked = ["twitter.com", "eksisozluk.com"];

function main() {
    const { origin } = new URL(window.location.href);
    blocked.forEach((s) => {
        if (origin.includes(s)) {
            window.location.replace(
                "https://www.youtube.com/watch?v=CK4QwwiQVBY"
            );
        }
    });
}
main();
