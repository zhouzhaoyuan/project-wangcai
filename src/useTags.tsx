import {useState} from 'react';
import {createId} from 'lib/createid';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    // //获取你要改的tag的下标
    // const index = findTagIndex(id);
    // //深拷贝tag 得到 tagClone
    // const tagClone = JSON.parse(JSON.stringify(tags));
    // //把tagClone的第index删掉，换成{id:id , name:obj.name}
    // tagClone.splice(index, 1, {id:id, name: obj.name});
    // setTags(tagClone);

    //更简单的写法
    setTags(tags.map(tag => tag.id === id ? {id:id,name:obj.name} : tag ))
  };

  const deleteTag = (id:number) => {
    // const index = findTagIndex(id)
    // const tagClone = JSON.parse(JSON.stringify(tags))
    // tagClone.splice(index,1)
    // setTags(tagClone)

    //更简单写法
    setTags(tags.filter(tag => tag.id !== id))
  }


  return {tags, setTags, findTag, findTagIndex, updateTag,deleteTag};
};
export {useTags};