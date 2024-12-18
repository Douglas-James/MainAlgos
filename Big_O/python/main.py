import numpy as np
import math

import matplotlib.pyplot as plt

# Generate data
n = np.linspace(1, 100, 400)
constant = np.ones_like(n)
logarithmic = np.log(n)
linear = n
linearithmic = n * np.log(n)
quadratic = n ** 2
n_exp = np.linspace(1, 20, 400)  # Limited range to avoid extremely large values
exponential = 2 ** n_exp
n_fact = np.linspace(1, 10, 10)  # Limited range to avoid extremely large values
factorial = np.array([math.factorial(int(i)) for i in n_fact])

# Plot
plt.figure(figsize=(12, 8))

plt.plot(n, constant, label='O(1)', color='blue')
plt.plot(n, logarithmic, label='O(log n)', color='orange')
plt.plot(n, linear, label='O(n)', color='green')
plt.plot(n, linearithmic, label='O(n log n)', color='red')
plt.plot(n, quadratic, label='O(n^2)', color='purple')
plt.plot(n_exp, exponential, label='O(2^n)', color='brown')
plt.plot(n_fact, factorial, label='O(n!)', color='pink')

plt.xlabel('Input Size (n)')
plt.ylabel('Operations')
plt.title('Time Complexities')
plt.legend()
plt.grid(True)
plt.yscale('log')  # Use log scale to fit all plots

# Save the image
plt.savefig('/Users/jamesdouglas/Desktop/Coding-folder/Algos/Big_O/images/all_complexities.png')
plt.show()
