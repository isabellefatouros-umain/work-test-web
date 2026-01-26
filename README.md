# Hi this is Isabelle (Issy) Speaking

## Overview

Welcome to Umain's Work Test, this is what I have been working on this last week, and I have some sort of final product.

## File Structure

I chose to work based on how we worked in our course in web development and programming, ie, building a model that takes data from an API, writes eventual saved data to Firebase, and then is used in a presenter that sends data to the view, which themselves are dumb, if the user interacts with the view it sends data to the presenter and changes the model. The model also is responsive to the ReactRoot, which in turn leads to Page and then Layout, we also have an mobXReactive model to make the model itself reactive, and a resolvePromise file for API calls and data promises.

### Overview

               API
 Page           |
   |            |
   v            v
ReactRoot ---> Modell <-----> Firebase
                ^
                |
                |
                v
            Presenter
                ^
                |
                |
                v
            Views


## What could be improved on

### Approach
So I started this project pretty well, getting all of the files and downloading everything neccessary, but then i got stupid and didnt plan my approach any further so i just started doing random stuff in the project, setting up methods and views simultaneously (in different files, but I didn't connect them), and I think this is the biggest reason I got stuck, because i didnt really understand my entire code, just the parts, so I couldnt connect them properly. Then I got frustrated and tried AI for help with debugging and it made it more messy.

Because of this i started doing firebase but apparently forgot to initate a proper database, so my website's load times were immense, I debugged it for like a day or two. Ended up being a combination of that and a chunk load error which came from the fact that localhost isn't specific to IPv4 or IPv6 and it sends out both of them and takes the fastest response, so sometimes the cache on the website made it crash. My dad helped me debug that one (Network Consultant) and we changed it so it always connects to the IPv4.

I ended up redoing the entire model, and building up from that, because I couldn't figure out what went were, and I drew a bunch of stuff on paper which improved my understanding a bit.

### Functionality

I would like the restaurant cards to look more like the figma, but I spent enough time on this project and I'm way more happy with it than a couple of days ago. the functionality is otherwise pretty much 100% (idk what to do with the arrows in the Figma, so I didnt add them), im not sure however about if the is_open works properly, but it could just be that they are all closed.

### Design
    I like the design, its almost 100% similar to what the Figma wants, if i had another day or two i could do more tweaking, but its kind of hard since i dont know the basics of CSS, and have just copied almost all of it from the Figma. I would like to actually be able to write CSS and not just copy it.
