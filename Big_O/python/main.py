# import matplotlib.pyplot as plt
# import numpy as np

# # Generate data
# n = np.linspace(1, 100, 400)
# constant = np.ones_like(n)

# # Plot
# plt.figure(figsize=(10, 6))
# plt.plot(n, constant, label='O(1)', color='blue')
# plt.xlabel('Input Size (n)')
# plt.ylabel('Operations')
# plt.title('Constant Time Complexity - O(1)')
# plt.legend()
# plt.grid(True)

# # Save the image
# plt.savefig('/Users/jamesdouglas/Desktop/Coding-folder/Algos/Big_O/images/01.png')
# plt.show()

# import matplotlib.pyplot as plt
# import numpy as np

# # Generate data
# n = np.linspace(1, 100, 400)
# logarithmic = np.log(n)

# # Plot
# plt.figure(figsize=(10, 6))
# plt.plot(n, logarithmic, label='O(log n)', color='blue')
# plt.xlabel('Input Size (n)')
# plt.ylabel('Operations')
# plt.title('Logarithmic Time Complexity - O(log n)')
# plt.legend()
# plt.grid(True)

# # Save the image
# plt.savefig('/Users/jamesdouglas/Desktop/Coding-folder/Algos/Big_O/images/Ologn.png')
# plt.show()

# import matplotlib.pyplot as plt
# import numpy as np

# # Generate data
# n = np.linspace(1, 100, 400)
# linear = n

# # Plot
# plt.figure(figsize=(10, 6))
# plt.plot(n, linear, label='O(n)', color='green')
# plt.xlabel('Input Size (n)')
# plt.ylabel('Operations')
# plt.title('Linear Time Complexity - O(n)')
# plt.legend()
# plt.grid(True)

# # Save the image
# plt.savefig('/Users/jamesdouglas/Desktop/Coding-folder/Algos/Big_O/images/On.png')
# plt.show()

# import matplotlib.pyplot as plt
# import numpy as np

# # Generate data
# n = np.linspace(1, 100, 400)
# y = n * np.log(n)

# # Plot
# plt.figure(figsize=(10, 6))
# plt.plot(n, y, label='O(n log n)', color='blue')
# plt.xlabel('Input Size (n)')
# plt.ylabel('Operations')
# plt.title('Linearithmic Time Complexity - O(n log n)')
# plt.legend()
# plt.grid(True)

# # Save the image
# plt.savefig('/Users/jamesdouglas/Desktop/Coding-folder/Algos/Big_O/images/Onlogn.png')
# plt.show()

# import matplotlib.pyplot as plt
# import numpy as np

# # Generate data
# n = np.linspace(1, 100, 400)
# quadratic = n ** 2

# # Plot
# plt.figure(figsize=(10, 6))
# plt.plot(n, quadratic, label='O(n^2)', color='red')
# plt.xlabel('Input Size (n)')
# plt.ylabel('Operations')
# plt.title('Quadratic Time Complexity - O(n^2)')
# plt.legend()
# plt.grid(True)

# # Save the image
# plt.savefig('/Users/jamesdouglas/Desktop/Coding-folder/Algos/Big_O/images/On2.png')
# plt.show()

import matplotlib.pyplot as plt
import numpy as np
import math

# Generate data
n = np.linspace(1, 10, 10)  # Limited range to avoid extremely large values
factorial = np.array([math.factorial(int(i)) for i in n])

# Plot
plt.figure(figsize=(10, 6))
plt.plot(n, factorial, label='O(n!)', color='orange')
plt.xlabel('Input Size (n)')
plt.ylabel('Operations')
plt.title('Factorial Time Complexity - O(n!)')
plt.legend()
plt.grid(True)
plt.yscale('log')  # Use log scale for factorial to fit in the plot

# Save the image
plt.savefig('/Users/jamesdouglas/Desktop/Coding-folder/Algos/Big_O/images/On!.png')
plt.show()
