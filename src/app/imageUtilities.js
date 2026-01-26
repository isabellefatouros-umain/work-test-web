export function getRestaurantImage(imageUrl) {
    const keywords = ["hamburgers", "pizza", "taco", "breakfast", "coffee", "fries", "mexican"];
    const match = keywords.find(keyword => imageUrl.includes(keyword));
    return match ? `../public/assets/${match}.png` : "../public/assets/default.png";
}