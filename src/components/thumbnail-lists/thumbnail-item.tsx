import React from 'react';
import styles from './thumbnail-item.module.css'
import FullVeganSmallFlag from '../../assets/flags/flag-full-vegan-small.svg'
import PartVeganSmallFlag from '../../assets/flags/flag-part-vegan-small.svg'
import RatingContainer from '../reviews/rating-container';
import Link from 'next/link';


function ThumbnailItem({ item }) {
  return (
    <Link key={item.id} href={`/itemdetails/${item.id}`} passHref>
      <div className={styles.listitemwrap} >
        <img src={item.thumbImg} alt="" />
        <div className={styles.listitemcontent}>
          <div className={styles.ratingwrap}>
            <RatingContainer rating={item.rating} />
          </div>
          {item.isVegan === false ? <PartVeganSmallFlag className={styles.flag} /> : <FullVeganSmallFlag className={styles.flag} />}
          <p className={styles.itemtitle}>{item.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default ThumbnailItem;
