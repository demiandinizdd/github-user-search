Challenge chapter 03-24 github-user-search
==========================================

Statement of this challenge
---------------------------

Create a \ *** new \ *** ReactJS project, containing a search
user interface integrating with ** Github ** API.
This challenge involves some of the main concepts passed until now:

-   Create the layout following a Figma prototype

-   Get and screen Github's information from an API

-   Loaders https://skeletonreact.com

-   Forms

-   Routes

```create-react-app```, using the * TypeScript * template:

```npx create-react-app github-user-search --template typescript```

-------------------------------

Figma guide link: https://www.figma.com/file/NzeGEIb5oSAGtbu2BfvhDS/BDS-Cap3

-------------------------------

The Github API for the challenge is: https://api.github.com/users/USERNAME
where \ "** USERNAME ** \", must be the user name of the developer.

-------------------------------

The \ "Loaders \" components have already been created and are available at
https://github.com/devsuperior/dscatalog-resources/tree/master/frontend-web/cap03/desafio

-------------------------------

Format the date of \"* Member since * \"
that exists in the layout is an extra challenge. Once it has not been shown during 
the classes yet, this formatting ** is not mandatory. ** So, any delivery containing
the standard value returned by the Github API is valid (i.e., * 2013-10-19T16: 11: 46Z) *.

Despite not being mandatory, Devsuperior recommends the developer find out how to do that
and also using the super simple library to do this task: https://github.com/iamkun/dayjs

This challenge is not very complex, so DevSuperior does not recommend the ** Bootstrap **.
The CSS in Figma design is enough to complete the challenge. It is a great chance for the
developer to practice CSS skills \ "pure \" without the help of Bootstrap.

App Routes:
-----------

1.  \"/\" - Home app

2.  \"/search\" - User profile search

How DevSuperior will evaluate this challenge?
---------------------------------------------

### 1) Project execution

The teacher should be able to make a simple clone of the project in the
Github, install the dependencies (NPM or YARN) and run the application.

### 2) Browser tests

The teacher will do a simple test on the application, which will be to navigate
to the search user route, and then type a user name in the box search, and check
that the information is appearing correctly.

It is valid to mention that the application does not have to be \ "* pixel-perfect * \" (size
in pixel of all elements exactly to Figma). On the other hand, it must be the closest as possible.
Font colors and sizes, for example, should be exactly those of Figma.