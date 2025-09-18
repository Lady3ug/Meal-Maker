const menu = {
  _meal: 5,
  _price: "two dollars",
  set _meal(mealToCheck) {
    // Custom logic before assigning the value
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  set _price(priceToCheck) {
    this._price = priceToCheck;
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for ${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

console.log(menu);
console.log(menu.todaysSpecial);