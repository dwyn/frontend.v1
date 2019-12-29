---
title: Are Ruby and JavaScript Related?
date: "2019-08-01T00:00:02.000Z"
description: Mayhaps. Let's discuss...
---

```javascript
  function Person(name, age){
    this.name = name;
    this.age = age;
    this.happy_birthday = function(){
      age++;
      console.log("Happy birthday " + name + ", you are " + age + " years old!");
    }
  }

they = new Person("Danni", 25)
they.happy_birthday
```

```ruby
  class Person
    def initialize(name, age)
      @name = name
      @age = age
    end

    def happy_birthday
      @age += 1
      puts "Happy birthday #{@name}, you are #{@age} years old!"
  end

  they = Person.new("Sam", 25)
  they.happy_birthday
```