import { useRouter } from "next/router";

function Shop({ products, error }) {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <h1>Shop Category: {query.category}</h1>
      {!error &
      (products.status === "success") &
      (products.data?.length !== 0) ? (
        products.data.map((product, idx) => {
          return <>

          <a href={`shop/${product.id}`}></a>
          <p key={idx}>{product.name}</p>
          </>;
        })
      ) : (
        <p>Product Not Found</p>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch product data from backend
  try {
    const { query } = context;

    let productUrl = "http://localhost:5000/api/v1/products";

    if (query.category) {
      productUrl += `?categoryId=${query.category}`;
    }

    const productResult = await fetch(productUrl);
    const products = await productResult.json();

    console.log("products", products);

    return {
      props: {
        products,
      }, // will be passed to the page component as props
    };
  } catch (err) {
    console.log("Message Error", err);
    return {
      props: {
        error: err.message,
      },
    };
  }
}

export default Shop;
