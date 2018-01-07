# This program says hello and asks for name

print('Hello World')
print('What is your name?') #ask for name
myName = input()
print('It\'s good to meet you, ' + myName)
print('The length of your name is: ')
print(len(myName))
print('What is your age?') #ask for age
myAge = input()
print('You will be ' + str(int(myAge) + 1) + ' next birthday')
