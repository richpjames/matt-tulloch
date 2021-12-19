import CMS from "netlify-cms-app";

import { ProductPagePreview } from "./templates/ProductPagePreview";

CMS.registerPreviewTemplate("shop_items", ProductPagePreview);
