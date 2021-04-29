##Question
Not sure if this is a bug or personal error, the useParams  unable to read nested url params? When I had my routes set up as below the useParams call returned an empty content

## Version
**development**

## Test Case
 ````
 <Routes>
     <Route path='/' element={<Home />} />
     <Route path='Create' element={<Create />} />
     <Route path=':id' element={<BlogDetail />} />
   </Routes>
 ````
## Feasible steps
````
 <Routes>
    <Route path='/' element={<Home />} />
    <Route path='Create' element={<Create />} />
    <Route path='/blogs/:id' element={<BlogDetail />} />
  </Routes>
````
**adress**
[https://github.com/Maureen-Ye/react-demo](url)

## Actual Behavior
unable get id and display content
