'use strict'



// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...). 
const userAge   = document.querySelector( '.field--userAge' ),
outUserAge      = document.querySelector( '.out-answer' )

const getAge = event => {
    let value = userAge.value
    
    
    if(event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
        event.preventDefault();
    } else {
        switch(true){
            

            case  value >= 0  && value <= 2 :
                outUserAge.innerHTML = 'Вы ребенок'
                break;

            case value > 2 && value < 12:
                 outUserAge.innerHTML = "Вы между ребенком и подростком"
                break;   

            case value >= 12 && value < 18:
                outUserAge.innerHTML = "Вы подросток"
                break;

            case value >= 18 && value < 60:
                outUserAge.innerHTML = "Вы взрослый"
                break;
                
            case value >= 60:
                outUserAge.innerHTML = "Вы  пенсионер"
                break;

            default :
            outUserAge.innerHTML = "Не могу определить"

        }
    }
    if ( value == "" ) outUserAge.innerHTML = ''
  
    
}

userAge.addEventListener('keyup',getAge)

// Конец 


// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
const date      = document.querySelector( '.field--date' ),
btnDate         = document.querySelector( '.btn--date' ),
outUserDate     = document.querySelector( '.out-userYear' ) 

const dateMask = (e) => {
    let datelenght = date.value.length;
    if(e.keyCode < 47 || e.keyCode > 57 ) {
        e.preventDefault();
    }
    if(datelenght !== 1 || datelenght !==3){
        if(e.keyCode == 47) {
            e.preventDefault();
          } 
    }

    if(datelenght === 2 || datelenght === 5) {
        date.value += '/';
      }
  
    
}
const outDate = () => {
let arr = date.value.split('/').map(Number).reverse()
let userDate = new Date(arr)
let nextDay = new Date(userDate)
nextDay.setDate(userDate.getDate() + 1)
outUserDate.innerHTML = nextDay.toLocaleDateString('en-GB')
}
btnDate.addEventListener('click',outDate)
date.addEventListener('keypress',dateMask)

// Конец 

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const valueOfKey    = document.querySelector( '.field--key' ),
outKeyValue         = document.querySelector( '.out-keyValue' )

const checkKeyValue = event => { 
    let value  = valueOfKey.value  
    
    let keyValue = { 
        1:"!",
        2:"@",
        3:"#",
        4:"$",
        5:"%",
        6:"^",
        7:"&",
        8:"*",
        9:"(",
        0:")"

    }
    if( event.which < 48 || event.which > 57  )  {
        event.preventDefault();
    } else {
        for (let key in keyValue ){
           if (key == value ){
            outKeyValue.innerHTML = keyValue[value]
            return
           } else {
            
            outKeyValue.innerHTML = `${value} - значение этого символа недоступно`
           }
           
        }
       
     }
   
     
    
}
valueOfKey.addEventListener('keyup',checkKeyValue)

// Конец 

//  Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const numForCheck      = document.querySelector( '.field--number' ),
outNum                 = document.querySelector( '.out-number' )

const checkNumber = event => {
    let value = numForCheck.value
    
    if(event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
        event.preventDefault()
    } 

    if( value.length != 3){
        outNum.innerHTML = `Слишком короткое число ,допешите ${3 - value.length} сиволов  `
    } else{
        let sameNubers = [[...value].map(Number).filter((n, i, a) => a.indexOf(n) !== i && n === n)]
       
        
      
        sameNubers.forEach(el => {
            if(el.length === 0 ){
                outNum.innerHTML = " Совпадений не найдено!"   
            } else {
                el.forEach(out => {
                    outNum.innerHTML = `Совпадения найдены! Кол.во совпадений ${el.length + 1}, число которое повторяеться:${out}`
                })
            }  
        })        
    }         
}
numForCheck.addEventListener('keydown',checkNumber)
numForCheck.addEventListener('keyup',checkNumber)
// Конец 

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом. 

const valueForPalindromCheck  = document.querySelector( '.field--polindrom' ),
outResultOfCheck              = document.querySelector( '.out-polindrom' )

