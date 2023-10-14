import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './sort.module.css';
import cx from 'classnames';
type sortPropsType = {
  setSort: Dispatch<SetStateAction<string>>;
  sort: string;
};
const Sort: React.FC<sortPropsType> = ({ setSort, sort }) => {
  const sortOptions = [
    { relevance: 'relevance' },
    { 'posted date ascending': 'date-posted-asc' },
    { 'posted date descending': 'date-posted-desc' },
  ];
  return (
    <div className={styles.container}>
      sort by:
      {sortOptions.map((el) => {
        let value = Object.values(el)[0];
        let key = Object.keys(el)[0];
        return (
          <button
            className={cx(value === sort && styles.active, styles.sortOption)}
            key={uuid()}
            onClick={() => {
              setSort(value);
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Sort;
