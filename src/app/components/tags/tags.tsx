import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useTags } from '../provider/useFavContext';
import styles from './tags.module.css';
import cx from 'classnames';
import { STORED_TAGS } from '../provider/favContext';
type tagsPropsType = {
  setTag: Dispatch<SetStateAction<string>>;
  currentTag: string;
};

const Tags: React.FC<tagsPropsType> = ({ setTag, currentTag }) => {
  const { tags, updateTags } = useTags();
  const [showInput, setShowInput] = useState(false);
  const [newInput, setNewInput] = useState('');
  useEffect(() => {
    localStorage.setItem(STORED_TAGS, JSON.stringify(tags));
  }, [tags]);
  return (
    <div className={styles.container}>
      tags:
      {tags?.map((el) => {
        return (
          <button
            className={cx(el === currentTag && styles.active, styles.tag)}
            onClick={() => setTag(el)}
            key={uuid()}
          >
            {el}
            <button className={styles.deleteBtn} onClick={() => updateTags('delete', el)}>
              X
            </button>
          </button>
        );
      })}
      <button onClick={() => setShowInput(!showInput)}>{showInput ? '-' : '+'}</button>
      <input
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
        className={cx(showInput ? styles.tagInput : styles.hidden)}
        type='text'
      />
      <button
        className={cx(showInput ? styles.tagInput : styles.hidden)}
        onClick={() => {
          updateTags('add', newInput);
          setNewInput('');
        }}
      >
        add
      </button>
    </div>
  );
};

export default Tags;
