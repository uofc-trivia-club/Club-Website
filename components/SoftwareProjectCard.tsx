import styles from '../styles/SoftwareProjectCard.module.css';
import Link from 'next/link';

type SoftwareProjectCardProps = {
  title: string;
  description: string;
  extendedDescription: string;
  href?: string
};

export default function SoftwareProjectCard({
  title,
  description,
  extendedDescription,
  href
}: SoftwareProjectCardProps) {
  const content = (
    <div className={styles.softwareProjectCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.extendedWrap}>
        <div className={styles.extendedInner}>
          <p className={styles.extendedDescription}>
            {extendedDescription}
          </p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className={styles.link}>
      {content}
    </Link>
  ) : (
    content
  );
}


