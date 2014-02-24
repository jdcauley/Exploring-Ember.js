App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is awesome',
    isOnSale: true,
    image: 'assets/images/logo.jpg'
  },
  {
    title: 'Kindling',
    price: 249,
    description: 'Easily start fires',
    isOnSale: false,
    image: 'assets/images/logo.jpg'
  }
];

App.Router.map(function(){
  this.route('about');
  this.resource('products');
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'assets/images/logo.jpg',
  time: function(){
    return(new Date()).toDateString()
  }.property()
});

App.AboutController = Ember.Controller.extend({
  contactName: "Jordan",
  avatar: 'assets/images/logo.jpg',
  time: function(){
    return((new Date()).getDay() === 0) ? "Closed" : "Open"; 
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
})