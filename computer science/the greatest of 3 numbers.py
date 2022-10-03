number1 = int(input('enter your first number'))
number2 = int(input('enter your second number'))
number3 = int(input('enter your third number'))

if(number1 > number2):
    if(number1 > number3):
        print('the greatest number is: ', number1)
        
elif(number2 > number1):
    if(number2 > number3):
        print('the greatest number is: ', number2)
    
elif(number3 > number1):
    if(number3> number2):
        print('the greatest number is: ', number3)
        
else:
    print ('they are all the same amount')