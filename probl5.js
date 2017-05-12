var n=20;
var array=[];
var b=0;
var mc=1;
for(i=2;i<=n;i++)
{
var a=0;
	for (j=2;j<i;j++)
	{
      if(i%j===0)
      {
      a=1;
      }
  }
    if(a===0)
      {
        array.push(i);
        b++;
      }
}
for(k=0;k<=b;k++)
{
	var c=1;
	while(c*array[k]<n)
	{
		c *=array[k];
	}
	mc *=c;
		
}
console.log(mc);