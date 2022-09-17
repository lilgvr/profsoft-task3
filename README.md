# ProfSoft Education Center task №3

## Task to work with JS *Map* build-in object

---

### Write JS function working with JS array

> #### Arguments:
>- **productId**: number

> #### Returns:
> - Map containing days of week and products count
>
> Example:
>```js
>{
>"Monday" : 3,
>"Tuesday" : 0,
>"Wednesday" : 0,
>"Thursday" : 0,
>"Friday" : 0,
>"Saturday" : 4,
>"Sunday" : 4
>}

---

> #### Data:
> ```js
> [
>   {
>       orderId: 554,
>        creationDate: "2017-03-25T10:35:20", // Saturday
>        orderLines: [
>            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.00}
>        ]
>    },
>    {
>        orderId: 555,
>        creationDate: "2017-03-25T11:24:20", // Saturday
>        orderLines: [
>            {productId: 9872, name: 'Pencil', quantity: 1, unitPrice: 3.00},
>            {productId: 1746, name: 'Eraser', quantity: 1, unitPrice: 1.00}
>        ]
>    },
>    {
>        orderId: 453,
>        creationDate: "2017-03-27T14:53:12", // Monday
>        orderLines: [
>            {productId: 5723, name: 'Pen', quantity: 4, unitPrice: 4.22},
>            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.12},
>            {productId: 3433, name: 'Erasers Set', quantity: 1, unitPrice: 6.15}
>        ]
>    },
>    {
>        orderId: 431,
>        creationDate: "2017-03-20T12:15:02", // Monday
>        orderLines: [
>            {productId: 5723, name: 'Pen', quantity: 7, unitPrice: 4.22},
>            {productId: 3433, name: 'Erasers Set', quantity: 2, unitPrice: 6.15}
>        ]
>    },
>    {
>        orderId: 690,
>        creationDate: "2017-03-26T11:14:00", // Sunday
>        orderLines: [
>            {productId: 9872, name: 'Pencil', quantity: 4, unitPrice: 3.12},
>            {productId: 4098, name: 'Marker', quantity: 5, unitPrice: 4.50}
>        ]
>    }
> ];
