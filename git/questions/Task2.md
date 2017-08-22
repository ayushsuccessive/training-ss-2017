1. **What is the difference between pull and fetch?**

 On execute a pull, the changes from the remote branch will automatically be merged into current local branch where as executing a fetch command will obtain the remote changes and not have them merged into your current local branch.


2. **How do you switch between branches in local repository?**

 **"checkout"** command is used to switch between branches. It will update the files in working tree to match the version stored in the switched branch.

 `$ git checkout <branch>`


3. **How to clone a specific branch of a remote repository directly?**

 `$ git clone -b <branch> <remote_repo>`


4. **How do you undo a commit?**

 **"revert"** command is used to undo a commit by calling the revert command and passing in the commit reference.    
 `$ git revert HEAD`

5. **How to remove a tracked file from git but keep it in the local directory?**

 **"Reset"** command can be used to remove a tracked file from git but keep it in the local directory. Specify the scope of the reset command by passing in the reset mode soft.
 `$ git reset --soft HEAD~~`

6. **How do you edit a commit message -- after commit and before push?**

 We can edit a commit message by running "commit" and passing in the --amend option.
    
 `$ git commit --amend`

7. **What techniques can you use so that you don't have to input your username/password each time you push?**

 *By using the credential helper to tell Git to remember your GitHub username and password every time it talks to GitHub.
    `$ git config --global credential.helper wincred`

 *Clone GitHub repositories using SSH, then you authenticate using SSH keys instead of a username and password

8. **What is a pull request?**

 Pull requests let you tell others about changes you've pushed to a GitHub repository. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications.