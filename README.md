# **Car Bidding Auction Website**

### This project was made with the help and backend of [moedeera](https://github.com/moedeera)

<img src="https://i.imgur.com/gkXfOo1.png" alt="Screenshot"/>
<img src="https://i.imgur.com/yoIJOoP.png" alt="Screenshot 2"/>

<br>

# TODO:
- Work on the Post Page design and functionality.

# DONE:

- Navbar on larger screens (bigger than md I believe) should not be a Hamburger Menu
- Make Sold Items Responsive (maybe include masonry grid)
- Fetch API in Sold Items
- Change the CurrentlyListedCard description (maybe instead of " Listed Today at " we put the price, and instead of the Price we put a "view" anchor tag)
- Change the `Ads.jsx` pictures and text.
- Show featured auction container with a scrollbar on desktop devices (did this for all devices)
- Change the `FeaturedItemCard.jsx` description to a countdown (daisyUI). -> Couldn't implement daisyUI as it would brick everything that I already have. I just set it up for a API-based countdown (if possible)
- Make the `CurrentlyListedCard.jsx` text bigger and bigger padding on desktop.
- Choose a color scheme
- Later, change all Lorem Ipsum text to something relevant (mostly Done I believe)
- Fix `See All` button
- Put Max-width on `See All Listed Items`
- make OnCLick on the card, not only the button.
- Work on the bidding page (should have an Image Carousel, and info on the right - name, pricing - and bottom - description)
- Make the guest state persist
- Make the BidForm get accessed if only logged in, otherwise send to login page and then return to BidForm. (somewhat done)
- Update the UserContext so it will fetch the guest profile(if necessary) using the already existing token(from localStorage)
- FIX bug in profile (it doesnt show the profile)
- Refresh after logout
