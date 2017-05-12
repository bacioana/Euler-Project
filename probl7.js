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