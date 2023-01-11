# functional-ideabox
Looking through your code, [where] were you able to:
- Make use of Pure Functions?
 I believe most of my functions are pure, aside from the ones that touch the dom/
 I used closures in my datamodel - and inside of that datamodel function, I declare an array. Other functions enclosed in the data model touch this array, is that still 'pure'?
- Make use of Higher Order Functions?
 I used a reduce while creating the display for each idea.
 I have functions that take in an array, and when I invoke them I pass them a function call that will evaluate to an array - is that higher order? or do higher order functions need to take in a function as an argument, that we then invoke within the function? getInputValue(), createIdeasDisplay()
- Make use of Closures?
 My data model is a function that contains an array, and other functions.
- Make use of Curried Functions?
I am unsure, I still feel pretty fuzzy on currying
- Make use of Composition?
I am also unsure, Still fuzzy on this one too


How did you go about creating your data model? Where is it in your code?
- I created a function as my data model, which lives in it's own file and contains no DOM logic
How well were you able to separate your data model from the DOM logic? Where is that separation in the code?
- pretty well, I think. I kept all dom logic in the `dom-updates.js` file.
