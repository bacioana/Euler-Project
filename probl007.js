//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?
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
var array=[];
var b=0;
var c=2;
while(b<10001)
{
  if(isprime(c))
  {
    array.push(c);
    b++;
  }
  c++;
}
console.log(array[10000]);
