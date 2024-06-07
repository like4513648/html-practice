//max_num 需要我們傳入三個數，會回傳最大值回來

function max_num(num1,num2,num3)
{
    if(num1 >= num2 && num1>=num3)
        {
            return num1;
        }else 
    if(num2>= num1 && num2 >= num3)
    {
        return num2 ;
    }else
    return num3 ;
}

document.write(max_num(0,99,18));