const { DiscordSDK } = window;
const discordSdk = new DiscordSDK();

async function init() {
  try {
    await discordSdk.ready();
    document.getElementById("welcome").textContent = "Connected to Discord ✅";
  } catch (e) {
    document.getElementById("welcome").textContent = "Failed to connect 😔";
    console.error(e);
  }
}

document.getElementById("helloBtn").addEventListener("click", () => {
  discordSdk.commands.sendActivityAction({
    type: "EMOJI",
    emoji_id: "👋",
  });
});

init();
