#git安装

 mac上主要使用Homebrew进行安装，Homebrew是Mac OS下的一种软件包管理器，能在mac上方便的安装或卸载软件，是以源码包编译的方式安装Git的。

1）首先安装Homebrew，Homebrew是用ruby语言开发的

```
 ruby -e \ "$(curl -fsSL https://gist.github.com/raw/323731/install_homebrew.rb)" 
```

2）执行以下命令安装git

```
$ brew install git 
```

3）配置用户名和邮箱（以后与git交互时用到），这里如果使用了--global选项，那么该命令只需要运行一次，之后无论在该系统上做任何事情，git都会使用那些信息，当你想针对特定项目使用不同的用户名称或者邮件地址时，可以在那个项目目录下运行没有--global的命令来配置。

```
git config --global user.name "your_name"  
git config --global user.email "your_email@gmail.com"
```

