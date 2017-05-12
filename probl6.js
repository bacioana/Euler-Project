var sum=0;
var quar=0;
var dif=0;
var a=0;
var b=0;
for (i=1;i<=100;i++)
{
  a=i*i;
  sum +=a;
}
for(j=1;j<=100;j++)
{
	quar +=j;
}
b=quar*quar;
dif=b-sum;
console.log(sum,quar)
console.log(dif);