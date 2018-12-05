CLONE A REPO:

git clone https://gitlab.com/raakx.eln/my-boilerplate-project1.git
git remote -v
git fetch origin feature-1
git branch
git commit
git push origin master

git branch -a ->List all branches
git checkout feature-1 ->To switch to a particular branch (will create a branch if it doesnt exist)
git branch ->List the branch


SYNCING A FORK:

https://github.hpe.com/vrakesh/entmon-service -> x commits behind global-it-entmon:master.

To get vrakesh (fork) in sync with global-it-entmon:

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (master)
$ git remote -v
global-it-entmon        https://github.hpe.com/global-it-entmon/entmon-service.git (fetch)
global-it-entmon        https://github.hpe.com/global-it-entmon/entmon-service.git (push)
origin  https://github.hpe.com/vrakesh/entmon-service.git (fetch)
origin  https://github.hpe.com/vrakesh/entmon-service.git (push)

	NOTE: If the upstream repository is not added, follow the below steps:
	Command Syntax: git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
	ex: git remote add global-it-entmon https://github.hpe.com/global-it-entmon/entmon-service.git
		git remote add upstream https://github.hpe.com/global-it-entmon/entmon-service.git
	ex: git remote add upstream https://github.hpe.com/global-it-entmon/entmon-wrapper.git

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (master)
$ git fetch global-it-entmon master
remote: Counting objects: 2, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 2 (delta 0), reused 2 (delta 0), pack-reused 0
Unpacking objects: 100% (2/2), done.
From https://github.hpe.com/global-it-entmon/entmon-service
 * branch            master     -> FETCH_HEAD
   1a948cb..8c18d49  master     -> global-it-entmon/master
	
		NOTE:  	git fetch global-it-entmon master => if master is the branch you want to checkout from.
		ex:		git fetch upstream development 
				git fetch upstream dev_engg
git fetch upstream development

Merge changes on the LOCAL HARD DISK -> on your computer
vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (master)
$ git merge global-it-entmon/master
Updating b926db8..8c18d49
Fast-forward

	NOTE: if source branch is development, then use this: git merge upstream/development 
	git merge upstream/dev_engg
	
Push changes from LOCAL laptop (hard disk) to the FORK in GITHUB 
vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (master)
$ git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To https://github.hpe.com/vrakesh/entmon-service.git
   b926db8..8c18d49  master -> master
git push origin development
git push origin dev_engg

https://github.hpe.com/vrakesh/entmon-service 
This branch is even with global-it-entmon:master.

================================================================

CREATING A BRANCH

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (master)
$ git checkout -b develop
Switched to a new branch 'develop'

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (develop)
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (master)
$ git checkout develop
Switched to branch 'develop'

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (develop)
$

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (develop)
$ git remote add develop https://github.hpe.com/vrakesh/entmon-service.git

vrakesh@WIBDGMKACR MINGW64 /c/OFFICIAL/ENTMON/GITHUB/vrakesh/entmon-service (develop)
$ git remote -v
develop https://github.hpe.com/vrakesh/entmon-service.git (fetch)
develop https://github.hpe.com/vrakesh/entmon-service.git (push)
global-it-entmon        https://github.hpe.com/global-it-entmon/entmon-service.git (fetch)
global-it-entmon        https://github.hpe.com/global-it-entmon/entmon-service.git (push)
origin  https://github.hpe.com/vrakesh/entmon-service.git (fetch)
origin  https://github.hpe.com/vrakesh/entmon-service.git (push)



===================================================================
Notes:
	version: 2
	updated the notes for master and development branch .
	
	
	
	
	raakx.
