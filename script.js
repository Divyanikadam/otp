let input = document.querySelectorAll('input');
input = [...input];



 input.forEach(input,index) ;
    {
    input.addEventListener('keyup',(e) => 
        {
            if (e.key >= '0' && e.key <= '9') 
            {
                if (index + 1 < input.length)
                     {
                    input[index + 1].focus();
                }
            } 
            else if (e.key === 'Backspace')
             {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    }