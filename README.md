<p align="center">
 <img src="https://user-images.githubusercontent.com/60316903/127777916-9917d901-b7d9-4023-8bac-2fa4cc77cfbb.png" width="128px">
</p>
<h1 align="center">
	❯❯ unipass
</h1>

<p align="center">
Create passwords right in your terminal.
</p>

## Usage

Install dependencies

```
npm install
```

Run file

```
node index (options)
```

To create a symlink to run "unipass" from anywhere

```
npm link

# Now you can run
unipass (options)

# To remove symlink
npm unlink
```

## Supported Options

| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
| -l    | --length <number> | length of password (default: 8) |
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |

  
## Why I built this?  
  The strongest reason why I built this is that I wanted to play with Node.js and solve the problem of thining of new passwords. Isn’t it cool that I can create a new password while I’m using the terminal! A password generator was one of the ways to get started with Node.js and hence I went ahead with it. It does not have many special features but was an interesting way to learn Node.js.✨
  
## Credits

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com. 
