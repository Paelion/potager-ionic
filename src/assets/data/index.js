window.onload = function(){
    //cart box
    const iconShopping = document.querySelector('.iconShopping');
    const cartCloseBtn = document.querySelector('.fa-close');
    const cartBox = document.querySelector('.cartBox');
    iconShopping.addEventListener("click",function(){
        cartBox.classList.add('active');
    });
    cartCloseBtn.addEventListener("click",function(){
        cartBox.classList.remove('active');
    });


    // adding data to localstorage
    const attToCartBtn = document.getElementsByClassName('attToCart');
    let items = [];
    for(let i=0; i<attToCartBtn.length; i++){
        attToCartBtn[i].addEventListener("click",function(e){
            if(typeof(Storage) !== 'undefined'){
                let item = {
                    id:i+1,
                    name:e.target.parentElement.children[0].textContent,
                    price:e.target.parentElement.children[1].children[0].textContent,
                    no:1
                };
                if(JSON.parse(localStorage.getItem('items')) === null){
                    items.push(item);
                    localStorage.setItem("items",JSON.stringify(items));
                    window.location.reload();
                }else{
                    const localItems = JSON.parse(localStorage.getItem("items"));
                    localItems.map(data=>{
                        if(item.id == data.id){
                            item.no = data.no + 1;
                        }else{
                            items.push(data);
                        }
                    });
                    items.push(item);
                    localStorage.setItem('items',JSON.stringify(items));
                    window.location.reload();
                }
            }else{
                alert('local storage is not working on your browser');
            }
        });
    }
    // adding data to shopping cart
    const iconShoppingP = document.querySelector('.iconShopping p');
    let no = 0;
    JSON.parse(localStorage.getItem('items')).map(data=>{
        no = no+data.no
        ;	});
    iconShoppingP.innerHTML = no;


    //adding cartbox data in table
    const cardBoxTable = cartBox.querySelector('table');
    let tableData = '';
    tableData += '<tr  style="color: #40743C; font-size: 22px"><th style="padding:10px 20px 30px 0">Produit</th><th style="padding: 10px 30px 30px 10px ;">Qté</th><th style="padding: 10px 0 30px 20px;">Prix</th><th></th></tr>';
    if(JSON.parse(localStorage.getItem('items'))[0] === null){
        tableData += '<tr><td colspan="5">No items found</td></tr>'
    }else{
        JSON.parse(localStorage.getItem('items')).map(data=>{
            tableData += '<tr><th style="font-weight: lighter; padding:10px 20px 30px 10px">'+data.name+'</th><th style="font-weight: lighter;padding: 10px 30px 30px 20px">'+data.no+'</th><th style="font-weight: lighter; padding: 10px 0 30px 35px;">'+data.price+'</th><th style="font-size: 22px; padding: 10px 0 30px 40px;"><a href="#" onclick=Delete(this);><ion-icon name="trash-outline"></ion-icon></a></th</tr>';
        });
    }
    cardBoxTable.innerHTML = tableData;
}
