const fs = require("fs/promises");
const path = require("path");
const svgr = require("@svgr/core").default;
const glob = require("glob");

async function createThemedIcon(path) {
  const ourSvg = await fs.readFile(path);

  let svgComponent = await svgr(
    ourSvg,
    {
      typescript: true,
      replaceAttrValues: { "#09102B": "{props.color}" },
    },
    { componentName: "MyComponent" }
  );
  svgComponent = svgComponent.replace(
    'import * as React from "react";',
    `import * as React from "react";
import { IconProps, IconBase } from "../IconBase";`
  );
  svgComponent = svgComponent.replace(
    "export default MyComponent;",
    `
function MyComponentWrapped(props: IconProps) {
  return (
    <IconBase {...props}>
      <MyComponent />
    </IconBase>
  );
}

export default MyComponentWrapped;
`
  );
  fs.writeFile(path.replace(".svg", ".tsx"), svgComponent);
}

glob(path.join(__dirname, "src/icons/**/*.svg"), (err, matches) => {
  if (err) {
    throw Error("Icon generation error", err);
  }
  matches.forEach((iconPath) => {
    createThemedIcon(iconPath);
  });
});
