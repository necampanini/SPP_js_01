- Goto the SPP_js_01 repository on GitHub
- copy the URL to clone
- Open Visual Studio 2013
- In the Start Page, under "Start" you should see "Open from Source Control"
- click, should open Team Explorer
- Under Local Git Repositories, STOP
- Go to your local Projects directory from Windows Explorer
- make a new folder named 'SPP_js_01'
*** Side note: Visual Studio cloning does not clone the containing folder
### only the contents, we have to make an empty folder for it!
- paste in the URL under "Local Git Repositories"
- MAKE SURE the directory path under it is pointing at the new empty folder
- Clone.

- From the Start Page, click Open Project
- Navigate to the new folder. 
- Inside the freshly cloned repo, there should be a .sln file.
- This is the file visual studio uses to keep track of an entire solution
- Visual studio uses a lot of files besides the actual content to keep track of stuff
- It pays off in larger scale projects.
- Now you have the Project!

** grab a beer to congratulate yourself

- before you make any changes, reopen team explorer
- click branches
- click 'New Branch'
- name it your name, or something that identifies you
- the name you put will be the name of the branch.
- the dropdown under it is asking from what branch you want to branch this off
- you should see your new branch under "Unpublished Branches"
- right click it, click "Publish Branch"
- new branch should be on github!

- when you make changes, go back to Team Explorer
- click changes 
- This is Visual Studios Git Integration
- it isn't the prettiest, but its efficient and has strong integration
- you will see the files you modified under either included changes or excluded
- right click the files to move them to either list. Think of this as 'git add fileName.html'
- enter a message, and commit!