---
title: My algorithm implementations of Stanford course
author: Lucas Marandat
date: 2020-05-12T00:00:00.000Z
excerpt: Projects done during the Stanford course "Divide and Conquer, Sorting and Searching, and Randomized Algorithms".
tag: coursera
hero: images/hero.1.png
---

## 🚀 Introduction

I've followed the Stanford algorithm course given by **Tim Roughgarden** on [Coursera](https://www.coursera.org/) named _"Divide and Conquer, Sorting and Searching, and Randomized Algorithms"_ ([here](https://www.coursera.org/learn/algorithms-divide-conquer#syllabus)). On this post, you'll see _all my algorithms implementations_ linked to the course.

## 🧩 Algorithms

<details>
<summary>
<b>Karatsuba Multiplication</b>
</summary>

<br />

### Explanation

Based on [Karatsuba](https://en.wikipedia.org/wiki/Karatsuba_algorithm) notice :

Let $x$ and $y$ be represented as $n$-digit strings. For any positive integer $m \lt n$, one can write the two given numbers as :

$$
x=x_{1}*10^{m}+x_{0}
\\y=y_{1}*10^{m}+y_{0}
$$

**Example**, for $x = 123$ and $y = 54 = 054$ we have $n = 3$ (as we have 3 digits). Take $m = \frac{3}{2} \approx 2$, we can write both as follow :

$$
x = 1_{(x_1)} * 10^2 + 23_{(x_0)}
\\y = 0_{(y_1)} * 10^2 + 54_{(y_0)}
$$

<br />

[Karatsuba](https://fr.wikipedia.org/wiki/Anatolii_Alexevich_Karatsuba) notices that :

$$
\begin{array}{c}
x * y &=& (x_{1}10^{m}+x_{0})(y_{1}10^{m}+y_{0})
\\x * y &=& x_{1}y_110^{2m} + (x_1y_0 + x_0y_1)10^m + x_0y_0
\\
\end{array}
$$

<br />

Let's write :

- $z_0=x_1y_1$
- $z_1=x_0y_0$
- $z_2=x_1y_0 + x_0y_1 = (x_1+x_0)(y_1+y_0) - z_0 - z_1$

We can easily see that initial product ($x*y$) has been reduced to a **smaller products** :

- $x_1y_1$
- $x_0y_0$
- $(x_1+x_0)(y_1+y_0)$

So, this algorithm is based on the known paradigm **"divide and conquer"** where an initial problem is broken down into smaller sub-problems.

### Implementation

To implement this algorithm, I'll treat the **numbers as a string**. For instance: $123$ will be handled as `'123'`. The implementation has been made in **python** because it allows more readable code. First, we define some **utils functions**:

<details>
<summary>
<i>normalize_number(x, y)</i>
</summary>

<br />

This function will be used to **resize the input numbers** to ensure both of them have the **same size**.

```python
def normalize_number(x, y):
  """Resize x or y by padding-left '0' to get the same size to both.

  Args:
    x (str): number 1
    y (str): number 2

  Returns:
    str, str: the padded numbers

  Example:
    >>> normalize_number('12', '1234')
    ('0012', '1234')
    >>> normalize_number('1', '1234')
    ('0001', '1234')
  """
  n = max(len(x), len(y))
  return '0'*(n-len(x)) + x, '0'*(n-len(y)) + y
```

</details>

<details>
<summary>
<i>is_valid_number(nb)</i>
</summary>

<br />

This function will be used to **check** if the provided number is **valid (positive integer only)**.

```python

def is_valid_number(nb):
  """Check if the provided number is a valid number.

  Args:
    nb (str): number

  Returns:
    bool: True if the provided number is valid else False

  Example:
    >>> is_valid_number('123')
    True
    >>> is_valid_number('zfef')
    False
  """
  for digit in nb:
    if ord(digit) < ord('0') or ord(digit) > ord('9'):
      return False
  return True
```

</details>

<details>
<summary>
<i>trim_left_number(nb)</i>
</summary>

<br />

This function will be used to **remove** useless **zeros** of the provided number.

```python
def trim_left_number(nb):
  """Trim left zeros of the provided number.

  Args:
    nb (str | char[]) number

  Returns:
    str | char[]: trimmed nuber

  Example:
    >>> trim_left_number('000120')
    '120'
    >>> trim_left_number('0000')
    '0'
    >>> trim_left_number(['0', '1'])
    ['1']
  """
  i = 0
  while i < len(nb) - 1 and nb[i] == '0':
    i += 1
  return nb[i:]
```

</details>

<details>
<summary>
<i>pow10(x, n)</i>
</summary>

<br />

This function will be used to implement **10 power** on string numbers.

```python
def pow10(x, n):
  """String implementation of x*10^n.

  Args:
    x (str): the number
    n (number): the power of 10

  Returns:
    str

  Example:
    >>> pow10('2', 2)
    '200'
  """
  return x+'0'*n
```

</details>

<details>
<summary>
<i>char_to_int(c)</i>
</summary>

<br />

This function will be used to **transform char** value **into a integer**.

```python
def char_to_int(c):
  """Cast character c into integer

  Args:
    c (char): the character

  Returns:
    int

  Example:
    >>> char_to_int('1')
    1
    >>> char_to_int('9')
    9
  """
  return ord(c) - ord('0')
```

</details>

<details>
<summary>
<i>add_carry(number, start_index=None)</i>
</summary>

<br />

This function will be used to **add carry** of the provided number at **start_index** (by default to the unit).

```python
def add_carry(number, start_index=None):
  """Add carry.

  Args:
    number (str): The number
    start_index (int, optional): the starting index (reversed order)

  Returns:
    str: the carried number

  Example:
    >>> add_carry('99')
    '100'
    >>> add_carry('990', 1)
    '1000'
    >>> add_carry('999', 2)
    '1099'
  """
  n = len(number)
  i = n - start_index if start_index else n # reverse order (from right to left)
  result = ['0'] + list(number)
  while result[i] == '9':
    result[i] = '0'
    i -= 1
  result[i] = str(char_to_int(result[i]) + 1)
  return ''.join(trim_left_number(result))
```

</details>

<details>
<summary>
<i>split_at(x, index)</i>
</summary>

<br />

This function will be used to **split a number** at the provided index.

```python
def split_at(x, index):
  """Split the number at index into 2 pieces.

  Args:
    x (str): the number
    index (int): index to split (x in [0, len(x)[)

  Return:
    str, str

  Example:
    >>> split_at('123', 1)
    ('1', '23')
  """
  return x[:index], x[index:]
```

</details>

Then, we must define an important function `add` to handle **additions between string numbers**.

```python
def add(*numbers):
  """Addition all numbers.

  Args:
    x_1 (str): number 1
    ...
    x_k (str): number k

  Returns:
    str: result

  Example:
    >>> add('33', '7', '1')
    '41'
    >>> add('999', '1', '22')
    '1022'
  """
  n = max(map(len, numbers))
  result = ['0'] * n
  for number in numbers:
    for i, digit in enumerate(number[::-1]):
      # as the number is reversed index 0 correspond to n-1
      index = n-i-1
      # add two units
      res = char_to_int(result[index]) + char_to_int(digit)
      # get the unit (eg. 18 % 10 = 8)
      result[index] = str(res % 10)
      if res >= 10:
        # if has ten, add carry at i+1 (from the right) to the result
        result = list(add_carry(result, i+1))
        n = len(result)
  return ''.join(trim_left_number(result))
```

I hope the code is self-explained, we just **add digits** from **right to left** (this is why we enumerate `numbers[::-1]`) and handle any carry by calling `add_carry` each time the result of digit addition $res \ge 10$.

To finish, we have all the necessaries functions to write our **Karatsuba Algorithm implementation**:

```python
def karatsuba(x, y):
  """Multiply x*y with the karatsuba algorithm.

  Args:
    x (str): number 1
    y (str): number 2

  Returns:
    str: x*y result

  Example:
    >>> karatsuba('2', '24')
    '48'
    >>> karatsuba('123456789', '2345')
    '289506170205'
  """
  if len(x) != len(y):
    x, y = normalize_number(x, y)

  if len(x) == 1:
    return str(char_to_int(x) * char_to_int(y))

  n = len(x)
  m = math.floor(n / 2) # nb digits / 2

  # eg. x=123, n=3, m=1, x=12*10+3, we split at index n-m=3-1=2.
  x0, x1 = split_at(x, n-m)
  y0, y1 = split_at(y, n-m)

  z0 = karatsuba(x0, y0)
  z1 = karatsuba(x1, y1)
  z2 = add(karatsuba(x1, y0), karatsuba(x0, y1)) # @todo reduce this into one karatsuba call: (x0+x1)(y0+y1) - z0 - z1
  return add(pow10(z0, 2*m), pow10(z2, m), z1)
```

### Demo

<iframe height="400px" width="100%" src="https://repl.it/@lucasmrdt/karatsuba-algorithm?lite=true&outputonly=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

</details>

## 📚 Resources

- [Course (free)](https://www.coursera.org/learn/algorithms-divide-conquer#syllabus)

## ✍🏻 Something wrong or a suggestion? Suggest a change [here](https://github.com/lucasmrdt/personal-blog/blob/master/content/posts/2020-05-12-Algorithms/index.md)
