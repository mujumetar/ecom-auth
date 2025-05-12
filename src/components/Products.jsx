import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../features/cartSlice'
import { showAlert } from '../features/alertSlice'

const Products = () => {

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth.auth)

    function handleCart(ele) {
        dispatch(addCart(ele))
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto p-2 mt-5">
                <div className="flex flex-wrap gap-3 ">
                    {
                        [
                            {
                                "id": 1,
                                "title": "Salt And Pepper Mix - Black",
                                "image": "https://dummyimage.com/147x100.png/dddddd/000000",
                                "price": 350,
                                "category": "error: no such column: grocery",
                                "rating": 3.0
                            },
                            {
                                "id": 2,
                                "title": "Coffee Cup 8oz 5338cd",
                                "image": "https://dummyimage.com/179x100.png/ff4444/ffffff",
                                "price": 847,
                                "category": "error: no such column: grocery",
                                "rating": 2.0
                            },
                            {
                                "id": 3,
                                "title": "Spinach - Baby",
                                "image": "https://dummyimage.com/155x100.png/cc0000/ffffff",
                                "price": 802,
                                "category": "error: no such column: grocery",
                                "rating": 2.1
                            },
                            {
                                "id": 4,
                                "title": "Stock - Veal, White",
                                "image": "https://dummyimage.com/193x100.png/5fa2dd/ffffff",
                                "price": 945,
                                "category": "error: no such column: grocery",
                                "rating": 2.2
                            },
                            {
                                "id": 5,
                                "title": "Mousse - Passion Fruit",
                                "image": "https://dummyimage.com/157x100.png/cc0000/ffffff",
                                "price": 399,
                                "category": "error: no such column: grocery",
                                "rating": 1.2
                            },
                            {
                                "id": 6,
                                "title": "Beer - Paulaner Hefeweisse",
                                "image": "https://dummyimage.com/144x100.png/5fa2dd/ffffff",
                                "price": 286,
                                "category": "error: no such column: grocery",
                                "rating": 2.3
                            },
                            {
                                "id": 7,
                                "title": "Vector Energy Bar",
                                "image": "https://dummyimage.com/164x100.png/ff4444/ffffff",
                                "price": 959,
                                "category": "error: no such column: grocery",
                                "rating": 4.1
                            },
                            {
                                "id": 8,
                                "title": "Wine - Red, Cabernet Merlot",
                                "image": "https://dummyimage.com/166x100.png/5fa2dd/ffffff",
                                "price": 188,
                                "category": "error: no such column: grocery",
                                "rating": 4.6
                            },
                            {
                                "id": 9,
                                "title": "Plasticforkblack",
                                "image": "https://dummyimage.com/174x100.png/5fa2dd/ffffff",
                                "price": 93,
                                "category": "error: no such column: grocery",
                                "rating": 3.7
                            },
                            {
                                "id": 10,
                                "title": "Chip - Potato Dill Pickle",
                                "image": "https://dummyimage.com/112x100.png/cc0000/ffffff",
                                "price": 958,
                                "category": "error: no such column: grocery",
                                "rating": 5.0
                            },
                            {
                                "id": 11,
                                "title": "Poppy Seed",
                                "image": "https://dummyimage.com/232x100.png/cc0000/ffffff",
                                "price": 809,
                                "category": "error: no such column: grocery",
                                "rating": 4.0
                            },
                            {
                                "id": 12,
                                "title": "Napkin White",
                                "image": "https://dummyimage.com/165x100.png/5fa2dd/ffffff",
                                "price": 798,
                                "category": "error: no such column: grocery",
                                "rating": 3.6
                            },
                            {
                                "id": 13,
                                "title": "Urban Zen Drinks",
                                "image": "https://dummyimage.com/228x100.png/5fa2dd/ffffff",
                                "price": 442,
                                "category": "error: no such column: grocery",
                                "rating": 2.0
                            },
                            {
                                "id": 14,
                                "title": "Coconut Milk - Unsweetened",
                                "image": "https://dummyimage.com/179x100.png/cc0000/ffffff",
                                "price": 594,
                                "category": "error: no such column: grocery",
                                "rating": 2.4
                            },
                            {
                                "id": 15,
                                "title": "Chocolate Bar - Smarties",
                                "image": "https://dummyimage.com/132x100.png/cc0000/ffffff",
                                "price": 757,
                                "category": "error: no such column: grocery",
                                "rating": 3.5
                            },
                            {
                                "id": 16,
                                "title": "Bread - White Epi Baguette",
                                "image": "https://dummyimage.com/163x100.png/dddddd/000000",
                                "price": 650,
                                "category": "error: no such column: grocery",
                                "rating": 1.1
                            },
                            {
                                "id": 17,
                                "title": "Carrots - Mini, Stem On",
                                "image": "https://dummyimage.com/110x100.png/dddddd/000000",
                                "price": 741,
                                "category": "error: no such column: grocery",
                                "rating": 4.9
                            },
                            {
                                "id": 18,
                                "title": "Lettuce - Arugula",
                                "image": "https://dummyimage.com/231x100.png/ff4444/ffffff",
                                "price": 713,
                                "category": "error: no such column: grocery",
                                "rating": 1.2
                            },
                            {
                                "id": 19,
                                "title": "Wild Boar - Tenderloin",
                                "image": "https://dummyimage.com/154x100.png/dddddd/000000",
                                "price": 373,
                                "category": "error: no such column: grocery",
                                "rating": 1.9
                            },
                            {
                                "id": 20,
                                "title": "Olives - Stuffed",
                                "image": "https://dummyimage.com/157x100.png/dddddd/000000",
                                "price": 31,
                                "category": "error: no such column: grocery",
                                "rating": 2.1
                            },
                            {
                                "id": 21,
                                "title": "Roe - Lump Fish, Black",
                                "image": "https://dummyimage.com/159x100.png/dddddd/000000",
                                "price": 239,
                                "category": "error: no such column: grocery",
                                "rating": 1.3
                            },
                            {
                                "id": 22,
                                "title": "Brownies - Two Bite, Chocolate",
                                "image": "https://dummyimage.com/179x100.png/dddddd/000000",
                                "price": 821,
                                "category": "error: no such column: grocery",
                                "rating": 3.6
                            },
                            {
                                "id": 23,
                                "title": "Beef - Tenderloin",
                                "image": "https://dummyimage.com/108x100.png/cc0000/ffffff",
                                "price": 441,
                                "category": "error: no such column: grocery",
                                "rating": 2.4
                            },
                            {
                                "id": 24,
                                "title": "Alize Red Passion",
                                "image": "https://dummyimage.com/146x100.png/dddddd/000000",
                                "price": 7,
                                "category": "error: no such column: grocery",
                                "rating": 4.4
                            },
                            {
                                "id": 25,
                                "title": "Appetizer - Tarragon Chicken",
                                "image": "https://dummyimage.com/240x100.png/cc0000/ffffff",
                                "price": 982,
                                "category": "error: no such column: grocery",
                                "rating": 2.6
                            },
                            {
                                "id": 26,
                                "title": "Table Cloth 53x69 White",
                                "image": "https://dummyimage.com/112x100.png/ff4444/ffffff",
                                "price": 958,
                                "category": "error: no such column: grocery",
                                "rating": 4.8
                            },
                            {
                                "id": 27,
                                "title": "Anchovy Fillets",
                                "image": "https://dummyimage.com/236x100.png/ff4444/ffffff",
                                "price": 650,
                                "category": "error: no such column: grocery",
                                "rating": 4.6
                            },
                            {
                                "id": 28,
                                "title": "Plasticknivesblack",
                                "image": "https://dummyimage.com/179x100.png/5fa2dd/ffffff",
                                "price": 158,
                                "category": "error: no such column: grocery",
                                "rating": 4.0
                            },
                            {
                                "id": 29,
                                "title": "Soup V8 Roasted Red Pepper",
                                "image": "https://dummyimage.com/199x100.png/5fa2dd/ffffff",
                                "price": 899,
                                "category": "error: no such column: grocery",
                                "rating": 1.8
                            },
                            {
                                "id": 30,
                                "title": "Initation Crab Meat",
                                "image": "https://dummyimage.com/106x100.png/dddddd/000000",
                                "price": 374,
                                "category": "error: no such column: grocery",
                                "rating": 3.8
                            },
                            {
                                "id": 31,
                                "title": "Pasta - Lasagna, Dry",
                                "image": "https://dummyimage.com/148x100.png/dddddd/000000",
                                "price": 703,
                                "category": "error: no such column: grocery",
                                "rating": 4.1
                            },
                            {
                                "id": 32,
                                "title": "Peas - Pigeon, Dry",
                                "image": "https://dummyimage.com/119x100.png/5fa2dd/ffffff",
                                "price": 625,
                                "category": "error: no such column: grocery",
                                "rating": 1.9
                            },
                            {
                                "id": 33,
                                "title": "Cake - Sheet Strawberry",
                                "image": "https://dummyimage.com/227x100.png/ff4444/ffffff",
                                "price": 434,
                                "category": "error: no such column: grocery",
                                "rating": 3.6
                            },
                            {
                                "id": 34,
                                "title": "Hand Towel",
                                "image": "https://dummyimage.com/230x100.png/5fa2dd/ffffff",
                                "price": 142,
                                "category": "error: no such column: grocery",
                                "rating": 1.5
                            },
                            {
                                "id": 35,
                                "title": "Creme De Menth - White",
                                "image": "https://dummyimage.com/129x100.png/ff4444/ffffff",
                                "price": 896,
                                "category": "error: no such column: grocery",
                                "rating": 2.9
                            },
                            {
                                "id": 36,
                                "title": "Garbage Bag - Clear",
                                "image": "https://dummyimage.com/213x100.png/cc0000/ffffff",
                                "price": 550,
                                "category": "error: no such column: grocery",
                                "rating": 5.0
                            },
                            {
                                "id": 37,
                                "title": "Sugar - Palm",
                                "image": "https://dummyimage.com/182x100.png/cc0000/ffffff",
                                "price": 283,
                                "category": "error: no such column: grocery",
                                "rating": 2.1
                            },
                            {
                                "id": 38,
                                "title": "Fennel - Seeds",
                                "image": "https://dummyimage.com/238x100.png/cc0000/ffffff",
                                "price": 689,
                                "category": "error: no such column: grocery",
                                "rating": 1.2
                            },
                            {
                                "id": 39,
                                "title": "Rabbit - Legs",
                                "image": "https://dummyimage.com/206x100.png/cc0000/ffffff",
                                "price": 735,
                                "category": "error: no such column: grocery",
                                "rating": 1.9
                            },
                            {
                                "id": 40,
                                "title": "Ham - Cooked Bayonne Tinned",
                                "image": "https://dummyimage.com/105x100.png/cc0000/ffffff",
                                "price": 550,
                                "category": "error: no such column: grocery",
                                "rating": 3.3
                            },
                            {
                                "id": 41,
                                "title": "Flour - Whole Wheat",
                                "image": "https://dummyimage.com/123x100.png/ff4444/ffffff",
                                "price": 474,
                                "category": "error: no such column: grocery",
                                "rating": 1.7
                            },
                            {
                                "id": 42,
                                "title": "Napkin White",
                                "image": "https://dummyimage.com/205x100.png/ff4444/ffffff",
                                "price": 471,
                                "category": "error: no such column: grocery",
                                "rating": 4.6
                            },
                            {
                                "id": 43,
                                "title": "Bread - Bistro White",
                                "image": "https://dummyimage.com/234x100.png/cc0000/ffffff",
                                "price": 527,
                                "category": "error: no such column: grocery",
                                "rating": 1.2
                            },
                            {
                                "id": 44,
                                "title": "Pineapple - Canned, Rings",
                                "image": "https://dummyimage.com/175x100.png/dddddd/000000",
                                "price": 989,
                                "category": "error: no such column: grocery",
                                "rating": 4.7
                            },
                            {
                                "id": 45,
                                "title": "Wine - Pinot Noir Latour",
                                "image": "https://dummyimage.com/189x100.png/dddddd/000000",
                                "price": 75,
                                "category": "error: no such column: grocery",
                                "rating": 3.0
                            },
                            {
                                "id": 46,
                                "title": "Pail For Lid 1537",
                                "image": "https://dummyimage.com/195x100.png/cc0000/ffffff",
                                "price": 203,
                                "category": "error: no such column: grocery",
                                "rating": 4.4
                            },
                            {
                                "id": 47,
                                "title": "Tomatoes - Cherry, Yellow",
                                "image": "https://dummyimage.com/192x100.png/cc0000/ffffff",
                                "price": 77,
                                "category": "error: no such column: grocery",
                                "rating": 2.1
                            },
                            {
                                "id": 48,
                                "title": "Sole - Fillet",
                                "image": "https://dummyimage.com/150x100.png/cc0000/ffffff",
                                "price": 772,
                                "category": "error: no such column: grocery",
                                "rating": 3.4
                            },
                            {
                                "id": 49,
                                "title": "Brandy - Bar",
                                "image": "https://dummyimage.com/206x100.png/5fa2dd/ffffff",
                                "price": 172,
                                "category": "error: no such column: grocery",
                                "rating": 1.7
                            },
                            {
                                "id": 50,
                                "title": "Hummus - Spread",
                                "image": "https://dummyimage.com/101x100.png/cc0000/ffffff",
                                "price": 243,
                                "category": "error: no such column: grocery",
                                "rating": 2.9
                            },
                            {
                                "id": 51,
                                "title": "Corn Kernels - Frozen",
                                "image": "https://dummyimage.com/106x100.png/5fa2dd/ffffff",
                                "price": 328,
                                "category": "error: no such column: grocery",
                                "rating": 1.0
                            },
                            {
                                "id": 52,
                                "title": "Flour - Bread",
                                "image": "https://dummyimage.com/214x100.png/ff4444/ffffff",
                                "price": 586,
                                "category": "error: no such column: grocery",
                                "rating": 2.5
                            },
                            {
                                "id": 53,
                                "title": "Rum - White, Gg White",
                                "image": "https://dummyimage.com/223x100.png/ff4444/ffffff",
                                "price": 958,
                                "category": "error: no such column: grocery",
                                "rating": 4.5
                            },
                            {
                                "id": 54,
                                "title": "Soup Campbells Mexicali Tortilla",
                                "image": "https://dummyimage.com/197x100.png/5fa2dd/ffffff",
                                "price": 132,
                                "category": "error: no such column: grocery",
                                "rating": 1.2
                            },
                            {
                                "id": 55,
                                "title": "Chocolate - Semi Sweet, Calets",
                                "image": "https://dummyimage.com/221x100.png/cc0000/ffffff",
                                "price": 708,
                                "category": "error: no such column: grocery",
                                "rating": 3.3
                            },
                            {
                                "id": 56,
                                "title": "Ham - Black Forest",
                                "image": "https://dummyimage.com/233x100.png/dddddd/000000",
                                "price": 29,
                                "category": "error: no such column: grocery",
                                "rating": 2.4
                            },
                            {
                                "id": 57,
                                "title": "Sherbet - Raspberry",
                                "image": "https://dummyimage.com/231x100.png/dddddd/000000",
                                "price": 389,
                                "category": "error: no such column: grocery",
                                "rating": 4.9
                            },
                            {
                                "id": 58,
                                "title": "Horseradish Root",
                                "image": "https://dummyimage.com/205x100.png/ff4444/ffffff",
                                "price": 626,
                                "category": "error: no such column: grocery",
                                "rating": 2.6
                            },
                            {
                                "id": 59,
                                "title": "Cheese - Marble",
                                "image": "https://dummyimage.com/218x100.png/dddddd/000000",
                                "price": 407,
                                "category": "error: no such column: grocery",
                                "rating": 2.3
                            },
                            {
                                "id": 60,
                                "title": "Wine - Spumante Bambino White",
                                "image": "https://dummyimage.com/118x100.png/5fa2dd/ffffff",
                                "price": 82,
                                "category": "error: no such column: grocery",
                                "rating": 1.8
                            },
                            {
                                "id": 61,
                                "title": "Chocolate - Milk",
                                "image": "https://dummyimage.com/239x100.png/ff4444/ffffff",
                                "price": 552,
                                "category": "error: no such column: grocery",
                                "rating": 4.3
                            },
                            {
                                "id": 62,
                                "title": "Mangostein",
                                "image": "https://dummyimage.com/132x100.png/cc0000/ffffff",
                                "price": 299,
                                "category": "error: no such column: grocery",
                                "rating": 3.7
                            },
                            {
                                "id": 63,
                                "title": "Mushrooms - Honey",
                                "image": "https://dummyimage.com/114x100.png/5fa2dd/ffffff",
                                "price": 739,
                                "category": "error: no such column: grocery",
                                "rating": 3.0
                            },
                            {
                                "id": 64,
                                "title": "Potatoes - Mini White 3 Oz",
                                "image": "https://dummyimage.com/223x100.png/cc0000/ffffff",
                                "price": 585,
                                "category": "error: no such column: grocery",
                                "rating": 2.4
                            },
                            {
                                "id": 65,
                                "title": "Jam - Raspberry",
                                "image": "https://dummyimage.com/181x100.png/ff4444/ffffff",
                                "price": 189,
                                "category": "error: no such column: grocery",
                                "rating": 1.4
                            },
                            {
                                "id": 66,
                                "title": "Cardamon Ground",
                                "image": "https://dummyimage.com/180x100.png/cc0000/ffffff",
                                "price": 827,
                                "category": "error: no such column: grocery",
                                "rating": 2.4
                            },
                            {
                                "id": 67,
                                "title": "Oil - Grapeseed Oil",
                                "image": "https://dummyimage.com/141x100.png/dddddd/000000",
                                "price": 711,
                                "category": "error: no such column: grocery",
                                "rating": 4.9
                            },
                            {
                                "id": 68,
                                "title": "Corn - Cream, Canned",
                                "image": "https://dummyimage.com/178x100.png/cc0000/ffffff",
                                "price": 602,
                                "category": "error: no such column: grocery",
                                "rating": 4.4
                            },
                            {
                                "id": 69,
                                "title": "Island Oasis - Pina Colada",
                                "image": "https://dummyimage.com/216x100.png/5fa2dd/ffffff",
                                "price": 293,
                                "category": "error: no such column: grocery",
                                "rating": 4.0
                            },
                            {
                                "id": 70,
                                "title": "Red Snapper - Fresh, Whole",
                                "image": "https://dummyimage.com/124x100.png/ff4444/ffffff",
                                "price": 757,
                                "category": "error: no such column: grocery",
                                "rating": 3.5
                            },
                            {
                                "id": 71,
                                "title": "Bread - Rye",
                                "image": "https://dummyimage.com/114x100.png/ff4444/ffffff",
                                "price": 327,
                                "category": "error: no such column: grocery",
                                "rating": 1.2
                            },
                            {
                                "id": 72,
                                "title": "Butter - Unsalted",
                                "image": "https://dummyimage.com/164x100.png/dddddd/000000",
                                "price": 312,
                                "category": "error: no such column: grocery",
                                "rating": 4.2
                            },
                            {
                                "id": 73,
                                "title": "Hand Towel",
                                "image": "https://dummyimage.com/116x100.png/ff4444/ffffff",
                                "price": 363,
                                "category": "error: no such column: grocery",
                                "rating": 2.5
                            },
                            {
                                "id": 74,
                                "title": "Oil - Sesame",
                                "image": "https://dummyimage.com/221x100.png/ff4444/ffffff",
                                "price": 439,
                                "category": "error: no such column: grocery",
                                "rating": 4.9
                            },
                            {
                                "id": 75,
                                "title": "Yucca",
                                "image": "https://dummyimage.com/184x100.png/5fa2dd/ffffff",
                                "price": 410,
                                "category": "error: no such column: grocery",
                                "rating": 3.1
                            },
                            {
                                "id": 76,
                                "title": "Rosemary - Primerba, Paste",
                                "image": "https://dummyimage.com/210x100.png/cc0000/ffffff",
                                "price": 541,
                                "category": "error: no such column: grocery",
                                "rating": 3.1
                            },
                            {
                                "id": 77,
                                "title": "Lobster - Cooked",
                                "image": "https://dummyimage.com/156x100.png/5fa2dd/ffffff",
                                "price": 183,
                                "category": "error: no such column: grocery",
                                "rating": 1.0
                            },
                            {
                                "id": 78,
                                "title": "Glaze - Clear",
                                "image": "https://dummyimage.com/190x100.png/5fa2dd/ffffff",
                                "price": 823,
                                "category": "error: no such column: grocery",
                                "rating": 1.5
                            },
                            {
                                "id": 79,
                                "title": "Sping Loaded Cup Dispenser",
                                "image": "https://dummyimage.com/148x100.png/cc0000/ffffff",
                                "price": 493,
                                "category": "error: no such column: grocery",
                                "rating": 2.4
                            },
                            {
                                "id": 80,
                                "title": "Wine - Red, Mosaic Zweigelt",
                                "image": "https://dummyimage.com/226x100.png/ff4444/ffffff",
                                "price": 778,
                                "category": "error: no such column: grocery",
                                "rating": 1.6
                            },
                            {
                                "id": 81,
                                "title": "Sobe - Orange Carrot",
                                "image": "https://dummyimage.com/106x100.png/cc0000/ffffff",
                                "price": 972,
                                "category": "error: no such column: grocery",
                                "rating": 5.0
                            },
                            {
                                "id": 82,
                                "title": "External Supplier",
                                "image": "https://dummyimage.com/120x100.png/cc0000/ffffff",
                                "price": 221,
                                "category": "error: no such column: grocery",
                                "rating": 3.2
                            },
                            {
                                "id": 83,
                                "title": "Wine - Red, Cabernet Sauvignon",
                                "image": "https://dummyimage.com/132x100.png/ff4444/ffffff",
                                "price": 124,
                                "category": "error: no such column: grocery",
                                "rating": 1.3
                            },
                            {
                                "id": 84,
                                "title": "Tia Maria",
                                "image": "https://dummyimage.com/209x100.png/ff4444/ffffff",
                                "price": 47,
                                "category": "error: no such column: grocery",
                                "rating": 4.4
                            },
                            {
                                "id": 85,
                                "title": "Skewers - Bamboo",
                                "image": "https://dummyimage.com/244x100.png/dddddd/000000",
                                "price": 207,
                                "category": "error: no such column: grocery",
                                "rating": 3.3
                            },
                            {
                                "id": 86,
                                "title": "Wine - Two Oceans Cabernet",
                                "image": "https://dummyimage.com/126x100.png/5fa2dd/ffffff",
                                "price": 680,
                                "category": "error: no such column: grocery",
                                "rating": 2.8
                            },
                            {
                                "id": 87,
                                "title": "Lid Tray - 12in Dome",
                                "image": "https://dummyimage.com/191x100.png/cc0000/ffffff",
                                "price": 209,
                                "category": "error: no such column: grocery",
                                "rating": 1.0
                            },
                            {
                                "id": 88,
                                "title": "Filo Dough",
                                "image": "https://dummyimage.com/136x100.png/ff4444/ffffff",
                                "price": 457,
                                "category": "error: no such column: grocery",
                                "rating": 2.2
                            },
                            {
                                "id": 89,
                                "title": "Cheese - Mix",
                                "image": "https://dummyimage.com/109x100.png/ff4444/ffffff",
                                "price": 705,
                                "category": "error: no such column: grocery",
                                "rating": 2.6
                            },
                            {
                                "id": 90,
                                "title": "Sweet Pea Sprouts",
                                "image": "https://dummyimage.com/248x100.png/cc0000/ffffff",
                                "price": 20,
                                "category": "error: no such column: grocery",
                                "rating": 3.6
                            },
                            {
                                "id": 91,
                                "title": "Carbonated Water - Orange",
                                "image": "https://dummyimage.com/147x100.png/ff4444/ffffff",
                                "price": 176,
                                "category": "error: no such column: grocery",
                                "rating": 3.3
                            },
                            {
                                "id": 92,
                                "title": "Tuna - Canned, Flaked, Light",
                                "image": "https://dummyimage.com/143x100.png/cc0000/ffffff",
                                "price": 185,
                                "category": "error: no such column: grocery",
                                "rating": 1.9
                            },
                            {
                                "id": 93,
                                "title": "Grapefruit - Pink",
                                "image": "https://dummyimage.com/112x100.png/dddddd/000000",
                                "price": 930,
                                "category": "error: no such column: grocery",
                                "rating": 1.5
                            },
                            {
                                "id": 94,
                                "title": "Puff Pastry - Sheets",
                                "image": "https://dummyimage.com/158x100.png/cc0000/ffffff",
                                "price": 554,
                                "category": "error: no such column: grocery",
                                "rating": 3.8
                            },
                            {
                                "id": 95,
                                "title": "Towel Dispenser",
                                "image": "https://dummyimage.com/229x100.png/cc0000/ffffff",
                                "price": 970,
                                "category": "error: no such column: grocery",
                                "rating": 2.5
                            },
                            {
                                "id": 96,
                                "title": "Wine - Taylors Reserve",
                                "image": "https://dummyimage.com/222x100.png/ff4444/ffffff",
                                "price": 375,
                                "category": "error: no such column: grocery",
                                "rating": 2.3
                            },
                            {
                                "id": 97,
                                "title": "Quail - Whole, Bone - In",
                                "image": "https://dummyimage.com/174x100.png/dddddd/000000",
                                "price": 579,
                                "category": "error: no such column: grocery",
                                "rating": 3.4
                            },
                            {
                                "id": 98,
                                "title": "Quinoa",
                                "image": "https://dummyimage.com/241x100.png/cc0000/ffffff",
                                "price": 957,
                                "category": "error: no such column: grocery",
                                "rating": 2.6
                            },
                            {
                                "id": 99,
                                "title": "Cocoa Butter",
                                "image": "https://dummyimage.com/246x100.png/ff4444/ffffff",
                                "price": 400,
                                "category": "error: no such column: grocery",
                                "rating": 4.8
                            },
                            {
                                "id": 100,
                                "title": "Napkin - Dinner, White",
                                "image": "https://dummyimage.com/183x100.png/5fa2dd/ffffff",
                                "price": 397,
                                "category": "error: no such column: grocery",
                                "rating": 3.0
                            }
                        ].map((ele) => (
                            <div key={ele.id} className="shadow rounded p-2 w-[300px] ">


                                <div className="max-w-sm aspect-square bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg h-full w-full" src={ele.image} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate"> {ele.title}</h5>
                                        </a>
                                            <h5 className=" font-bold tracking-tight text-gray-900 dark:text-white">⭐ {ele.rating}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {ele.price}</p>
                                        <button
                                            onClick={() => dispatch(handleCart({ ele, key: auth.key }))}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            ADD Cart
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Products