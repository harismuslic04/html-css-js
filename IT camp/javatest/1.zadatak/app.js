let broj1 = +prompt("Unesite neki broj:");
if (isNaN(broj1) || broj1 < 1) {
  console.log("Niste uneli broj");
}
for (let i = 1; i <= broj1; i++) {
  console.log(broj1 * broj1);
}
// kolok
// int x,y,n,i,brojb=0,brojc=0;
// float d,p1,p2,p3,p;
// printf("unesi broj tacaka n:");
// scanf("%d",&n);

// for(i=1;i<=n;i++){
//     printf("unesi x i y:");
//     scanf("%d %d",&x,&y);
//     p1=fabs(1.0*(8*(6-y)+10*(y-6)+x*(6-6))/2);
// p2=fabs(1.0*(10*(8-y)+9*(y-6)+x*(6-8))/2);
// p3=fabs(1.0*(8*(8-y)+9*(y-6)+x*(6-8))/2);
// p=fabs(1.0*(8*(6-8)+10*(8-6)+9*(6-6))/2);
// d=sqrt(pow(x-9,2)+pow(y-3,2));
//     if(d<=1&& d>=0){

//     brojb++;
// }
// else if(p1+p2+p3==p){
//     brojb++;
// }
//  else if(x>=2&&x<=10&&y>=2&&y<=4||x>=2&&x<=10&&y>=6&&y<=8||x>=2&&x<=4&&y>=2&&y<=8||x>=8&&x<=10&&y>=2&&y<=8){
//     brojc++;
// } else if(y<2||y>8){
//     brojb++;
// }else if(x<2||x>10){
//     brojb++;
// }
// }
// printf(" broj belih je %d:\t",brojb);
// printf(" broj crvenih je %d:",brojc);
// return 0;
