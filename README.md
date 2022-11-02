# UploadButton && UploadIcon
업로드 버튼에 사용할 수 있는 업로드 버튼과 업로드 아이콘입니다. Components 폴더에서 UploadButton, Icon 파일로 버튼과 아이콘을 수정할 수 있습니다. ExampleButtons와 SampleButtons, IconList는 페이지 예시입니다.

## Building
```
$ npm install
$ npm start
```
## 예제 사진

<img style="width:50%" src="https://user-images.githubusercontent.com/18400730/199567472-4624a2a6-3c59-4d00-8923-0bc6b8efb446.png"/>



## 사용 방법
```
    <UploadButton state="idle"></UploadButton>
    <UploadButton state="pending"></UploadButton>
    <UploadButton state="resolved"></UploadButton>
    <UploadButton state="rejected"></UploadButton>
    <UploadButton state="disabled"></UploadButton>
    <UploadButton state="rejected">글자가 많은 경우</UploadButton>
```

```
const defaultButton = {
  idle: "업로드",
  pending: "업로드 중",
  resolved: "완료",
  rejected: "실패",
  disabled: "업로드",
};
```
예시 사진 </br>

<img style="width:25%" src="https://user-images.githubusercontent.com/18400730/199567587-12cc34f5-a5a0-46d1-90b4-51e23b22c48c.png"/>

### UploadButton 컴포넌트 사이즈
UploadButton 컴포넌트는 글자 숫자가 일정이상 많아지면 넓이가 넓어지고, 그 이하는 모두 같은 넓이를 가지고 있습니다.
</br>

### 컴포넌트 상태 변경


![GOMCAM 20221103_0306360619](https://user-images.githubusercontent.com/18400730/199567834-60b847af-b083-4257-9d40-50cd0bf4e371.gif)

```
      <div onClick={upload} style={style}>
        <UploadButton state={state}></UploadButton>
      </div>
```
UploadButton에 state를 변경시키는 것으로 스타일, 글자, 아이콘을 바꿀 수 있습니다.

```
    <Icon src="idle" />
    <Icon src="pending" />
    <Icon src="resolved" />
    <Icon src="rejected" />
    <Icon src="disabled" />
```
