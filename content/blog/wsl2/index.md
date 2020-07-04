---
title: WSL2 && Learn Local Environment for Windows 10
date: "2020-06-05T00:00:00.000Z"
description: Configure WSL2; Code on Windows 10
---


Howdy neighbor. Have you heard the news about WSL2? As of June 2020, WSL is available to the general public. I figured this would be a good opportunity to share my finding with you, the general public. But more specifically, Flatiron Students using WSL. 

Table of Contents:
Updating and Configuring Windows 10

## Updating and Configuring Windows 10

1. Make sure to run: [Windows Update Assistant](https://www.microsoft.com/en-us/software-download/windows10ISO). When the update is complete, your system build should be greater than 1900. Please verify this is true before continuing.

<br>

2. Search for the `Command Prompt` application. <br>
> ***<span style="color: red">Make sure to right click on Command Prompt app and choose the &nbsp; `run as administrator` &nbsp; option.</span>***

<br>

3. Next, in Command Prompt run:
```sh
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

This will enable the Windows Subsystem Linux features for Windows 10 _with out_ having to restart your operating system. 

<br>

4. Then run: 
```sh
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
This will enable the Virtual Machine Platform features for Windows 10 _with out_ having to restart your operating system. 

<br>

5. Next up, head to [this website](https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel#download-the-linux-kernel-update-package) and download the necessary msi package. (You should download a file named: `wsl_update_x64.msi` or something similar.)

<br>

6. Let's head over to the Microsoft Store and install Ubuntu 20.04 LTS -- [This link might help](https://www.microsoft.com/en-us/p/ubuntu-2004-lts/9n6svws3rx71?activetab=pivot:overviewtab). Once Ubuntu is downloaded and installed, find and open the Ubuntu app and go through the initial setup -- Choosing a username, and choosing a password. 

<br>

7. Now, back in Command Prompt, run:

```sh
wsl --set-default-version 2
```

<br>

8. Finally, run: 
```sh
wsl.exe --set-version Ubuntu 2
```
<br>

Annnddd That's it for WSL2 you _should_ be good to go. Let's move on to our Learn Local Environment installation.

<br>

## Learn Local Environment Set Up


8. Once everything is set up, we can start setting up our Ubuntu system! Start off by
   running the following to download our dependencies:

    ```sh
    sudo apt-get update  
    ```

Then run the following command to install a few important packages. 

    ```sh
    sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev libpq-dev libgdbm-dev libncurses5-dev automake libtool bison gnupg postgresql postgresql-contrib
    ```

9. Next, we'll install the Ruby Version Manager, also known as RVM. To start, we
   need to get some security keys. Run the following command to do so:

    ```sh
    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
    ```

    > **Note:** If you receive an error after running the command above, try to
    > continue on with the next set of commands. If you are unable to install RVM,
    > visit [RVM's Security page][] for additional options for getting these
    > security keys.

    [RVM's Security page]: http://rvm.io/rvm/security

    Once you have the security keys, run the following lines individually:

    ```sh
    sudo apt-add-repository -y ppa:rael-gc/rvm

    sudo apt-get update

    sudo apt-get install rvm
    ```

10. Next, to set up a ruby version most compatible with Learn.co labs, we want to
   download ruby 2.6.1 and set it as our default:

    ```sh
    rvm install "ruby-2.6.1"

    rvm use 2.6.1 --default
    ```

11. Let's install the bundler gem:  

    ```sh
    gem install bundler
    ```

12. And set up git:

    ```sh
    git config --global color.ui true
    ```

    For the next few commands, make sure to input your specific information:

    ```sh
    git config --global user.name "your_name"
    ```

    ```sh
    git config --global user.email "your_email@example.com"
    ```

    You can either communicate with your remote repositories via HTTPS or SSH.
    If you want to use SSH (which means you will not have to authenticate with
    your GitHub username and password before each push) -
    [follow these instructions.][new ssh key]

    [new ssh key]: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

13. Now we can get set up with the learn-co gem. This will allow you to use
    commands like `learn`, `learn submit`, and `learn open`.

    ```sh
    gem install learn-co
    ```

    - In your browser, navigate to learn.co/your_github_username
    - At the bottom of the page, you should see text that says `OAuth Token:`
      followed by a token. Copy the token, and then go back to your WSL terminal
    - Type:  

        ```sh
        learn whoami
        ```

    - Paste in your token  

    You should now be fully authenticated with learn.

14. Now let's get Node Version Manager, NodeJS, and Rails installed so we can
    make a bunch of stuff!

    - First, install NVM:

      ```sh
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
      ```

    - Then, reload bash profile into current session:

      ```sh
      source ~/.bashrc
      ```

    - Next, install NodeJS:

      ```sh
      nvm install node
      ```

    - Now, Ruby on Rails:

      ```sh
      gem install rails
      ```

## Choose your programming editor: VSCode

You can use any editor you want, but I am going to be walking through setting up
VSCode.

15. [Download VSCode here][VS Code]. Choose the Windows download, not the Linux
    download. Any required Linux downloads will be done via the Ubuntu terminal,
    and everything else should be downloaded for your Windows OS.

16. To configure your Ubuntu terminal to be available in VSCode:

    - open up VSCode
    - open the Command Palette via `F1` or `Ctrl`+`Shift`+`p`
    - begin typing the following: `Terminal: Select Default Shell`  until you
      see it. Select that option.

    ![command palette](https://curriculum-content.s3.amazonaws.com/setup-instructions/default-shell.png)  

    - Once you select it, a few options will pop up. You want to select WSL

    ![WSL Terminal](https://curriculum-content.s3.amazonaws.com/setup-instructions/wsl-bash-selection.png)

17. Now, you can use your Ubuntu terminal in VSCode. Select "New Terminal" in
    the "Terminal" drop-down, or type `Ctrl`+`Shift`+` in order to use it!

<br>

18. Additional User Settings *(OPTIONAL)*:

- You can add a few things to your User Settings to customize and improve your
  programming experience. Most importantly, we can make VSCode treat .erb files
  like .html files, allowing us to use all the same shortcuts and get the same
  syntax highlighting.

- To open up user settings, again open up the Command Palette using `F1` or
  `Ctr`+`Shift`+`p` and type `Preferences: Open Settings (JSON)`

    ![Preferences - settings](https://curriculum-content.s3.amazonaws.com/setup-instructions/settings-json.png)

- You will see a screen like this:

    ![Preferences - settings](https://curriculum-content.s3.amazonaws.com/setup-instructions/user-settings.png)

- to have your erb files treated like html, add the following to your user
  settings (circled above):

    ```sh
    "emmet.includeLanguages": {
      "javascript": "javascriptreact",
      "ruby": "ruby",
      "erb": "html",
      "html": "html",
      "css": "css"
    }
    ```



## Updating Learn Config
19. Update your .learn-config

- Open the WSL terminal. You can access the terminal through VS Code now, or you
  can open a separate terminal by typing `wsl` into the Window Search Bar.
  Alternatively, you can also press the `Windows` and `R` keys (for run), and
  entering `wsl`.

- Travel to your Linux home directory by typing `cd`, you can change your
  `.learn-config` by typing:

    ```sh
    nano .learn-config
    ```

- and customizing where you want the `learn open` command to save labs, and
  setting your editor to VSCode. Here's what it should look like:

    ```sh
    ---
    :learn_directory: "/mnt/c/users/YOUR-WINDOWS-USERNAME/dev/flatiron/labs"
    :editor: code
    ```

- You save a file you have modified in `nano` by following the directions at the
  bottom of the screen: click `Ctrl`+`X` and then `y` and then `Enter` to save
  your changes.

- If you feel uncomfortable with these commands, check out the basic Linux
  commands link below in the resources.

## Important Knowledge: Basic Use

Your terminal is actually accessing an Ubuntu Virtual Machine which is running
inside of your Windows OS. If you ever `cd` in your terminal, you will be
sent to the 'user home' of your Linux VM. That is also the default location you
will be in when you open your Ubuntu app. You actually want to do all of your
business inside of your normal Windows file space, not your Linux VM file space.
So, you will need to know how to navigate in your terminal from your Ubuntu file
system to your Windows file system. This is pretty simple if you understand how
the system is set up, so let's go over that quickly.

To allow you to access the functionality of a Linux machine, Windows stores the
Ubuntu OS and file system inside of its own file system. You should NEVER access
your Ubuntu files via your Windows machine. What you SHOULD do is save
everything you are working on in your normal Windows filespace, and access that
via your Ubuntu terminal. So, how do you do that? Well, from the Ubuntu's point
of view, it is just a normal Linux machine, but Microsoft has made a pathway
between the Linux VM and your Windows OS via the `/mnt` directory in your
Ubuntu's root.

Here is a quick visual of what the first few levels of any Linux filesystem look
like:  

![linux file system](https://curriculum-content.s3.amazonaws.com/setup-instructions/linux_fs.png)

As you can see, the `mnt` directory is made for other filesystems, so that is
where Microsoft connected your Linux to your Windows machine:

![linux file system](https://curriculum-content.s3.amazonaws.com/setup-instructions/linux_fs_path.png)

So, you can get there from your starting point by typing:

```sh
cd /mnt/c/users/your_windows_username
```

or

```sh
cd ../../mnt/c/users/your_windows_username
```

Remember, put all of your stuff in your windows directories! That way, you have
access to it via your Linux Terminal or your Windows OS, and your VSCode editor
can open to the correct location when you use

```sh
code .
```

(if you are in your Linux file system, VSCode will open, but not to the right spot).

## Adding A Flatiron Customization To Your Terminal

Start out by making a backup for your `.bashrc`

```sh
mv .bashrc .bashrc.bak
```

We will want a tool for converting Windows ending to Unix endings for our new
`.bashrc`

```sh
sudo apt-get install dos2unix
```

download the new `.bashrc`

```sh
curl -R "https://raw.githubusercontent.com/Enoch2k2/flatiron-wsl-bashrc/master/.bashrc" >> $HOME/.bashrc
```

We'll use our converter to convert our bashrc to use the right unix endings:

```sh
dos2unix .bashrc
```

## Set up a directory for all of your labs

You'll notice that we set up our `.learn-config` file earlier with a path
destination of `/mnt/c/users/<your_windows_username>/dev/flatiron/labs`. The
`.bashrc` file we just downloaded gives us a really nice way to access that
folder quickly by just typing in `labs` when we pull up our WSL terminal (or
anytime you want to access that folder - it doesn't matter what directory you
are currently in when you type it). In order for this to work, we need to make
sure that these directories exist. To do this, begin by navigating to your
`windows home` directory:

```sh
cd /mnt/c/users/your_windows_username
```

Now, let's make the appropriate files. Run these one at a time, and do it
without copying and pasting. Remember the basic bash commands: `cd` changes
directories to whatever folder you type in and `mkdir` creates a new directory
which will be a subdirectory of the current directory location of your terminal.

```sh
mkdir dev
cd dev
mkdir flatiron
cd flatiron
mkdir labs
```

Now you have the directories you need, and you should have seen yourself
navigating down your new file tree as you made each new directory and then
`cd`'d into it.

Now, `learn open` should work seamlessly by adding your most current lab to the
`labs` directory we just made.

Also, you should be able to run the command

```sh
labs
```

at any time in your terminal and you will be taken to your `labs`  directory.
Give it a try!

> **Note:** If the `labs` command is not working, try running `learn directory`.
> You will be prompted to re-enter the location where you would like your labs
> to be stored. Do not use the provided default. Instead, the path should be:
>
> ```sh
> /mnt/c/users/<your_windows_username>/dev/flatiron/labs
> ```

<br>
<br>
<br>
<hr>

## FAQ

If you get the error: `Windows Subsystem for Linux has no installed
distributions. Distributions can be installed by visiting the Windows Store:
https://aka.ms/wslstore Press any key to continue...`

1. Search for 'Services' in your Windows search bar, open it up  

    ![find services ](https://curriculum-content.s3.amazonaws.com/setup-instructions/find_services.png)

2. Scroll down to the `L` section, and find `LxssManager`. If it is running,
   right click and `Restart` it. If it is not running, right click it and
   `Start` it.  

    ![Lxss Manager](https://curriculum-content.s3.amazonaws.com/setup-instructions/lxss_manager.png)

[You can check out the github issue here](https://github.com/Microsoft/WSL/issues/2576)

---

## Resources

[Microsoft Documentation: Windows Subsystem for Linux]( https://docs.microsoft.com/en-us/windows/wsl/install-win10)  
[Setting up a SSH Key with GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)  
[Basic Linux Commands](https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners)

[VS Code]: https://code.visualstudio.com/download
[WSL Installation Guide]: https://docs.microsoft.com/en-us/windows/wsl/install-win10
[Hack font]: https://sourcefoundry.org/hack/
[Download PostgreSQL for Windows]: https://www.postgresql.org/download/windows/