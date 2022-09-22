
const cholesterolFriendly   = require('../imgs/dietary/cholestreol.avif')
const dairyFree            = require('../imgs/dietary/dariyFree.avif')
const diabetesFree         = require('../imgs/dietary/diabeteFree.avif')
const eggfree              = require('../imgs/dietary/eggFree.avif')
const glutenFree           = require('../imgs/dietary/glutenFree.avif')
// const veganGlutenFree     = require('')
const ironRichVegetarian  = require('../imgs/dietary/ironRichVeggie.avif')
const heartHealthy         = require('../imgs/dietary/heartHealthy.avif')
const lowFat               = require('../imgs/dietary/lowFat.avif')
// const lowGI                = require('')
// const lowSalt              = require('')
// const lowCarbs             = require('')
const nutFree              = require('../imgs/dietary/nutFree.avif')
const paleo                 = require('../imgs/dietary/paleo.avif')
const vegan                 = require('../imgs/dietary/vegan.avif')
const vegetarian            = require('../imgs/dietary/veggie.avif')
const nonVegetarian        = require('../imgs/dietary/nonVeggie.avif')


export const dietary = () => {

    return (
        [
            {
                'image': cholesterolFriendly,
                'title':'Cholesterol-friendly',
                'key':1
            },
            {
                'image': dairyFree,
                'title':'Dairy-free',
                'key':2
            },
            {
                'image': diabetesFree,
                'title':'diabetes-free',
                'key':3
            },
            {
                'image': eggfree,
                'title':'Egg-free',
                'key':4
            },
            {
                'image': glutenFree,
                'title':'gluten-free',
                'key':5
            },
            {
                'image': ironRichVegetarian,
                'title':'Iron-rich Vegetarian',
                'key':7
            },
            {
                'image': heartHealthy,
                'title':'Heart-healthy',
                'key':8
            },
            {
                'image': lowFat,
                'title':'Low-fat',
                'key':9
            },
            {
                'image': nutFree ,
                'title':'Nut-free',
                'key':10
            },
            {
                'image': paleo ,
                'title':'Paleo',
                'key':11
            },
            {
                'image': vegan  ,
                'title':'Vegan',
                'key':12
            },
            {
                'image': vegetarian ,
                'title':'Vegetarian',
                'key':13
            },
            {
                'image': nonVegetarian ,
                'title':'Non-vegetarian',
                'key':14
            }
       
        ]
    )
}