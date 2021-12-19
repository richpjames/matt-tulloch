import React from "react";

import { ProductPageTemplate } from "../../templates/product";

export const ProductPagePreview = ({ entry }: { entry: any }) => {
    const data = entry.getIn(["data"]).toJS();
    return <ProductPageTemplate data={data} />;
};

