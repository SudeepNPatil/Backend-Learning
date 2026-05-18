## git commands

1. To check the status of your git repository:
   ```bash
   git status
   ```
2. To add changes to the staging area:
   ```bash
    git add <file_name>
    ```
3. To commit changes with a message:
   ```bash
    git commit -m "Your commit message"
    ```
4. To push changes to a remote repository:
   ```bash
    git push origin <branch_name>
    ```
5. To pull changes from a remote repository:
   ```bash
    git pull origin <branch_name>
    ```
6. To create a new branch:
    ```bash
     git checkout -b <new_branch_name>
     ```
7. To switch to an existing branch:
    ```bash
     git checkout <branch_name>
     ```    
8. To merge a branch into the current branch:
    ```bash
     git merge <branch_name>
     ```
9. To view the commit history:
    ```bash
     git log
     ```
10. To clone a repository:
    ```bash    git clone <repository_url>
    ``` 
11. To delete a branch:
    ```bash
     git branch -d <branch_name>
     ```
12. To view the differences between commits:
    ```bash
     git diff <commit1> <commit2>
     ```
13. To stash changes temporarily:
    ```bash    git stash
    ```    
14. To apply stashed changes:
    ```bash
     git stash apply
     ```    
15. To view remote repositories:
    ```bash
     git remote -v
     ```    
16. To create a tag:
    ```bash     git tag <tag_name>
     ```    
17. To push tags to a remote repository:
    ```bash
     git push origin <tag_name>
     ```    
18. To view the current branch:
    ```bash
     git branch
     ```    
19. To view the status of all branches:
    ```bash
     git branch -a
     ```    
20. To delete a remote branch:
    ```bash
     git push origin --delete <branch_name>
     ```
21. To view the commit history in a graph format:
    ```bash     git log --graph --oneline --all
     ```
22. To revert a commit:
    ```bash     git revert <commit_hash>
     ```
23. To reset to a previous commit:
    ```bash     git reset --hard <commit_hash>
     ```
24. To view the changes in a specific file:
    ```bash     git diff <commit1> <commit2> -- <file_name>
     ```
25. To view the changes in the staging area:
    ```bash     git diff --staged
     ```
26. To view the changes in the working directory:
    ```bash     git diff
     ```
27. To view the commit history of a specific file:
    ```bash     git log -- <file_name>
     ```
28. To view the commit history of a specific branch:
    ```bash     git log <branch_name>
     ```
29. To view the commit history of a specific author:
    ```bash     git log --author="<author_name>"
     ```
30. to view the Global git configuration:
    ```bash     
        git config --global --list
     ```
31. To set the global git username:
    ```bash
     git config --global user.name "Your Name"
     ```
32. To set the global git email:
    ```bash     git config --global user.email "
        ```
33. To view the local git configuration:
    ```bash     git config --local --list
     ```
34. To set the local git username:
    ```bash     git config --local user.name "Your Name"
     ```
35. To set the local git email:
    ```bash     git config --local user.email "
        ```
36. To view the git configuration for a specific scope:
    ```bash     git config --list --show-origin
     ```
37. To remove the .git directory and all its contents:
    ```bash 
    Remove-Item -Recurse -Force .git
     ```