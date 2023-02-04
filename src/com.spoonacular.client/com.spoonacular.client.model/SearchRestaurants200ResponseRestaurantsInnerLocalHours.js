/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational from './SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational';

/**
 * The SearchRestaurants200ResponseRestaurantsInnerLocalHours model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours
 * @version 1.1
 */
class SearchRestaurants200ResponseRestaurantsInnerLocalHours {
    /**
     * Constructs a new <code>SearchRestaurants200ResponseRestaurantsInnerLocalHours</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours
     */
    constructor() { 
        
        SearchRestaurants200ResponseRestaurantsInnerLocalHours.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchRestaurants200ResponseRestaurantsInnerLocalHours</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHours} The populated <code>SearchRestaurants200ResponseRestaurantsInnerLocalHours</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchRestaurants200ResponseRestaurantsInnerLocalHours();

            if (data.hasOwnProperty('operational')) {
                obj['operational'] = SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.constructFromObject(data['operational']);
            }
            if (data.hasOwnProperty('delivery')) {
                obj['delivery'] = SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.constructFromObject(data['delivery']);
            }
            if (data.hasOwnProperty('pickup')) {
                obj['pickup'] = SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.constructFromObject(data['pickup']);
            }
            if (data.hasOwnProperty('dine_in')) {
                obj['dine_in'] = SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational.constructFromObject(data['dine_in']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} operational
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['operational'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} delivery
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['delivery'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} pickup
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['pickup'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/SearchRestaurants200ResponseRestaurantsInnerLocalHoursOperational} dine_in
 */
SearchRestaurants200ResponseRestaurantsInnerLocalHours.prototype['dine_in'] = undefined;






export default SearchRestaurants200ResponseRestaurantsInnerLocalHours;

