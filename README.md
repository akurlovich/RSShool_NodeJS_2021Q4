# Ciphering CLI tool

## Downloading and installing dependencies

Сopy repository:

`git clone https://github.com/akurlovich/RSShool_NodeJS_2021Q4.git`

Install dependencies:

`npm i`

## Using

CLI tool accept 3 options:

1. * **"-c"**: Required!!! config for ciphers Config is a string with pattern **{XY(-)}n**, where:
> X is a cipher mark:

> C is for Caesar cipher (with shift 1)

> A is for Atbash cipher

> R is for ROT-8 cipher

> Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)

1 is for encoding
0 is for decoding

2. * **"-i"**: a path to input file
3. * **"-o"**: a path to output file

To close the application in the mode of working with a string, you must press **ctrl + c** or in MacOS **control + c**

### Usage example 

```
node app -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

input.txt 

This is secret. Message about "_" symbol!

output.txt 

Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!

```

```
node app -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"

input.txt 
This is secret. Message about "_" symbol!

output.txt 
Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!

```
```
node app -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"

input.txt 

This is secret. Message about "_" symbol!

output.txt 

Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!

```
```
node app -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"

input.txt 

This is secret. Message about "_" symbol!

output.txt 

This is secret. Message about "_" symbol!

```