# Password Checker

A web page to check the strength of your password using regex in javascript.


## Files Description

### Logo
My Custom made logo as trademark for website.

### Styling
Background is made using online linear gradient generator and edited as per need. All designing is written in styles.css file.

### Algorithm
Simple input check with points stable is used to count the strength of password. Different regex pattern are used to count points for digits, symbols, length, lowercase and uppercase alphabets which count max to total of 5 points.

For each valid match gets 1 point otherwise 0. At last all points are added then as per total its strength is stated.

#### Usage Syntax
```Javascript
if(total>=5)
    "password is STRONG"

if(total<5 && total>2)
    "GOOD but Can be Better!"

if(total<3)
    "WEAK"
```
