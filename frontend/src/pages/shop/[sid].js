import { useRouter } from "next/router";

function ShopDetail() {
  const router = useRouter();
  const query = router.query;

  return <>Product: {query.sid}</>;
}

export default ShopDetail;
