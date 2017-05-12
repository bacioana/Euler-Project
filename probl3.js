var n=600851475143;
var large=0;
if(n%2===0)
{
	n /=2;
}

for (i=3;i<=n;i++)
{
	if (n%i===0)
	{
		large=i;
		n/=i;
	}
}
if (n>2)
{
	large=n;
}
console.log(large);