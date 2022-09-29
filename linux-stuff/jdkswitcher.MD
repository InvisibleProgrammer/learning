# install different java versions

```bash
brew install openjdk@8
brew install openjdk@17
```

# initialize: create symlink to java17

```bash
ln -s /home/linuxbrew/.linuxbrew/opt/openjdk@8 /home/invisibleprogrammer/programs/javahome
```

# add aliases to `.bashrc`

```bash
alias java8='unlink /home/invisibleprogrammer/programs/javahome; ln -s /home/linuxbrew/.linuxbrew/opt/openjdk@8 /home/invisibleprogrammer/programs/javahome'

alias java17='unlink /home/invisibleprogrammer/programs/javahome; ln -s /home/linuxbrew/.linuxbrew/opt/openjdk@17 /home/invisibleprogrammer/programs/javahome'
```

# set **JAVA_HOME** and **PATH** environment variables to use the newly created symlink

```bash
export JAVA_HOME="/home/invisibleprogrammer/programs/javahome"
export PATH=$JAVA_HOME:$PATH
```

# use it and do not worry about java versions

```bash
invisibleprogrammer@desktop:~/work/learning$ java8
invisibleprogrammer@desktop:~/work/learning$ java -version
openjdk version "1.8.0_345"
OpenJDK Runtime Environment (build 1.8.0_345-linuxbre_2022_08_04_18_08-b00)
OpenJDK 64-Bit Server VM (build 25.345-b00, mixed mode)
invisibleprogrammer@desktop:~/work/learning$ java17
invisibleprogrammer@desktop:~/work/learning$ java -version
openjdk version "17.0.4.1" 2022-08-12
OpenJDK Runtime Environment Homebrew (build 17.0.4.1+1)
OpenJDK 64-Bit Server VM Homebrew (build 17.0.4.1+1, mixed mode, sharing)

```
