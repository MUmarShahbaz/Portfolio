---
permalink: /projects/TreeCrypt
layout: project
dynamic_assets:
  files:
   - project.css
   - code-highlight.css
   - table.css

title: TreeCrypt
image: /assets/img/Projects/TC/TC.png
description: An encryption algorithm based on a random tree of nodes. A standard symmetric encryption algorithm which converts a string into a set of directions.

icons:
  - Python
repositories:
  - name: TreeCrypt
---

<a href="https://pypi.org/project/TreeCrypt/" class="button">View Package</a>

<hr class="spacer">

- Creates a random structure of nodes pointing to one another and converts them into an array.
- Maps each letter into a set of directions to a node which contains the equivalent letter inside it.
- During decryption, the directions can be used to find a node and extract the letter inside it.

## Requirements
- Runs on Python 3.10+

## Detailed Working
- A tree of nodes is generated based on a set of rules.
- The process starts with a default root node.
- Nodes are recursively and randomly attached to existing nodes, beginning from the root.
- Each node attempts to connect to up to three other nodes, making several attempts to find valid positions.
- Node and edge placement avoids any intersections with other nodes or edges. If a suitable position can't be found after several tries, the process skips that attempt and continues elsewhere, increasing randomness.
- The final structure is a non-intersecting tree where each node contains a randomly selected character from a predefined character set.
- A dictionary is built, mapping each character in the character set to a list of pointers referencing all nodes containing that character.
- To encode a message:
  - The algorithm uses the dictionary to randomly select a node corresponding to each character.
  - From each selected node, it backtracks to the root to generate a path (a sequence of directions).
  - Each character in the input is replaced by its corresponding path, with paths separated by dots "`.`".
- The special character "`|`" is used to represent whitespace.
  - Regardless of the number of spaces in the input, all contiguous whitespace is encoded as a single "`|`".

# How to use on Terminal

| Command Name   | Terminal                             |
|:---------------|:-------------------------------------|
| Help           | `python -m treecrypt -h`             |
| Version        | `python -m treecrypt -v`             |
| Key Generation | `python -m treecrypt keygen {args}`  |
| Encryption     | `python -m treecrypt encrypt {args}` |
| Decryption     | `python -m treecrypt decrypt {args}` |

## Key Generation arguments

| Argument Name | Terminal  | Type    | Value                                            | Required |
|:--------------|:---------:|:-------:|:----------------------------------------------------|:-----:|
| Key           | `-k`      | String  | File Path to output the encryption key              | True  |
| Dictionary    | `-d`      | String  | File Path to output the encryption dictionary       | True  |
| Depth         | `--depth` | Integer | Key Generator depth                                 | True  |
| Min           | `--min`   | Integer | Minimum distance between connected nodes            | False |
| Max           | `--max`   | Integer | Maximum distance between connected nodes            | False |
| Charset       | `-c`      | String  | File path to a python list of the charset           | False |
| Live Print    | `-l`      | Flag    | no_Value, Prints the number of nodes generated live | False |

## Encryption/Decryption arguments

| Argument Name | Terminal | Type   | Value                                           | Required     |
|:--------------|:--------:|:------:|:------------------------------------------------|:------------:|
| Key           | `-k`     | String | File Path to the encryption key                 | True         |
| Dictionary    | `-d`     | String | File Path to the encryption dictionary          | True         |
| Input         | `-i`     | String | Input plain text to encrypt/decrypt             | `-i` or `-f` |
| File          | `-f`     | String | File path to plain text file to encrypt/decrypt | `-i` or `-f` |
| Output        | `-o`     | String | File path to store results                      | False        |

# How to use in Code

## 0. Install
Install it by simply running
```shell
pip install treecrypt
```

## 1. Import

Inside your python code add the line
```python
from treecrypt import KeyMaker, Crypter
```

This will import the key generator and the crypt-maker as classes and these can be used to do the encryption

## 2. Create a key
If you already have the key and dictionary, then skip to step 4

First of all you need a charset.

The charset used must be a list of characters which are exactly one letter and are eligible to be a python dictionary's  key

```python
customCharset = ['A' , 'B', 'C', ....]
myKeyMaker = KeyMaker(customCharset)
```

If you don't give any parameters then the following is used:
```python
DefaultCharset = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", ',', '.', '?', '/'
]
```

Then generate the key using

```python
myKeyMaker.GenerateKey(20, 10, 5)

# Note the format of the parameters
def GenerateKey(self, Depth, MaxDistance, MinDistance = 0):

# You can ignore the last parameter since it has a default value
```

The parameters are the depth of the tree and the maximum & minimum distance between connected nodes.

## 3. Export the key
Now you can export the key as a .txt file

```python
myKeyMaker.Export("KEY1.txt", "DICT1.txt")

# Note the format of the parameters
def Export(self, keyFile="key.txt", dictFile="dict.txt"):
# You can ignore the parameters as they have defaults
```

You can also get them directly inside the code using
```python
Key = myKeyMaker.GetKey()
Dictionary = myKeyMaker.Dictionary()
```

The parameters are the filenames of the exported key and dictionary.

## 4. Create a crypter and Import the key
Using the Crypter class, create an object that will encrypt and decrypt text using the previously exported key. If you already have a key then you can skip to over here.

Remember that a text can only be decrypted using the same key with which it was encrypted.

```python
myCrypter = Crypter()
myCrypter.Import("KEY1.txt", "DICT1.txt")

# Make sure that you are using the correct file names for import

def Import(self, keyFile="key.txt", dictFile="dict.txt"):
# Import uses same format as Export of KeyMaker
# You can ignore the parameters if the inputs have the default file names
```

Additionally, if you only have the key and no dictionary then just do:

```python
import ast
with open('KEY1.txt') as f:
  # Use ast literal eval
  myCrypter.SetKey(ast.literal_eval(f.readline()))
```

## 5. Start Crypting!!
Now you can encrypt and decrypt as you wish. However make sure the input doesn't contain anything outside of the custom charset used by the KeyMaker

```python
cipher = myCrypter.Encrypt("TreeCrypt is AMAZING")
doubleCheck = myCrypter.Decrypt(cipher)

print(cipher)
print(doubleCheck)
```

<br class="big-spacer">