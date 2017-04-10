# Notes

## Volcabulary
* markdown, is a language similar to html, it is used to describe the structure of a document.  The advantage is its synteax is shorter.
* prompt, the text before the cursor on a terminal

## Terminal Commands

* pwd. Print Working Directory
* cd. Change Directory
* whoami. Who am I? What's my user name?
* (control) L - clears screen
* tree  
* mkdir -p ..... creates directory
* mv <origin> <target>  Move a directory or a file to a specific location (target)
* man <command> Manual for any terminal command


## Character Sets

* repertoire --> the set of numeric representations of characters
* Glyph. It's the viusal representation of a characer
* ASCII -->   First standard that used a range of 0 to 255
    0 or 1 --> groups of 8 --> bytes

* UNICODE supports a wider range

cd

# Git

VCS. Versioning Control System

* Snapshot --> Commits
* Your name, your email, the date, message (what was I trying to do?), identifier(hash)
* Repository --> folder, with your code + git information (history of your code)

Github
    Terminal Commands
    * git init (intialize empty Git repository)
    * git status (Outputs the current state of you repository)
    * git add filename.ext (start tracking this file with Git)
    * git add . (adds (changes)everything in file... don't want... will add iml file with personal info)
    * git add -A (adds everything )
    * git commit -m "Git Message Here"
    * git log
    * git remote add origin URL
    * git push origin master

* Remote. A remote git repository

.idea
*.iml
**/.DS_Store

# Server paths

The roost folder of a server, usually is not the same as the root filder of the machine
For our projects the root of the server is directory where our HTML pages are. Fir instance pinnacleshtml. This folder is called the **public directory**


## Paths

*Absolute paths. It starts with a /
* Relative paths. 

emmet.io


cache

quicks mode


#Protocols

HTTP - Hyper-Text Transfer Protocol

HTTP MEssages

2 parts
* Header
* Body

2 types of messages
* Request -> Clinet-side -> Browser
* Response -> Server-side -> Web server

## HTTP verbs (methods)

GET -> Read - Download
POST -> Write - Sending data

'action' is usually a file

## Query string

key= value -> key-value pair

example:
attributes in html elments
parameters in query strings

?search_query=javascript


(code smell - Kent Beck - Agile)

## CSS

3 different ways to style an HTML 

* Inline styles. You use the style HTML attribute directly in the element
* Embedded styles. You need to create a style elment ub tge head section of your document
* External Stylesheet. You need to create a style element to link the current document to the external stylesheet

### CSS selectors

* element We use the tage name
* ID  This one is for unitqu elements on a page
* class  This one is for several elements with similar visual presentation.

### Specificity

Prioritize the rules based on the different types of selectors.

1. ID
2. class
3. element

# Psuedo-classes

They represent state on an element. For instance the states of a link (abchor tag),

* :link
* :hover
* :visited
* :active

## Properties

* Text properties
* Font preperties
    * Serif
    * Sans serif
    * Monospaced
* Background properties
* List properties


## Box model

* Everything is a box on the page
* Defines the position of the elements on a page
* Space -> Size 
    * Width, padding, border  -> Size
    * Total width = width + padding + border
    * total height = height + padding + border
* Margin


# Responsive Design

img, embed, odject, video { max-width: 100%;}

nav a, button { min-width: 48px; min-height: 48px;} (this makes it large enough to click with fingers)

<meta name = "viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/reset.css">
<link rel="styleseet" media="screen and (min-width: 480px)" href="css/over-480.css">
<link rel="styleseet" media="screen and (max-width: 480px)" href="css/less-than-480.css">

@media screen and (max-width: 480px)
    body{}
or... @media (max-width: 480px)