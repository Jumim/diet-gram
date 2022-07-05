![header](https://capsule-render.vercel.app/api?type=soft&color=a0cef2&height=140&section=header&text=DIETGRAM&fontSize=40&fontColor=f5f9ff&animation=twinkling)

🔗 [https://react-diet-gram.web.app/](https://react-diet-gram.web.app/)

---

### Description

하루 동안 먹은 음식들의 칼로리와 영양성분을 다이어리 형식으로 입력 및 관리할 수 있는 웹 사이트

---

### 🔥 Tech Stack

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=fff"/>  <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=fff"/>

---

### Installation

```
$ git clone https://github.com/Jumim/diet-gram.git
```

---

### Running the Project

```
$ yarn start
```

---

### Directory

```
📁src
├─📁components
│  │  index.tsx
│  │  
│  ├─📁atoms
│  │  ├─📁Button
│  │  │      Button.scss
│  │  │      Button.stories.tsx
│  │  │      Button.tsx
│  │  │      
│  │  ├─📁Close
│  │  │      Close.scss
│  │  │      Close.stories.tsx
│  │  │      Close.tsx
│  │  │      
│  │  ├─📁Feed
│  │  │      Feed.scss
│  │  │      Feed.stories.tsx
│  │  │      Feed.tsx
│  │  │      
│  │  ├─📁Icon
│  │  │      Icon.scss
│  │  │      Icon.stories.tsx
│  │  │      Icon.tsx
│  │  │      
│  │  ├─📁Input
│  │  │      Input.scss
│  │  │      Input.stories.tsx
│  │  │      Input.tsx
│  │  │      
│  │  ├─📁Label
│  │  │      Label.scss
│  │  │      Label.stories.tsx
│  │  │      Label.tsx
│  │  │      
│  │  ├─📁Link
│  │  │      Link.scss
│  │  │      Link.stories.tsx
│  │  │      Link.tsx
│  │  │      
│  │  ├─📁Loading
│  │  │      Loading.scss
│  │  │      Loading.stories.tsx
│  │  │      Loading.tsx
│  │  │      
│  │  ├─📁Modal
│  │  │      Modal.scss
│  │  │      Modal.stories.tsx
│  │  │      Modal.tsx
│  │  │      
│  │  ├─📁Text
│  │  │      Text.scss
│  │  │      Text.stories.tsx
│  │  │      Text.tsx
│  │  │      
│  │  ├─📁Title
│  │  │      Title.scss
│  │  │      Title.stories.tsx
│  │  │      Title.tsx
│  │  │      
│  │  └─📁Wrapper
│  │          Wrapper.scss
│  │          Wrapper.tsx
│  │          
│  ├─📁molecules
│  │  ├─📁FoodList
│  │  │      FoodList.scss
│  │  │      FoodList.stories.tsx
│  │  │      FoodList.tsx
│  │  │      
│  │  ├─📁Form
│  │  │      Form.scss
│  │  │      Form.stories.tsx
│  │  │      Form.tsx
│  │  │      
│  │  ├─📁IconList
│  │  │      IconList.scss
│  │  │      IconList.stories.tsx
│  │  │      IconList.tsx
│  │  │      
│  │  ├─📁InputArea
│  │  │      InputArea.scss
│  │  │      InputArea.stories.tsx
│  │  │      InputArea.tsx
│  │  │      
│  │  ├─📁MyResponsivePie
│  │  │      MyResponsivePie.scss
│  │  │      MyResponsivePie.stories.tsx
│  │  │      MyResponsivePie.tsx
│  │  │      
│  │  └─📁SelectArea
│  │          SelectArea.scss
│  │          SelectArea.stories.tsx
│  │          SelectArea.tsx
│  │          
│  ├─📁organisms
│  │  ├─📁CalorieInfo
│  │  │      CalorieInfo.scss
│  │  │      CalorieInfo.stories.tsx
│  │  │      CalorieInfo.tsx
│  │  │      
│  │  ├─📁DiaryList
│  │  │      DiaryList.scss
│  │  │      DiaryList.stories.tsx
│  │  │      DiaryList.tsx
│  │  │      
│  │  ├─📁FoodModal
│  │  │      FoodModal.scss
│  │  │      FoodModal.stories.tsx
│  │  │      FoodModal.tsx
│  │  │      
│  │  ├─📁Header
│  │  │      Header.scss
│  │  │      Header.stories.tsx
│  │  │      Header.tsx
│  │  │      
│  │  ├─📁JoinForm
│  │  │      JoinForm.scss
│  │  │      JoinForm.stories.tsx
│  │  │      JoinForm.tsx
│  │  │      
│  │  ├─📁LoginForm
│  │  │      LoginForm.scss
│  │  │      LoginForm.stories.tsx
│  │  │      LoginForm.tsx
│  │  │      
│  │  ├─📁NotFound
│  │  │      NotFound.scss
│  │  │      NotFound.stories.tsx
│  │  │      NotFound.tsx
│  │  │      
│  │  ├─📁UserModal
│  │  │      UserModal.scss
│  │  │      UserModal.stories.tsx
│  │  │      UserModal.tsx
│  │  │      
│  │  └─📁WriteForm
│  │          WriteForm.stories.tsx
│  │          WriteForm.tsx
│  │          
│  ├─📁pages
│  │  ├─📁EditPage
│  │  │      EditPage.tsx
│  │  │      
│  │  ├─📁JoinPage
│  │  │      JoinPage.stories.tsx
│  │  │      JoinPage.tsx
│  │  │      
│  │  ├─📁LoginPage
│  │  │      LoginPage.stories.tsx
│  │  │      LoginPage.tsx
│  │  │      
│  │  ├─📁MainPage
│  │  │      MainPage.stories.tsx
│  │  │      MainPage.tsx
│  │  │      
│  │  ├─📁NotFoundPage
│  │  │      NotFoundPage.tsx
│  │  │      
│  │  └─📁WritePage
│  │          WritePage.stories.tsx
│  │          WritePage.tsx
│  │          
│  └─📁templetes
│      ├─📁DefaultTemplate
│      │      DefaultTemplate.scss
│      │      DefaultTemplate.stories.tsx
│      │      DefaultTemplate.tsx
│      │      
│      └─📁MainTemplate
│              MainTemplate.scss
│              MainTemplate.stories.tsx
│              MainTemplate.tsx
│              
├─📁config
│      auth.tsx
│      diary.tsx
│      firebase.tsx
│      foodList.tsx
│      user.tsx
│      
├─📁containers
│      FoodModalContainer.tsx
│      index.tsx
│      JoinFormContainer.tsx
│      LoginFormContainer.tsx
│      MainContainer.tsx
│      MainHeaderContainer.tsx
│      UserModalContainer.tsx
│      WriteFormContainer.tsx
│      WriteHeaderContainer.tsx
│      
├─📁store
│  │  index.tsx
│  │  
│  └─📁modules
│          auth.tsx
│          date.tsx
│          diary.tsx
│          foodList.tsx
│          foodModal.tsx
│          index.tsx
│          rootReducer.tsx
│          user.tsx
│          userModal.tsx
│          
└─📁types
        index.tsx
│
│  App.scss
│  App.tsx
│  index.scss
│  index.tsx
│  _variable.scss
```
