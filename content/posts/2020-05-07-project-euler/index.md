---
title: Project Euler (5/254)
author: Lucas Marandat
date: 2020-05-07T00:00:00.000Z
excerpt: This all my submissions and explanations
  to solve challenging programming problems.
hero: images/hero.png
---

## 🚀 Introduction

### What "Project Euler" is?

> « Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.
>
> The motivation for starting Project Euler, and its continuation, is to provide a platform for the inquiring mind to delve into unfamiliar areas and learn new concepts in a fun and recreational context. »

_From [ProjectEuler.net](https://projecteuler.net/)_

### Why did you do that!?

I've learned coding by solving algorithmic problems and I always like to solve them. Furthermore, by solving them, I'm increasing my algorithmic skills and enhancing my mathematical knowledge. So "Project Euler" seems to me to be a good challenge!

## 📖 Summary:

[1️⃣ Multiples of 3 and 5](#1️⃣-multiples-of-3-and-5)

## 🧩 Lets go!

I've not done all of them, refer to the title to see my progress `.../254`.
For some of them, I helped myself from the internet.

<a name="abcde"></a>

## 1️⃣ Multiples of 3 and 5

#### Instruction ([here](https://www.hackerrank.com/contests/projecteuler/challenges/euler001))

> If we list all the natural numbers below **10** that are multiples of **3** or **5**, we get **3, 5, 6** and **9**. The sum of these multiples is **23**.
>
> Find the sum of all the multiples of **3** or **5** below.

#### My solution ([Run on repl.it](https://repl.it/@lucasmrdt/PE1-or-Multiples-of-3-and-5))

<br />

```cpp
#include <iostream>

using namespace std;
using ll = long long;

ll arthmetic_sum(int n, int q) {
  return q * (n/q * (n/q+1ll)) / 2ll;
}

ll sum_of_multiples_under_n(int n) {
  return arthmetic_sum(n, 3) + arthmetic_sum(n, 5) - arthmetic_sum(n, 15);
}

int main() {
  int t;
  cin >> t;
  for (int i = 0; i < t; i++) {
      long n;
      cin >> n;
      cout << sum_of_multiples_under_n(n) << endl;
  }
  return 0;
}
```

#### Explanation

<br />

Arithmetic sum formula (from [wikipedia](https://en.wikipedia.org/wiki/Summation)):

$a^2 + b^2 = c^2$

$$
a^2 + b^2 = c^2
$$

## 📚 Resources

[List of challenges](https://www.hackerrank.com/contests/projecteuler/challenges)

## ✍🏻 Something wrong or a suggestion? Suggest a change [here](https://github.com/lucasmrdt/personal-blog/blob/master/content/posts/2020-05-07-project-euler/index.md)
