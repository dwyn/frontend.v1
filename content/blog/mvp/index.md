---
title: MVP
date: "2019-08-01T00:00:02.000Z"
description: The other MVP!
---

Howdy neighbor! What do you think of when you hear / read  M.V.P.? If you a beginner developer, and think Most Valuable Player that would be totally reasonable. However, I am referring to [Minimum Viable Product]().

> _A minimum viable product (MVP) is a product with just enough features to satisfy early customers and provide feedback for future product development._</span>

I've wanted to create a cool blog engine for some time now. Long before I understood the concept of a MVP, I concocted a pretty grandiose app. Initially, I wanted:

* An [Elixir | Phoenix](https://phoenixframework.org/) RESTful API
* Leverage Spotify's API to share info about what I am jamming to
* Beautiful React [frontend](https://whatis.techtarget.com/definition/front-end)
* I repeat a b-e-a-uuutiful React frontend
* Deployed on [Digital Ocean](https://www.digitalocean.com/) (because I was / am upset with [AWS](https://aws.amazon.com/) for one reason or another)

The only problem is I hadn't the faintest idea how Elixir or Phoenix works. After completing the course at The Flatiron School, I was confident I can learn just about anything. As I started learning the fundamentals of Elixir | Phoenix framework I eventually stopped to assess the [cost benefit analysis](https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis) and realized it would be quite a while before I am able to deploy the app I want... 


![Hmmm...](./confused.gif)
<br/>
Okay fine I'll build a Rails API - I can have that up and running in no time. So now my MVP will be:
* [Rails](https://rubygems.org/gems/rails) API
* Beautiful React frontend
* Deployed on Digital Ocean

<br/>
Seems simple enough, no? My revised plan included frameworks and technologies that I am familiar with. However, I quickly realized my limitations in the realm of UX / UI. I can talk / code ReactJS on Rails all day and night. But I have no idea how to make it look beautiful. I didn't have the bandwidth to learn, to really deep dive on the core tenets of UX / UI discipline. (There were other things I was more interested in learning at the moment. Like Elixir | Phoenix)
<br>
<br/>

So now what? (Enter [GatsbyJS](https://www.gatsbyjs.org/)!) 
<br/>
Oh haayyy, Gatsby! Nice to meet ya!

![Cheers Gatsby](hi_gatsby.gif)


Gatsby has also been on my list of technology to check out for some time. In attempts to build this site with a beautiful interface, Gatsby quickly moved to the top of my list of technologies to learn. With Gatsby comes [GraphQL](https://www.howtographql.com/) (and I appreciate Gatsby for that). Now I am needing to learn GraphQL so as to query my Rails API. With a little more digging it only made sense to implement GraphQL in my Rails API as well. (GraphQL was also on my list of things to learn, so what better time than now? amirite!?)

<br>

My revised MVP:

* Gatsby frontend
* Lean [Rails](https://rubygems.org/gems/rails) [API](https://en.wikipedia.org/wiki/Application_programming_interface)
* GraphQL configured in the client app
* GraphQL configured in the API
* Boring Gatsby template front end
* Frontend app on one server
* Rails app on seperate server (Still Digital Ocean)
(Lil &nbsp;[JAMStack](https://jamstack.org/) action happening here... Anyone?? Anyone!?)

So now, as far as I can tell, the biggest hurdles are understanding the Gatsby framework and GraphQL well enough to query my API. As I press on, I learn so. damn. much about Gatsby & GraphQL & the tools that have been built to complitment both. So much so that my thinking of a fullstack application completely shifted! It's best I break it down in two parts, backend and frontend.

Backend:
<br> <span style="color: red;">- Rails API configured with GraphQL </span>
<br> <span style="color: green;">+ Replaced with GraphCMS </span>

For all intents and purposes I built my Rails app to be a [Content Management System](https://en.wikipedia.org/wiki/Content_management_system). In my research I came across [GraphCMS](https://graphcms.com/), at which point I had to stop and ask myself if it even made sense to continue on with my Rails app knowing this little nugget exists. The answer ultimately was no, it didn't make sense to continue with my Rails app. I had a lot of fun building it and will revisit that repo from time to time to see how its doing, but it was just best to move forward with GraphCMS.
<br>

For the front end, I am still using Gatsby which has been a treat to work with the more I am aware of whats happening in its ecosystem.

Frontend:
<br> <span style="color: green;"> + GatsbyJS starter template. </span> _(that I will customize overtime, or completely switch when the time is right)_


If you are viewing this app, as of August 2019 until further notice, you are looking at ONLY the client app, not yet configured with GraphCMS, and a very barebones version of the beautiful user experiece I once lusted over. Next steps are to connect this app to GraphCMS; when I do so nothing will change with _your_ experience. _I will come back and edit this post to update when I make changes to this app, as well as write seperate blog posts detailing releases and changes._ As I learn and make changes to the client app, I will do my best to write about those specific changes and my Gatsby journey at large.

<br>

If I can leave you with anything, _especially if you are a beginner dev like me_, it would be to focus on your Minimum Viable Product. There is nothing wrong with getting a product shipped that works and has the core functionality of your ideal app. From there you iterate to the app you really want. Learn how to walk before running; learn how to ride a bicycle, before riding a motorcycle.

<br><br><br>