By default : It is master branch, you have to rename as Main(for global use)

1: git diff -> see what changes you done
2: git reset first.html -> remove from the staging area
3: git show "commit ID" -> History of that commit
4: git log --file_name  -> to check all commit of a prticular file

<!-- ************ Branching ********** -->
1: git branch -> it shows the all branch with HEAD is pointing to which branch
2: git branch "branch-name"  -> for creating the branch
3: git checkout "branch-name" -> switch to any branch


both checkout and switch are same
-> git switch "branch-name"

<!-- ************* -->
5: git switch -c "branch-name" -> At a time create branch and move to that branch
6: git checkout -b "branch-name" -> same like switch


firstly move to branch where you want to merge then type that branch name you want to merge, then delete the second branch (so history is clean)
7: git merge "branch-name"
8: git branch -d "name"

