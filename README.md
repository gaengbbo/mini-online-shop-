# Mini Online shop 

#### HTML, CSS, Javascript 연습용 프로젝트

+ javascript를 이용하여 HTML 추가 변경.
+ CSS로 원하는 형태의 사이트를 디자인.
+ eventListener을 이용하여 HTML 조작 가능.
+ json파일과 fetch를 이용하여 데이터를 받아와서 이용 가능. 

#### 구현한 기능

+ logo를 누르면 index.html로 이동
+ data.json의 데이터를 받아와서 상품 목록리스트 생성
+ 카테고리 선택시 선택된 카테고리만 표시되도록 필터 설정

#### 리펙토링 필요!

카테고리 클릭시 매번 리스트를 새로 생성하는 부분 개선 필요 ! 
리스트는 유지하고 클릭되면 attribute 추가하여 변경될 수 있도록 

```javascript
  displayItems(items.filter((item) => item[key] === value));
```

README작성 연습중입니다..^^
