const generateOutput = (text:string,output='0') => {
  switch (text){
    case '0' :
    case '1' :
    case '2' :
    case '3' :
    case '4' :
    case '5' :
    case '6' :
    case '7' :
    case '8' :
    case '9' :
    case '10' :
      //console.log(text);
      if(output === '0'){
        return text;
      }else {
        return output + text;
      }
    case '删除':
      //console.log('删除');
      if(output.length === 1){
        return '0';
      }else{
        return output.slice(0,output.length-1) || '';
      }
    case '清空':
      //console.log('清空');
      return '';
    case '.':
      //console.log('点');
      if(output.indexOf('.')>=0){
        return output;
      }else {
       return output + '.';
      }
    default:
      return '';
  }
}
export {generateOutput}