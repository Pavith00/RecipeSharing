import { useEffect } from "react" //to fetch data from backend.useEffect - function and an array of dependencies. dependencies determine when the effect should run.If empty-effect runs only once after the initial render.If there are dependencies listed, the effect will run when any of those dependencies change.
import { useRecipesContext } from "../hooks/useRecipesContext"
import { Link } from "react-router-dom"
import RecipeForm from "../components/RecipeForm"

function RecipieAdd() {
    const imageUrl = 'https://www.uclaextension.edu/sites/default/files/styles/course_hero/public/2022-03/creative-cafe-20-food-writing-writing-x-4651e.jpg?itok=s8wjp4_7';
    const imageUrl1 = 'https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png';
    const imageUrl2 = 'https://www.jamba.com/-/media/jamba/menu/food/food_classic_306x235.png?v=1&d=20210324T104457Z';
    const imageUrl3 = 'https://cdn.vev.design/cdn-cgi/image/f=auto,q=82/private/3BioR2wOoHVSAex43YJU6JfPMN73/image/imh4v1kwbf.png';
    const imageUrl4 = 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Great%20Food/Cage%20Free/Chicken%20Hash%20Brown%20Scramble%20Bowl%20and%20Burrito%20Beauty%20Image_master_retouch.png';
    const imageUrl5 = 'https://png.pngtree.com/png-clipart/20230914/ourmid/pngtree-sausage-cheese-pizza-slice-three-dimensional-3d-gourmet-food-fast-food-png-image_10116852.png';
    const imgurl6='https://cookcraftco.com/cdn/shop/files/cookcraft_logo_1000x1000.png?v=1614318222';

    return (
        <div className="home">
            <div>

                <nav class="navbar navbar-light bg-light">

                    <a class="navbar-brand" href="/">
                    <img src={imgurl6} alt="Description of the image" height="30" class="d-inline-block align-top" />
                        
                    </a>
                    <div className=" hero-button">

                        <button type="button" class="hero-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></button>
                        <input type="text" class="hero-search" placeholder="Type to Search..."></input>
                    </div>

                </nav>
            </div>
            <div className="addrecipe">
                <div >
                    <img class="img-box" src={imageUrl} alt="Description of the image" />
                </div>
                <p>Take your go-to recipe from favorite to famous!<br></br>

                    Chances are you're reading this because you enjoy cooking and sharing food with others. Posting one of your own recipes on Allrecipes is a great way to share your creations with a much larger crowd!<br></br>

                    Whether you improvise your way around the kitchen, tend to tweak ingredients to get the tastiest result, or follow steps methodically, a recipe is the common starting point. At Allrecipes, we get thousands of recipe submissions every year. Here are some top tips to help your recipe stand out from the crowd and get published on the site for everyone to find, try, and review!</p>
                <table>
                    <tr>
                        <td><div>
                            <h1>&#127829; Tips for Submitting a Recipe to Allrecipes</h1>

                            <h3>&#127828; Title </h3>
                            <p>Choose a clear title that tells the cook what to expect and includes search-friendly words. "Andouille and Chicken Creole Pasta" tells us more about the dish than "Mardi Gras Pasta." Since other cooks often search by ingredient, "Andouille and Chicken Creole Pasta" is more likely to pop up.</p>

                            <h3>&#129534; Description </h3>
                            <p>Include a short but detailed sentence describing the dish that will get the cook excited and tell them what to expect. Check out AppleChef's description for Pan-Seared Tilapia for example:<br></br>

                                "This pan-seared tilapia dish is a delicious and easy way to prepare seafood! Great for a quick weeknight meal accompanied with fresh veggies. Try this healthy dish full of flavor and nutrition!"<br></br>

                                FUNKYSEAMONKEY's description for Best Toffee Ever - Super Easy includes an extra tip about which nuts to use:<br></br>

                                "Chocolate and almonds top off a rich buttery toffee. A simple recipe that you could easily remember and whip up any time. I always get compliments and requests for more. Use any type of nut that you like in place of the almonds."<br></br>

                                To help your recipe editor, please stick to basic text and avoid italics, bold type, excess punctuation, and emojis.

                            </p>

                            <h3>&#129379; Ingredients </h3>
                            <h4>Include measurements</h4>
                            <p>For other cooks to get the same result you did, it's helpful for ingredients to be as exact and descriptive as possible. Instead of "cheese, parsley to taste, and garlic," write "1 cup shredded Cheddar cheese; ¼ cup chopped fresh parsley, or to taste; and 1 clove garlic, crushed."</p>
                            <h4>List ingredients in order</h4>
                            <p>To make a recipe easy to follow, list the ingredients in the order they are used in the recipe.</p>


                            <h3>&#127860; Directions </h3>
                            <h4>Be descriptive</h4>
                            <p>Write out each step and be as thorough and descriptive as possible, using every ingredient that is listed. Instead of "mix everything together" write "Mix flour, milk, eggs, and sugar together in a bowl until batter is smooth."</p>
                            <h4>Include temperatures</h4>
                            <p>For recipes that use the oven, include a preheating step and give an exact oven temperature, e.g., 350 degrees F. For stovetop recipes, state how hot the burners need to be, e.g., medium heat, medium-high heat.</p>

                            <h3> &#8987; Time </h3>
                            <p>Always add a prep and cook time when submitting your recipe. If your recipe doesn't require cooking, put a zero in the cook time section.</p>

                            <h3> &#128248; Photo</h3>
                            <p>Snap a pic of your final dish to show everyone what it should look like and how appetizing it is!</p>
                        </div></td >
                        <td width={'250px'}>
                            <table>
                                <tr>
                                    <img class="deco" src={imageUrl1} alt="Description of the image" />
                                </tr>
                                <tr>
                                    <img class="deco" src={imageUrl2} alt="Description of the image" />
                                </tr>
                                <tr>

                                    <img class="deco" src={imageUrl3} alt="Description of the image" />
                                </tr>
                                <tr>

                                    <img class="deco" src={imageUrl4} alt="Description of the image" />
                                </tr>
                                <tr>

                                    <img class="deco" src={imageUrl5} alt="Description of the image" />
                                </tr>
                            </table>
                        </td>

                    </tr>
                </table>
            </div>

            <RecipeForm />



        </div>
    )
}

export default RecipieAdd