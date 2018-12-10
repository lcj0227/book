# git使用

1、相关命令

```
/*新建仓库*/
$ git init 
$ git clone [url]         //克隆一个项目

/*配置*/
$ git config --list       //列出所有Git当时能够找到的配置
$ git config <key>        //检查git的某一项配置
$ git config [--global] user.name "[name]"            //设置提交代码的用户信息
$ git config [--global] user.email "[email address]"

/*分支管理*/
$ git branch xxx          //在master分支下创建一个新的分支，但依然停留在当前分支
$ git checkout xxx        //切换到新的分支
$ git checkout -b xxx     //新建一个分支，并切换到该分支下
$ git merge  xxx           //合并分支
$ git branch              //查看所有本地分支
$ git branch -a           //查看所有本地和远程分支
$ git branch -r           //查看远程分支列表
$ git push origin xxx     //向远程提交本地分支
$ git push origin:xxx     //删除远程分支
$ git branch xxx -d       //删除本地分支 -D 强制删除,切换到其他分支删除

/*远程同步*/
$ git fetch [remote]      //下载远程仓库的所有变动
$ git pull [remote] xxx   //取回远程仓库的变化，并与本地分支合并
$ git push [remote] xxx   //上传本地指定分支到远程仓库
$ git push [remote] --force    //强行推送当前分支到远程仓库，即使有冲突

/*查看相关信息*/
$ git status              //查看相关修改内容，可以随时掌握工作区的状态
$ git help <verb>         //git命令的使用手册
$ git diff                //比较工作区和暂存区的差别
$ git diff --cached       //比较的是暂存区和版本库的差别
$ git diff HEAD           //工作区和版本库的差别
$ git log                 //显示从最近到最远的提交日志
$ git reflog              //查看命令历史，以便确定回到未来哪个版本

/*撤销修改*/
$ git checkout -- file    //丢弃工作区的修改，就是把文件在工作区的修改全部撤销，让该文件回到最近一次git commit或git add时的状态。
$ git reset HEAD file     //可以把暂存区的修改撤销掉，重新放回到工作区
$ git reset --hard HEAD^  //将当前版本回退到上一版本，撤销的commit中所包含的更改被冲掉
$ git reset --soft        //回退到某个版本，只回退了commit的信息，如果还要提交，直接commit即可

/*删除文件*/
$ git rm   
$ git commit              //从版本库中删除文件
$ git remote -v           //查看远程库的信息，会显示可以抓取和推送的origin的地址
$ git push origin master  //把该分支上的所有本地提交推送到远程库

```

2、创建本地git仓库并与远程库关联

1）创建一个版本库，也就是仓库，选择一个合适的地方，创建一个空目录，进入该目录下

2）使用git init命令把这个仓库变成GIt可以管理的仓库，这个时候当前目录下面会出现一个.git目录，这个目录是用来跟踪管理版本库的。

3）我们新增一个文件，把它放到git仓库，git add命令实际上就是把要提交的所有修改都放在暂存区内（stage），然后执行commit就可以把暂存区的所有修改都提交到分支。

```
$ mkdir learngit
$ cd learngit
$ git init
$ git add 文件名
$ git commit -m "提交说明"     //-m 后面输入的的是本次的提交说明
```

4）添加远程库

- 在本地创建了一个Git仓库后，又想在Github上创建一个git仓库，并且让这两个仓库进行远程同步，需要登录Github，然后创建一个新的仓库，可以从这个仓库克隆一个新的仓库（使用git clone命令，git 支持多种协议包括https，但通过ssh支持的原生git协议速度最快），也可以把一个已有的本地仓库与之关联，然后把本地仓库的内容推送到GitHub仓库。
- 现在使用“$ git remote add origin git@github.com:xxx/xxx.git”关联远程库；
- 然后，可以把本地库中的所有内容推送到远程库上“$ git push -u origin master”。

​     此后，每次本地提交后，只要有必要，就可以使用命令$ git push origin master推送最新的修改。

