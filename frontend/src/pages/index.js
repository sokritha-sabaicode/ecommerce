import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { CategoryCard } from "@/components/commons";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ category, error }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/contact.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          {/* if fetching failed */}
          {error && <h1>This is {error}</h1>}
          {/* if fetching success */}
          {!error && category.status === "success"
            ? category.data.map((eachItem, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <CategoryCard
                      id={eachItem._id}
                      title={eachItem.name}
                      description={eachItem.description}
                    />
                  </React.Fragment>
                );
              })
            : null}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from backend
  try {
    const categoryResult = await fetch("http://localhost:5000/api/v1/category");
    const category = await categoryResult.json();

    return {
      props: {
        category,
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
