import React, { useState } from 'react';
import "./victoriasponge.css"; 




const Victoriasponge = () => {
    const [currentCount, updateCount] = useState(12)
    function decreaseCount() {
        // function to update previous count with decremented value
        updateCount(previousCount => previousCount -1)
       }
        // function to increment count
        function increaseCount() {
            // function to update previous count with incremented value
            updateCount(previousCount => previousCount +1) 
        }
        

    return(
        <>
        <div>
            <p>
                Red Velvet Cake
            </p>
            <button className="counter__button" onClick={decreaseCount}>
            <h2 className='counter__button__text'>-</h2>
            </button>
        {/* current count rendered by useState on counter */}
        <span className='counter__value'>{currentCount}</span>
        
        {/* Plus Button*/}
        <button className="counter__button" onClick={increaseCount}>
            <h2 className='counter__button__text'>+</h2>
            </button>
            <p>
                Ingredients:</p>
                <span className='counter__value'>{currentCount}</span>
                <li><span className='counter__value'>{((currentCount/12) * 300).toFixed(0)}</span>ml vegetable oil, plus extra for the tins</li>
                <li><span className='counter__value'>{((currentCount/12) * 500).toFixed(0)}</span>g plain flour</li>
                <li><span className='counter__value'>{((currentCount/12) * 2).toFixed(0)}</span>tbsp cocoa powder</li>
                <li><span className='counter__value'>{((currentCount/12) * 4).toFixed(0)}</span>tsp baking powder</li>
                <li><span className='counter__value'>{((currentCount/12) * 2).toFixed(0)}</span>tsp bicarbonate of soda</li>
                <li><span className='counter__value'>{((currentCount/12) * 560).toFixed(0)}</span>g light brown soft sugar</li>
                <li><span className='counter__value'>{((currentCount/12) * 1).toFixed(0)}</span> tsp fine salt</li>
                <li><span className='counter__value'>{((currentCount/12) * 400).toFixed(0)}</span> ml buttermilk</li>
                <li><span className='counter__value'>{((currentCount/12) * 4).toFixed(0)}</span> tsp vanilla extract</li>
                <li><span className='counter__value'>{((currentCount/12) * 30).toFixed(0)}</span>ml red food colouring</li>
                <li><span className='counter__value'>{((currentCount/12) * 4).toFixed(0)}</span> large eggs</li>
                <p>For the icing:</p>
                <li><span className='counter__value'>{((currentCount/12) * 250).toFixed(0)}</span> g salted butter</li>
                <li><span className='counter__value'>{((currentCount/12) * 750).toFixed(0)}</span>g icing sugar</li>
                <li><span className='counter__value'>{((currentCount/12) * 350).toFixed(0)}</span>g full-fat soft cheese</li>
                <li><span className='counter__value'>{((currentCount/12) * 1).toFixed(0)}</span>tsp vanilla extract</li>
            <p>
                Recipe:
            </p>
            <p>
            <li>Heat the oven to 180C/160C fan/gas 4. Oil and line the base and sides of two 20cm cake tins with baking parchment – if your cake tins are quite shallow, line the sides to a depth of at least 5cm.</li>
            <li>Put half each of the flour, cocoa powder, baking powder, bicarb, sugar and salt in a bowl and mix well. If there are any lumps in the sugar, squeeze these through your fingers to break them up.</li>
            <li>Mix half each of the buttermilk, oil, vanilla extract, food colouring and 100ml water in a jug. Add 2 eggs and whisk until smooth. Pour the wet ingredients into the dry and whisk until well combined. 
                The cake mixture should be bright red, it will get a little darker as it cooks. 
                If it’s not as vivid as you’d like, add a touch more colouring. Pour the cake mixture evenly into the two tins, and bake for 25-30 mins, or until risen and a skewer inserted into the centre comes out clean. 
                Cool in the tins for 10 mins, then turn out onto a wire rack, peel off the baking parchment and leave to cool.</li>
            <li>Repeat steps 1 and 2 with the remaining ingredients, so you have four sponge cakes in total.</li>
            <li>To make the icing, put the butter in a large bowl and sieve in half the icing sugar. Roughly mash together with a spatula, then whizz with a hand mixer until smooth. 
                Add the soft cheese and vanilla, sieve in the remaining icing sugar, mash together again, then blend once more with the hand mixer.</li>
            <li>To assemble the cake, stick one of the sponges to a cake stand or board with a little of the soft cheese icing. 
                Use roughly half the icing to stack the remaining cakes on top, spreading a generous amount between each layer. 
                Pile the remaining icing on top of the assembled cake, and use a palette knife to ease it over the edges, covering the entire surface of the cake. Tidy the plate with a piece of kitchen paper.</li> 
                
            </p>
        </div>
        <div>
        <p>
                Victoria Sponge Cake
            </p>
        <button className="counter__button" onClick={decreaseCount}>
            <h2 className='counter__button__text'>-</h2>
            </button>
        {/* current count rendered by useState on counter */}
        <span className='counter__value'>{currentCount}</span>
        <button className="counter__button" onClick={increaseCount}>
            <h2 className='counter__button__text'>+</h2>
            </button>
            <p>
                Ingredients:</p>
                <span className='counter__value'>{currentCount}</span>
                <li><span className='counter__value'>{((currentCount/12) * 4).toFixed(0)}</span> free range eggs</li>
                <li><span className='counter__value'>{((currentCount/12) * 225).toFixed(0)}</span>g caster sugar, plus a little extra for dusting</li>
                <li><span className='counter__value'>{((currentCount/12) * 225).toFixed(0)}</span>g self-raising flour</li>
                <li><span className='counter__value'>{((currentCount/12) * 2).toFixed(0)}</span>tsp baking powder</li>
                <li><span className='counter__value'>{((currentCount/12) * 225).toFixed(0)}</span>g butter at room temperature, plus a little extra to grease the tins</li>
                <p>To Serve:</p>
                <li>Good-quality strawberry or rasberry Jam</li>
                <li>Whipped double cream</li>
            <p>
                Recipe: 
            </p>
            <p>
                <li>
                Preheat the oven to 180C/160C Fan/Gas 4. Grease and line two 20cm/8in sandwich tins. 
                </li>
                <li>Break the eggs into a large mixing bowl, then add the sugar, flour, baking powder and butter. Mix together until well combined with an electric hand mixer (you can also use a wooden spoon), but be careful not to over mix. Put a damp cloth under your bowl when you’re mixing to stop it moving around. The finished mixture should fall off a spoon easily.</li>
                <li>Divide the mixture evenly between the tins: this doesn’t need to be exact, but you can weigh the filled tins if you want to check. Use a spatula to remove all of the mixture from the bowl and gently smooth the surface of the cakes.</li>
                <li>Bake the cakes on the middle shelf of the oven for 25 minutes. Check them after 20 minutes. The cakes are done when they’re golden-brown and coming away from the edge of the tins. Press them gently to check – they should be springy to the touch. Set aside to cool in their tins for 5 minutes. Run a palette or rounded butter knife around the inside edge of the tins and carefully turn the cakes out onto a cooling rack.</li>
                <li>To assemble the cake, place one cake upside down onto a plate and spread it with plenty of jam. If you want to, you can spread over whipped cream too.</li>
                <li>Top with the second cake, top-side up. Sprinkle over the caster sugar.</li>
            </p>
            
        </div>
        <div>
        <p>
                Chocoloate Fudge Cake
            </p>
        <button className="counter__button" onClick={decreaseCount}>
            <h2 className='counter__button__text'>-</h2>
            </button>
        {/* current count rendered by useState on counter */}
        <span className='counter__value'>{currentCount}</span>
        <button className="counter__button" onClick={increaseCount}>
            <h2 className='counter__button__text'>+</h2>
            </button>
            <p>
                Ingredients:</p>
                <span className='counter__value'>{currentCount}</span>
                <li><span className='counter__value'>{((currentCount/12) * 50).toFixed(0)}</span>g sifted cocoa powder</li>
                <li><span className='counter__value'>{((currentCount/12) * 500).toFixed(0)}</span>tbsp boiling water</li>
                <li><span className='counter__value'>{((currentCount/12) * 3).toFixed(0)}</span>large eggs</li>
                <li><span className='counter__value'>{((currentCount/12) * 50).toFixed(0)}</span>ml milk</li>
                <li><span className='counter__value'>{((currentCount/12) * 175).toFixed(0)}</span>g self-raising flour</li>
                <li><span className='counter__value'>{((currentCount/12) * 1).toFixed(0)}</span>tsp baking powder</li>
                <p>For the icing:</p>
                <li><span className='counter__value'>{((currentCount/12) * 150).toFixed(0)}</span>g plain chocolate</li>
                <li><span className='counter__value'>{((currentCount/12) * 150).toFixed(0)}</span>ml double cream</li>
                <p>Essentials:</p>
                <li>You will need two 20cm deep sandwich tins</li>
            <p>
                Recipe: 
            </p>
            <p>
                <li>
                Preheat the oven to 180C/160C Fan/Gas 4. Grease two 20cm (8in) deep sandwich tins then line the base of each tin with baking parchment.
                </li>
                <li>Blend the cocoa and boiling water in a large bowl then add the remaining cake ingredients and beat until the mixture has become a smooth, thickish batter. Divide the cake mix equally between the prepared tins and level the surface.</li>
                <li>Bake in the pre-heated oven for about 25-30 minutes or until well risen and the tops of the cakes spring back when lightly pressed with a finger. Leave to cool in the tins for a few minutes then turn out, peel off the parchment and finish cooling on a wire rack.</li>
                <li>To make the icing break the chocolate into pieces and gently heat with the cream in a heatproof bowl set over a pan of simmering water for about 10 minutes or just until the chocolate has melted, stirring occasionally.</li>
            </p>
            
        </div>
        
    </>
    )
    }

    
    
export default Victoriasponge;