<p align="center">
 <img src="https://user-images.githubusercontent.com/60316903/127777916-9917d901-b7d9-4023-8bac-2fa4cc77cfbb.png" width="128px">
</p>
<h1 align="center">
	❯❯ unipass
</h1>

<p align="center">
Create passwords right in your terminal.
</p>

## Author

[Priya Srivastava](https://github.com/Priya730)

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

## Contribution Guidelines

Are we missing any of your favorite features, which you think you can add to it❓ We invite you to contribute to this project and make it better.
To start contributing, follow the below guidelines:

**1.** Fork [this](https://github.com/gdsc-pdeu/unipass.git) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/unipass.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd unipass
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/gdsc-pdeu/unipass.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add .
```

**10.** Commit your changes .

```
git commit -m "enter Necessary message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create a Pull Request`.

**15** Voila!! You have made a PR to the unipass . Wait for your submission to be accepted and your PR to be merged.
