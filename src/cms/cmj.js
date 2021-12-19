import CMS from "netlify-cms-app";

import ProductPagePreview from "./preview-templates/ProductPagePreview";

console.log("im being red");

CMS.registerPreviewTemplate("shop_items", ProductPagePreview);
