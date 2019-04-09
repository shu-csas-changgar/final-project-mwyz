#wow this is my first comment!!!!
#numbers 
# ex) 1,2,3,4,5...
#strings
# ex) "hello", "123", "Yvette"
#booleans
# ex) True, False

#variables
#syntax
# identifier = value
var = 4
print("-----------")
print("var's inital value: " + str(var))
var = "Wil"
print("var's changed value: " + str(var)) 
print("-----------")
print("Hello World")
print("-----------")
print(20)
print("-----------")
print(True)
print("-----------")
print(False)
print("-----------")


x = 5
y = 89
z = x + y
print("basic addition: x + y")
print(z)
z = x - y
print("basic subtraction: x - y")
print(z)
z = x * y
print("basic multiplication: x * y")
print(z)
z = x / y
print("basic division: x / y")
print(z)
print("-----------")
# IF STATEMENTS!!!! dun dun..... duuuunnnnnnnnnn
# logical operators
# ex) >, <, ==, >=, <=, !=

if x > y:
    print("x is greater than y!!! :D")
else:
    print("y is greater than x!!! D:")  

x = 89
if x > y:
    print("x is greater than y!!! :D")
elif x == y:
    print("x is equal to y!!! :D (equality *!!!)")
else:
    print("y is greater than x!!! D:") 
print("-----------")


lst = [1,2,3,4,5,6,7]
#indexs 0 ,1 ,2 ,3 ,4 ,5 ,6 
print("printing the first index")
print(lst[0])
print("printing the third index")
print(lst[2])
print("printing the last index")
print(lst[6])
print("printing the second index")
print(lst[1])
lst[1] = 27
print("changing the second index")
print(lst[1])
print("-----------")
# for looops 
# for (indentifier for index/element) in (whatever youre trying to iterate over):
for x in lst:
    print(x)
print("-----------")
#second type of for loop
# x is used as an index instead of element
# this type of for loop can be used to modify the elements of the list
for x in range(len(lst)):
    lst[x] = lst[x] + 1
    print(lst[x])

 # while looops