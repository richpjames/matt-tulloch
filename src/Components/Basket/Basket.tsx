import React, { useContext } from "react";

import { BasketListItem } from "./BasketListItem";
import { LoadingSpinner } from "../Common/LoadingSpinner";

import { PageWrapper, ErrorText } from "../Common";
import { ListTitle } from "../Common/ListComponents";
import { mainImageUrl } from "../../constants";

import { BasketItems } from "./BasketItems";
import { CartContext } from "./CartProvider";

// type IProps = {
//   hasItems?: boolean;
//   hasError?: boolean;
//   loading?: boolean;
//   onCheckoutClicked?: (click: React.MouseEvent) => void;
//   productIds?: string[];
//   productsById?: { [index: string]: Product };
//   quantityById?: { [key: string]: number };
//   setShipping?: (index: number) => void;
//   shipping?: Shipping;
//   shippingOptions?: Shipping[];
//   total?: string;
// };

interface BasketContext {
  contents: [[sku, number]];
  cart: [[{ index: string }, number]];
  add: (id: string) => void;
  subtract: (id: string) => void;
  get: (id: string) => number;
  set: (id: string) => void;
  remove: (id: string) => void;
  count: number;
  total: number;
}
type sku = {
  priceId: string;
  price: number;
  title: string;
  inventory: number;
  slug: string;
  id;
};

const Basket = (): React.ReactElement => {
  const {
    contents,
    cart,
    add,
    subtract,
    get,
    set,
    remove,
    count,
    total,
  } = useContext<BasketContext>(CartContext);

  const basketItems = contents.map((product, index) => {
    return JSON.stringify(product);
  });
  //   const {title, price, inventory, slug} = product[0]
  //  return  <BasketListItem
  //     title={title}
  //     price={price}
  //     quantity={price}
  //     id={id}
  //     imageSrc={`${mainImageUrl}${slug}/thumbnails/${slug}`}
  //     stock={inventory}
  //     key={index}
  //     index={index}
  //     slug={slug}
  //   />}
  // ));
  // let basketComponent;
  // if (!loading && !hasError) {
  //   basketComponent = (
  //     <BasketItems
  //       basketItems={basketItems}
  //       hasItems={hasItems}
  //       shipping={shipping}
  //       setShipping={setShipping}
  //       shippingOptions={shippingOptions}
  //       total={total}
  //       onCheckoutClicked={onCheckoutClicked}
  //     />
  //   );
  // } else if (loading && !hasError) {
  //   basketComponent = <LoadingSpinner />;
  // } else if (hasError) {
  //   basketComponent = (
  //     <ErrorText
  //       text={`Something has gone wrong :(
  //         Please try again or contact contact@monitorbooks.co.uk`}
  //     />
  //   );
  // }

  return <>{basketItems}</>;
  // <PageWrapper>
  //   <ListTitle>Basket</ListTitle>
  //   {/* {basketComponent} */}
  // </PageWrapper>
};
export default Basket;
