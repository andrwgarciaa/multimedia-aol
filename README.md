# Getting started

Before you start working, you have to install all the codes available to your device.
If this is your first time, go ahead and follow the guide below:

1. Create a new folder in your device, this will hold the whole project.
2. Clone into both the React and Node repository
   `git clone https://github.com/andrwgarciaa/notion-101.git`
3. After the notion-101 folder is installed in your device, you can now open the folder in your IDE. I recommend using Visual Studio Code.
4. Open command prompt, and do `npm i` on the folder.
5. After everything is installed, you are ready to go.

## Get inside your own branch

Each one of us has their own development branch, you can go to your own branch by doing `git checkout origin/{your_branch_name}`, for example: `git checkout origin/andrew`.

## Basic git operations

Before working, pull the latest project version from development by doing `git pull origin development`.
After you are done with your code and ready to push it into the development branch, you have to push the code to your branch:
1. `git add {files}`
2. `git commit -m '{commit message}`
3. `git push origin {your_branch_name}`

### Note: 
1. You should NOT push to branches other than your own, especially the **main** and **development** branch.
2. Every finished updates are available on the development branch.
3. The main branch is only for production-ready code. Which I (Andrew G), will update accordingly.
