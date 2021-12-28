import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xC8049867a17a3d006BFD46529641c6ac02d39459",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Special Creator Sticker",
        description: "This NFT will give you access to CreatorsDao",
        image: readFileSync("scripts/assets/Sticker.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()