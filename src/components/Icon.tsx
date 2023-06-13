import React from 'react';

//如果有很多张svg的话就麻烦
// require('icons/money.svg')
// require('icons/tags.svg')
// require('icons/statistic.svg')
//可以使用导入文件夹方式
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name : string
}
const Icon = (props:Props) => {
  return(
    <svg className="icon" >
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon