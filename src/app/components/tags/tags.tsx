import React from 'react';
import { v4 as uuid } from 'uuid';
import { useTags } from '../provider/useFavContext';
const Tags: React.FC = (props) => {
  const { tags, updateTags } = useTags();
  return (
    <div>
      tags:
      {tags?.map((el, index) => {
        return <p key={uuid()}>{el}</p>;
      })}
    </div>
  );
};

export default Tags;
