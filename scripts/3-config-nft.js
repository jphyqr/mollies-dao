import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x19E7E99635FF289D044044fe1985bb24b67EE07B"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Deep Pockets and an Anger Issue",
        description: "This NFT will give you access to MGDao!",
        image: readFileSync("scripts/assets/MGDao.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
