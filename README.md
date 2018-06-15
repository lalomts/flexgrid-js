# flexgrid-js

`flexgrid-js` is customizable implementation of [flexboxgrid.css](https://github.com/evgenyrodionov/flexboxgrid2) built using the features of [jss](https://github.com/cssinjs/jss), providing the functionality of the 12 column grid with a simple API. 


## Install 

`flexgrid-js` is available as an [npm package](https://www.npmjs.com/package/flexgrid-js)
#### npm 
```
npm install @lalomts/flexgrid-js
````

#### yarn 
````
yarn add @lalomts/flexgrid-js
````


## Usage 
### Configure the grid 
The grid uses the [flexboxgrid.css](https://github.com/evgenyrodionov/flexboxgrid2) attributes by default. In order to override them, you need to pass an object as argument to the `.grid()` method. 

```jsx

const gridConfig = { 
  gutterWidth: 16, 
  outerMargin:8 
}

<div className={ FlexGrid.grid(gridConfig)}>  </div> 
````

### Adding rows 
Rows can also have several attributes that can be customized in relation to the viewport's width. To configure a row, you pass an object to the `.col()` method. 

```jsx 

const rowConfig = {
  align: { 
    xs: ['bottom'], 
    lg: ['center']
  }
}

<div className={ FlexGrid.row(rowConfig)}> </div>
```

### Adding columns 
Just as with rows, columns' attributes need to be configured with an object value passed to the `.col()`method. There's no need to specify a value for each viewport size, just add the needed viewport values to the desired attribure keys. 

```jsx
const colConfig = { 
  size: {
    xs: 9, 
    md: 3, 
    lg: 6
   }, 
  reverse: {
    xs: true
  }, 
  hidden: {
    lg: true
  }
}

<div className={ FlexGrid.col(colConfig)}> </div>
````

### A complete example
```jsx 
import FlexGrid from '@lalomts/flexgrid-js'

class Home extends Component {
  render() {

  const columnConfig = { 
    size: { 
      xs: 9,
      md: 3, 
      lg: 6}, 
    offset: {
      xs: 4, 
      xl: 2
    }
  }
  
  return (
    <div className={ FlexGrid.grid({ gutterWidth: 8, xl: 1400 })}> 
      <div className={FlexGrid.row({ reverse: true })}>
          <div className={FlexGrid.col( columnConfig )}>
              //Your content 
          </div>
      </div>
    </div>
  )
 }
}
````



## Attributes 
The attributes and possible values for each element of the grid: 

### Grid
<details> 
  <summary> The attributes to customize the <strong>grid</strong> element </summary>
</br>

| Attribute | Description | Values | Example |
| --- | --- | --- | --- |
| **gutterWidth** | The space between each of the grid's columns | Number | `gutterWidth: 16`|
| **outerMargin** | The margin (left and right) of the container | Number | `outerMargin: 32`|
| **xs** | The min screen width the x small viewport size | Number | ` xs: 0` |
| **sm** | The min screen width the small viewport size | Number | ` sm: 578` |
| **md** | The min screen width the medium viewport size | Number | ` xs: 768` |
| **lg** | The min screen width the large viewport size | Number | ` lg: 992` |
| **xl** | The min screen width the x large viewport size | Number | ` xl: 1250` |
</details> 

### Row
<details> 
  <summary> The attributes to configure the <strong>row</strong> element </summary>
</br>

| Attribute | Description | Values | Example |
| --- | --- | --- | --- |
| **align** | How the elements should be aligned inside a row for a specific viewport size | Array: start, center, end, top, bottom, middle | `align: {xs: ['bottom', 'center', xl: ['start']}`|
| **dist** | How the elements should be distributed inside a row for a specific viewport size | around, between| `dist: { xs: 'around' }`|
| **reverse** | Reverse the order of the elements inside a row | Bool | `reverse: true `|
</details> 


### Column
<details> 
  <summary> The attributes to configure the <strong>column</strong> element </summary>
</br>

| Attribute | Description | Values | Example |
| --- | --- | --- | --- |
| **size** | How many of the grid columns should be used at a specific viewport size| Number: 1-12 | `size: {sm: 6, xl: 8} `|
| **offset** | The offset of a column at a specific viewport size| Number: 1-11 | `offset: {sm: 2, xl: 4} `|
| **reorder** | Forces a column to appear at a different order for a specific viewport size| first, last, initialOrder | `reorder: {sm: 'first', xl: 'initialOrder' } `|
| **hidden** | Hides a column at a specific viewport size | Bool | `hidden: true `|
| **reverse** | Reverse the order of the elements inside a column | Bool | `reverse: true `|
</details> 

## License 
[MIT](LICENSE.md)
