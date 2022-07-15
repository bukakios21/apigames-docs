import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy Integration',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Single API untuk berbagai macam topup game dan tersedia api dokumentasi yang lengkap
      </>
    ),
  },
  {
    title: 'Fast Transaction',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Proses Transaksi hanya dalam hitungan detik sudah berhasil di proses.
      </>
    ),
  },
  {
    title: 'Laporan Transaksi',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Laporan & Rangkuman transaksi di kemas secara rinci dan mudah untuk di pahami
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
