import { Suspense } from "react";
import Shop from "./Shop";

const ShopPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Shop />
    </Suspense>
  );
};

export default ShopPage