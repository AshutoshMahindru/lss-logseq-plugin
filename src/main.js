import '@logseq/libs';

async function main() {
  console.log("LSS PLUGIN MAIN STARTED");

  await logseq.App.showMsg("LSS Plugin Loaded");

  logseq.App.registerCommandPalette(
    {
      key: "lss-test-command",
      label: "LSS: Test Command"
    },
    async () => {
      await logseq.App.showMsg("LSS command works");
    }
  );

  console.log("LSS TEST COMMAND REGISTERED");
}

logseq.ready(main).catch((e) => {
  console.error("LSS PLUGIN ERROR", e);
});
