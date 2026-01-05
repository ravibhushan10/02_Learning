It is recomended that don't change (rewrite) the history of git if you already pushed the code into the github, but in your own local repo you can change the history and rewrite the commit.

<!-- ********When your code in local (reset)******!-->
If you don't pushed the code into the github,then use the revert(rewrite) the history
It has three mode :


(hard also delete the all commit between your starting and actual commit id you want to go )

1: hard (it delete the commit history and also delete from the working directory and staging area)
git reset --hard "commit id" -> where you want to point the head(you want to reach)

2: soft (delete commit history, present in working directory, present in staging area)
git reset --soft "commit id"

3: mixed (delete commit history , present in working directory, present in modify)
git reset "commit id"
git reset --mixed "commit id"  (both are same)



if you want to recover the delete code from the reset --hard use : git reflog (it shows the all commit history)

pick the commit id you want to recover then ;
git reset --hard "commit id"



<!-- ********When your code pushed to remote (revert)******!-->
If you pushed the code into the github then use this :revert