const polindromFunc = event => {

    let value = valueForPalindromCheck.value

    if (value.length < 5) {
        outResultOfCheck.innerHTML = `Слишком короткая строка для проверки , допешите ${5 - value.length}`
    }else {

       let checkNum = value === value.split("").reverse().join('') 
       let isPolindrom  = `${value} являеться палиндромом `    
       let notPolindrom = `${value} не являеться палиндромом `    
       
       checkNum ? outResultOfCheck .innerHTML = isPolindrom:
       outResultOfCheck.innerHTML             = notPolindrom  
    }
}

valueForPalindromCheck.addEventListener('input',polindromFunc)

// Конец 

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const currency       = document.querySelector( '.currency' ),
exChangeMoney        = document.querySelector( '.field--exchangeMoney' ),
outExchangedMoney    = document.querySelector( '.out-exchangeMoney' ),
exChangeBtn          = document.querySelector( '.btn--convert' ) 

const exChangingMoney = ( event ) => {

    let valueInp = +exChangeMoney.value
    let currencyValue = +currency.value
    
    if( valueInp === 0 ){
        outExchangedMoney.textContent = "Не корректное значение"
    }else {
        outExchangedMoney.innerHTML = (valueInp * currencyValue).toFixed(2)
    }

}

// const convert = () => {
//     let value = +exChangeMoney.value
    
//     outExchangedMoney.innerHTML = (getCurrency() * value).toFixed(2)
    
    
// }   
// const getCurrency = event => {
// let currentValue = +currency.value

//     return currentValue
        
// } 
// exChangeMoney.addEventListener( 'keyup', convert )
// exChangeMoney.addEventListener( 'keydown',function (event){
//     if(event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
//         event.preventDefault()
//     } 
//  } )        
//currency.addEventListener( 'change', getCurrency )  
    
exChangeBtn.addEventListener('click',exChangingMoney)



// Конец 

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const discountField = document.querySelector( '.field--discount' ),
outDiscountValue    = document.querySelector( '.out-discount' )

const calcDiscount = (sum,persent) => {
    let cacl = (sum * persent ) / 100
    outDiscountValue.innerHTML = `Cума к оплате со скидкой ${sum - cacl}`

}
const checkDiscount = () => {
 let value = discountField.value 
    
    switch(true) {

        case value >= 200 && 300 >= value:
            calcDiscount(value,3)
            break;
        
        case value >= 300 && 500 > value:
            calcDiscount(value,5)
            break;
       
        case value >= 500 :
            calcDiscount(value,7)
            break;

        default: 
        outDiscountValue.innerHTML = `Для суммы ${value} нету скидки =(`
        break
    }
}

discountField.addEventListener('keyup',checkDiscount)
discountField.addEventListener( 'keydown', event => {
    if(event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
        event.preventDefault()
    } 
})

// Конец 

const fieldsForBlockSymbols = document.querySelectorAll( '.field--calc' ),
 outResult                  = document.querySelector( '.out-result' ),
 calcBtn                    = document.querySelector( '.btn--calc' )

 const calcResult = () => {
   const lengthOfCircle       = +document.querySelector( '.field--lengthOfCircle' ).value
   const perimeterOfSquare    = +document.querySelector( '.field--perimeterOfSquare' ).value
    
   let getAreaOFSquare  =  (perimeterOfSquare / 4 )** 2
   let getAreaOfSircle  =  (lengthOfCircle ** 2 ) / (4 * Math.PI)
    
   if (getAreaOfSircle > getAreaOFSquare) {
        
    outResult.innerHTML = `Окружность с площадью ${getAreaOfSircle.toFixed(2)} не поместиться в кадрат с площадью ${getAreaOFSquare.toFixed(2)}`

}  else {
    outResult.innerHTML = `Окружность с площадью ${getAreaOfSircle.toFixed(2)}  поместиться в кадрат с площадью ${getAreaOFSquare.toFixed(2)}`
} 
   
   
 }





 calcBtn.addEventListener( 'click',calcResult )
fieldsForBlockSymbols.forEach(el => {el.addEventListener( 'keydown', event => {
    if(event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
        event.preventDefault()
    } 
})})

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.