const productData = {
    
        "products": [
          {
            "title": "Raspberry Lychee",
            "subtitle": "Prebiotic + Probiotic Sparkling Drink",
            "description": "Jammy raspberry puree, juicy lychees, and fresh brewed honeysuckle flowers reminiscent of your favorite gummy treats.",
            "quantity": "12 cans",
            "total_reviews": 80,
            "rating": 3,
            "flavor": "Raspberry Lychee",
            "prices": {
              "one_time_purchase": 3990.93,
              "subscribe_and_save":  3637.29
            },
            "ingredients": "Filtered Sparkling Water, Raspberry Puree, Lychee Juice Concentrate, Honeysuckle Flower Extract, Organic Cane Sugar, Prebiotic Fiber, Probiotic Cultures, Natural Flavors, Citric Acid",
            "images": [
              "/RL-1.webp",
              "/RL-2.webp",
              "/RL-3.webp"
            ]
          },
          {
            "title": "Peach Ginger",
            "subtitle": "Prebiotic + Probiotic Sparkling Drink",
            "description": "A delightful blend of juicy peaches and zesty ginger, combined with fresh brewed chrysanthemum flowers for a refreshing taste.",
            "quantity": "12 cans",
            "total_reviews": 65,
            "rating": 4.6,
            "flavor": "Peach Ginger",
            "prices": {
              "one_time_purchase": 3790.93,
              "subscribe_and_save":  3337.29
            },
            "ingredients": "Filtered Sparkling Water, Peach Juice Concentrate, Ginger Extract, Chrysanthemum Flower Extract, Organic Cane Sugar, Prebiotic Fiber, Probiotic Cultures, Natural Flavors, Citric Acid",
            "images": [
              "src/assets/products/peach-ginger/PG-1.webp",
              "src/assets/products/peach-ginger/PG-2.webp",
              "src/assets/products/peach-ginger/PG-3.webp"
            ]
          },
          {
            "title": "Mango Gold",
            "subtitle": "Prebiotic + Probiotic Sparkling Drink",
            "description": "Sweet sun-ripened mangos balanced with fresh brewed turmeric root and tart passion fruit in this tropical refresher.",
            "quantity": "12 cans",
            "total_reviews": 75,
            "rating": 4.7,
            "flavor": "Mango Gold",
            "prices": {
              "one_time_purchase": 3690.93,
              "subscribe_and_save":  3137.29
            },
            "ingredients": [
              "Filtered Sparkling Water, Mango Puree, Passion Fruit Juice Concentrate, Turmeric Root Extract, Organic Cane Sugar, Prebiotic Fiber, Probiotic Cultures, Natural Flavors, Citric Acid"
            ],
            "images": [
              "src/assets/products/mango-gold/MG-1.webp",
              "src/assets/products/mango-gold/MG-2.webp",
              "src/assets/products/mango-gold/MG-3.webp"
            ]
          },
          {
            "title": "Strawberry Passion",
            "subtitle": "Prebiotic + Probiotic Sparkling Drink",
            "description": "Sweet strawberry puree blended with exotic passion fruit and fresh brewed hibiscus flowers for a vibrant and tangy taste.",
            "quantity": "12 cans",
            "total_reviews": 75,
            "rating": 5,
            "flavor": "Strawberry Passion",
            "prices": {
              "one_time_purchase": 3700.93,
              "subscribe_and_save":  3267.29
            },
            "ingredients": "Filtered Sparkling Water, Strawberry Puree, Passion Fruit Juice Concentrate, Hibiscus Flower Extract, Organic Cane Sugar, Prebiotic Fiber, Probiotic Cultures, Natural Flavors, Citric Acid",
            "images": [
              "src/assets/products/strawberry-passion/SP-1.webp",
              "src/assets/products/strawberry-passion/SP-2.webp",
              "src/assets/products/strawberry-passion/SP-3.webp"
            ]
          }
        ] 
}


const ingredients = {
  
    "ingredients": [
      {
        "name": "Live Probiotics",
        "description": "Bacillus subtilis is a resilient strain of good bacteria, clinically proven to withstand the harsh environment of the stomach to reach your gut.",
        "image": "src/assets/ingredients/1.avif"
      },
      {
        "name": "Prebiotic Fiber",
        "description": "Our proprietary blend of fiber-rich Jerusalem artichoke and chicory root inulin is like a superfood for your good gut bacteria.",
        "image": "src/assets/ingredients/2.avif"
      },
      {
        "name": "Raspberry",
        "description": "Ripe California raspberries are rich in vitamins C and K and may support heart health.",
        "image": "src/assets/ingredients/3.avif"
      },
      {
        "name": "Lychee",
        "description": "Tropical lychees sourced from Madagascar have a sweet and slightly floral profile and are packed with antioxidants.",
        "image": "src/assets/ingredients/4.avif"
      },
      {
        "name": "Honeysuckle",
        "description": "Honeysuckle flowers are known for their sweet nectar, plus anti-inflammatory and antimicrobial properties.",
        "image": "src/assets/ingredients/5.avif"
      }
    ]
  
  
}

const reviews = {
  "reviews": [
    {
      "name": "Courtney Buffaloe",
      "date": "12/03/2024",
      "rating": 5,
      "comment": "Taste great!"
    },
    {
      "name": "Richard Romeo",
      "date": "11/29/2024",
      "title": "Raspberry Lychee",
      "rating": 5,
      "comment": "My favorite flavor!"
    },
    {
      "name": "Nacho",
      "date": "11/20/2024",
      "title": "A Nice Alternative to Soda",
      "rating": 4,
      "comment": "The strawberry flavor stands out. It is sweet but not as sweet as the banana flavor but sweeter than pear. I like it and will continue to buy it."
    },
    {
      "name": "Emma Green",
      "date": "12/01/2024",
      "title": "Fantastic Variety",
      "rating": 5,
      "comment": "I love the variety pack! It’s great to have different flavors for every mood."
    },
    {
      "name": "Liam Johnson",
      "date": "11/18/2024",
      "title": "Refreshing Drink",
      "rating": 4,
      "comment": "Perfect drink for a hot day. Mango Gold is my absolute favorite!"
    },
    {
      "name": "Sophia White",
      "date": "11/25/2024",
      "title": "Not Too Sweet",
      "rating": 5,
      "comment": "Love how it’s not overly sweet but still delicious. Pineapple Paradise is a hit!"
    }
  ]
}

export { productData, ingredients, reviews };