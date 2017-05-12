var a=1;
var b=1;
var c=0;
var sum=0;
while(c<4000000)
{
	if(c%2===0)
	{
	  sum +=c;
	}
	c=a+b;
	a=b;
	b=c;
}
console.log(sum);