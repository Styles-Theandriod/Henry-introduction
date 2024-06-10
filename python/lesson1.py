print("Hello world")
name = "emmanuel"

# Conventions In naming variables
# camelCase
# PascalCase
# snake_case 

# camelCase
firstName = "John"
totalAmount = 100.50
numberOfStudents = 30

# PascalCase
FirstName = "Jane"
TotalAmount = 200.75
NumberOfStudents = 40

# snake_case
first_name = "Alice"
total_amount = 300.25
number_of_students = 50

# Case Functions 
Uppercase = "uppercase"
lowercase = "uppercase"
TitleCase = "uppercase"
Capitalize ="uppercase"

print(Uppercase.upper())
print(lowercase.lower())
print(TitleCase.capitalize())
print(Capitalize.capitalize())

# Data Types in python 
str 
float 
bool
list
tuple
set 
dict
None

name = str('emmanuel')
price = float(100)
age = int(30)
isPlaying = True
fruits = ['apple', 'banana', 'orange', 'pawpaw']
students = ('John', 'Michelle')
setOfParents = {(1, 2), (3, 4), (5, 6)}
person = {'Name': 'John', 'Email': 'John Smith', 'Address': 'John Smith'}
print(type(setOfParents))

""" This is another way to comment"""
# This is another way to comment

# Strings
print('hello' + ' world')
print(name + str(age))

sentences = 'Abidoshaker'
print(sentences[0:3])
print(sentences[0::3])
def funk():
    print('Hello funk!')

def hello():
    pass


funk()
hello()

first = 'real'
last = 'top'

print(first + last )


# Escape characters in python 
print('new \n line')
print('Name \t Age \t Country \t State ')

# Optional Argument skipped

num = 2
num2 = 6

nums = num + num2
print(nums)

nums = num - num2
print(nums)

nums = num * num2
print(nums)

nums = num / num2
print(nums)

nums = num // num2
print(nums)

nums = num % num2
print(nums)

# Random Numbers in Python
import random

print(random.randint(0, 100))


print(random.choice(['Apple', 'Banana', 'Orange']))



# Math Lib/functions
import math
print('square root',math.sqrt(2))
print('power',math.pow(2, 2))
print('tan',math.tan(2))
print('sin',math.sin(2))
print('cos',math.cos(2))
print('ceil',math.ceil(0))
print('pi',math.pi)

listOfLadies = ['kachi', 'Onyekachi', 'chi chi', 'chidimma', 'Cynthia']
# print(listOfLadies[0])


# List in pythons 
list_of_friends = ['kachi', 'Onyekachi', 'chi chi']
# Indexing
print(list_of_friends[0])

# Changing items in a list
add_item = list_of_friends[1] = 'Benzima'
# Adding items to the end of the list
list_of_friends.append('Kpachimeremerechipako')
# Add items based on your index 
list_of_friends.insert(0, 'Balablue')

# Popping items in the list
list_of_friends.pop(0)
# Deleting items in the list
# del list_of_friends
print(list_of_friends)
list_comprehension = ['Pyhton', 'Javascript', 'PHP']
item1, item2, item3 = list_comprehension
print(item2)

squares = [x**2 for x in range(5)]
print(squares)

even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)
# Output: [0, 4, 16, 36, 64]


matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat_list = [num for row in matrix for num in row]
print(flat_list)
# Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Accepting numerical user Input

Year_of_birth = int(input("Year of Birth"))
Current_Year = int(input("Current Year"))
print('Your age is:', Current_Year  - Year_of_birth)