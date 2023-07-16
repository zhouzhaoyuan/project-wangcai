import {useEffect, useState} from 'react';
import {createId} from 'lib/createid';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    //window.localStorage.getItem('tags') || '[]'
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags)
  },[]); // 组件挂载时执行

  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])
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
    setTags(tags.map(tag => tag.id === id ? {id: id, name: obj.name} : tag));
  };

  const deleteTag = (id: number) => {
    // const index = findTagIndex(id)
    // const tagClone = JSON.parse(JSON.stringify(tags))
    // tagClone.splice(index,1)
    // setTags(tagClone)

    //更简单写法
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('你需要新增的标签为：');
    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };


  return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag};
};
export {useTags};