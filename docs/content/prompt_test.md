## Prompt:

```json
{
	"cart_products": [
		{
			"id": 1,
			"name": "Orchid",
			"description": "A beautiful orchid with lush flowers, perfect for brightening any environment. Its vibrant and delicate colors make it a charming choice.",
			"image": "http://localhost:4202/assets/images/plant-a.svg",
			"price": 25.99,
			"metadata": {
				"species": "Orchidaceae",
				"predominant_color": "white, pink, purple, yellow",
				"average_height": "30-60 cm",
				"family": "Orchid",
				"care_level": "Moderate",
				"light_requirement": "Indirect sunlight",
				"water_requirement": "Moderate",
				"environment": "Indoor",
				"flowering_season": "Spring, Summer"
			}
		},
		{
			"id": 2,
			"name": "Succulent",
			"description": "A resilient and easy-to-care-for succulent. Ideal for those seeking a low-maintenance plant. Its fleshy leaves store water, providing greater durability.",
			"image": "http://localhost:4202/assets/images/plant-b.svg",
			"price": 12.5,
			"metadata": {
				"species": "Crassulaceae",
				"predominant_color": "green",
				"average_height": "10-30 cm",
				"family": "Succulent",
				"care_level": "Easy",
				"light_requirement": "Bright, indirect sunlight",
				"water_requirement": "Low",
				"environment": "Indoor, Outdoor",
				"flowering_season": "Varies"
			}
		}
	]
}
```

## Response:

```json
{
	"data": [
		{
			"id": 6,
			"name": "Ficus",
			"description": "The ficus, with its lush and shiny leaves, is a versatile indoor plant. It adapts to different light conditions and adds a touch of freshness to the decor.",
			"image": "http://localhost:4202/assets/images/plant-f.svg",
			"price": 22.5,
			"metadata": {
				"species": "Moraceae",
				"predominant_color": "green",
				"average_height": "100-300 cm",
				"family": "Ficus",
				"care_level": "Moderate",
				"light_requirement": "Indirect sunlight",
				"water_requirement": "Moderate",
				"environment": "Indoor",
				"flowering_season": "Year-round"
			},
			"match_percentage": 1
		},
		{
			"id": 1,
			"name": "Orchid",
			"description": "A beautiful orchid with lush flowers, perfect for brightening any environment. Its vibrant and delicate colors make it a charming choice.",
			"image": "http://localhost:4202/assets/images/plant-a.svg",
			"price": 25.99,
			"metadata": {
				"species": "Orchidaceae",
				"predominant_color": "white, pink, purple, yellow",
				"average_height": "30-60 cm",
				"family": "Orchid",
				"care_level": "Moderate",
				"light_requirement": "Indirect sunlight",
				"water_requirement": "Moderate",
				"environment": "Indoor",
				"flowering_season": "Spring, Summer"
			},
			"match_percentage": 0.9
		}
	]
}
```