import random
print("Game loading...")
print('Game Started')

Thinking = ['rat', 'cat', 'mat', 'bat', 'ant', 'eye', 'cow', 'yam', 'egg']

Score = 0

Brain = random.choice(Thinking)
print(Brain)

userInput = input('Guess my thought')

if userInput == Brain:
    print('😂 you got my thoughts')
    Score += 1
    print(f'Your score is {Score}')
else:
    print('🥵 Try again later')