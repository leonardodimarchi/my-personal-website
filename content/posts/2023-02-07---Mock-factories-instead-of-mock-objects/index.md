---
title: Mock Factories instead of Mock objects
date: "2023-02-07T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/mock-factories-instead-of-mock-objects"
category: "Design patterns"
tags:
  - "Typescript"
  - "Unit Testing"
description: "In this article, i'll share my experiences using Mock Factories instead of Mock Objects."
---

These last months i've being practicing Clean architecture and TDD at some of my personal projects ([like this one](https://github.com/leonardodimarchi/massage-therapy-api)), and with that i've learned some new concepts and patterns.

Over the course of the projects, i was using mock objects at my unit tests.

```ts
it('should create the user', () => {
  // Arrange
  const mockedUser: UserEntity = {
    name: "mocked name";
    email: "mocked email";
    phone: "mocked phone";
    roles: [Roles.ADMIN];
  }
  
  // Act
  this.usecase.call(mockedUser)
  
  // Assert
})
```

With the time, those projects was getting bigger, and depending on the layer that i was working on, i need to use the same mock over and over again. So i separated the mocks in different files to use those mocks when i needed to.

```ts
// test/mocks/user/user_entity.mock.ts

export const userMock: UserEntity = {
  name: "mocked name";
  email: "mocked email";
  phone: "mocked phone";
  roles: [Roles.ADMIN];
}

```

If needed, i override some properties just by destructuring the mock and adding different values:

```ts
// usecases/register/register.usecase.spec.ts

it('should do something with an ADMIN user', () => {
  // Arrange
  
  // Act
  this.usecase.call(userMock)
  
  // Assert
})

it('should do something with a NORMAL user', () => {
  // Arrange
  
  // Act
  this.usecase.call({ ...userMock, roles: [Roles.NORMAL] })
  
  // Assert
})
```

That worked just fine for a time, until i decided to try [Rich Entities](https://stackoverflow.com/questions/23314330/rich-vs-anemic-domain-model) with inner props using [Value Objects](https://martinfowler.com/bliki/ValueObject.html), so destructuring wouldn't work this time.

```ts
// domain/entities/user.entity.ts

export interface UserEntityProps = {
  name: Name;
  email: Email;
  phone: Phone;
  roles: Roles[]
}

export class UserEntity {
  constructor(props: UserEntityProps) {
    this.props = props;
  }

  private props: UserEntityProps;

  // Getters and Setters
}
```

Example of how i've tried to adapt for the first time, exporting the props object:

```ts
// test/mocks/user/user_entity_props.mock.ts

export const userPropsMock: UserEntityProps = {
  name: "mocked name";
  email: "mocked email";
  phone: "mocked phone";
  roles: [Roles.ADMIN];
}

```

```ts
// usecases/register/register.usecase.spec.ts

it('should do something with an ADMIN user', () => {
  // Arrange
  
  // Act
  this.usecase.call(
    new UserEntity(userPropsMock)
  )
  
  // Assert
})

it('should do something with a NORMAL user', () => {
  // Arrange
  
  // Act
  this.usecase.call(
    new UserEntity({ 
      ...userPropsMock, 
      roles: [Roles.NORMAL]
    })
  )
  
  // Assert
})
```

I wasn't liking it so much, so i tried to find a new solution. That's when i watched an event at [Rocketseat](https://www.rocketseat.com.br/) where they introduced the concept of mock factories.


```ts
// test/factories/user/user_entity.factory.ts

type Override = Partial<UserEntityProps>;

export const makeUserMock(
  override: Override = {}
): UserEntity {
  return new UserEntity({
    name: new Name("mocked name");
    email: new Email("mocked email");
    phone: new Phone("mocked phone");
    roles: [Roles.ADMIN];
    ...override,
  });
}
```

```ts
// usecases/register/register.usecase.spec.ts

it('should do something with an ADMIN user', () => {
  // Arrange
  
  // Act
  this.usecase.call(makeUserMock())
  
  // Assert
})

it('should do something with a NORMAL user', () => {
  // Arrange
  
  // Act
  this.usecase.call(
    makeUserMock({
      roles: [Roles.NORMAL]
    })
  )
  
  // Assert
})
```

With this, i got a scalable and reusable solution when new fields are added =)
