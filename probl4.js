var max=0;
var prod=0;
var pal=function(n)
{
  var a=n.toString();
  if (a===a.split('').reverse().join(''))
  {
  	return true;
  }
  else
  {
  	return false;
  }
}
for (i=100;i<1000;i++)
{
	for (j=100;j<1000;j++)
	{
		prod=i*j;
		if (pal(prod) && max<prod)
			max=prod;
	}
}
console.log(max);