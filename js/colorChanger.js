    

       const value  = document.querySelectorAll('.color')
          const body  =  document.querySelector('body')

            value.forEach((a)=>{
                    a.addEventListener('click',function(){
                        // console.log(a.id)

                        body.style.backgroundColor = a.id

                    })
            })