//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
var isprime=function(n)
{
  var a=0;
  for(i=2;i<n;i++)
  {
    if(n%i===0)
    {
      a=1;
    }
  }
  if(a===0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
var c=2;
var sum=0;
while(c<2000000)
{
  if(isprime(c))
  {
    sum +=c;
  }
  c++;
}
console.log(sum);