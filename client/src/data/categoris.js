const apetizers = require('../imgs/categories/appetizer.avif');
const baked= require('../imgs/categories/baked-good.avif')
const breakfast= require('../imgs/categories/breakfast.avif')
const desserts= require('../imgs/categories/desserts.avif')
const dinner = require('../imgs/categories/dinner.avif')
const holiday = require('../imgs/categories/holiday.avif')
const lunch = require('../imgs/categories/lunch.avif')
const main = require('../imgs/categories/main.avif')
const salad= require('../imgs/categories/salad.avif')
const side= require('../imgs/categories/side-dish.avif')
const snacks= require('../imgs/categories/snacks.avif')
const soup= require('../imgs/categories/soup.avif')

 export const categoryDataImgs = () => {
    
    return ([

    {
        'image': apetizers,
        'title':'Apetizer',
        'key':1
    
    },
    {
        'image':baked,
        'title':'Baked-good',
        'key':2
    
    },
    {
        'image':breakfast,
        'title':'Breakfast',
        'key':3
    
    },
    {
        'image':desserts,
        'title':'Dessert',
        'key':4
    
    },
    {
        'image':dinner,
        'title':'Dinner',
        'key':5
    
    },
    {
        'image':holiday,
        'title':'Holiday',
        'key':6
    
    },
    {
        'image':lunch,
        'title':'Lunch',
        'key':7
    
    },
    {
        'image':main,
        'title':'Main',
        'key':8
    
    },    {
        'image':salad,
        'title':'Salad',
        'key':9
    
    },
    {
        'image':side,
        'title':'Side dish',
        'key':10
    
    },    {
        'image':snacks,
        'title':'Snack',
        'key':11
    
    },    {
        'image': soup,
        'title':'Soup',
        'key':12
    
    }
])}