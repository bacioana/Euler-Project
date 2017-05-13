//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.
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
