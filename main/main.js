module.exports = function main(a) {
  let ans=0;
  for(let i=0;i<a.length;i++){
      ans+=a[i]-'0';
  }
  return ans;
};
