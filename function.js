
function checkPrimes(n){

  let flag = true;    //biến cờ hiệu;
  if(n < 2){
    flag = false;
  }

  else {
    {
      for(i = 2;i < Math.sqrt(n) ; i++)
        if( n % i == 0) {
          flag = false;
          break;
        }
    }
  }

  if(flag == true){ //Kiểm tra biến cờ hiệu
    document.write(n +"là số nguyên tố" + "<br/>");
  }
  else {
    document.write(n +" không phải số nguyên tố" + "<br/>");
  }
checkPrimes();
}

// xây dựng hàm in ra  day số
function prinNumber() {
    let number = document.getElementById("number").value;
    let numbers = parseInt(number);// ép number sang kiểu number
    let html = "";
    for(i = 0; i< numbers;i++){
      html+= i + "  ";
    }
  document.getElementById("result").innerText = html;
}


function giaiphuongtrinhbacnhat(a,b) {
  if(a==0&&b==0){
    alert("phuong trinh co vo so nghiem");
  }
  else if(a!=0&&b==0){
    alert("phuong trinh co nghiem la x = 0" );
  }
  else if(a ==0&& b!=0){
    alert("phuong trinh vo nghiem");
  }
  else{
    alert("phuong trinh co nghiem la x= " +(-b/a));
  }
}

  
function kiemtrasochinhphuong(a) {
  // dung ham Math.sqrt  de lay can bac 2
  //sau do chia lay phan du voi 1 , neu bang o thi la so chinh phuong,
  // nguoc lai thi khong la so chinh phuong
  if(Math.sqrt(a)%1==0){
    alert("a la so chinh phuong");
  }
  else {
    alert("a khong phai so chinh phuong");
  }
}
function processconfirm(answer) {
   let result ="";
   if(answer ){
     result = "excellent. We'll phay play a nice game of chess ";
   }
   else{
     result = "May be late then.";
   }
   return result;
}