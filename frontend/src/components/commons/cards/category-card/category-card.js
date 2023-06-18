import styles from "@/styles/Home.module.css";

function CategoryCard({ id, title, description }) {
  return (
    <a
      href={`/shop?category=${id}`}
      className={styles.card}
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  );
}

export default CategoryCard;
