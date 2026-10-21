import styles from "./StatsBar.module.css";

const stats = [
  { label: "Programs Offered", value: "15+" },
  { label: "Studio Learning", value: "80%" },
  { label: "Industry-Ready", value: "100%" },
  { label: "Naturals Legacy", value: "20+", suffix: "Yrs" },
];

export default function StatsBar() {
  return (
    <section className={styles.wrap} aria-label="Naturals ADFT at a glance">
      <dl className={styles.panel}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.card}>
            <dt className={styles.label}>{stat.label}</dt>
            <dd className={styles.value}>
              {stat.value}
              {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
