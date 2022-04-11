

function loadCustomer(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.json', true);

    // xhr.onload = function(){
       
    //     if(this.status == 200){

    //         console.log('yes')
    //     }
    // }
    xhr.send()
}

loadCustomer()